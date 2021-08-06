import { useRef, useState, useEffect } from 'react'

import fetchEpisodes from '../../services/fetchEpisodes'

export default function Player() {
  const [episodes, setEpisodes] = useState()

  const [loading, setLoading] = useState(true)
  const [playing, setPlaying] = useState(false)

  const [currentEpisode, setCurrentEpisode] = useState(0)
  const [currentProgress, setCurrentProgress] = useState(0)

  const intervalRef = useRef()
  const audioRef = useRef(new Audio())

  const { duration } = audioRef.current

  const startInterval = () => {
    clearInterval(intervalRef.current)

    intervalRef.current = setInterval(() => {
      const { ended, currentTime } = audioRef.current

      ended
        ? handleNext()
        : setCurrentProgress(currentTime)
    }, [1000])
  }

  // Controller Functions
  const togglePlay = () => {
    playing
      ? setPlaying(false)
      : setPlaying(true)
  }

  const handlePlay = () => {
    audioRef.current.play()
    startInterval()
  }

  const handlePause = () => {
    audioRef.current.pause()
    clearInterval(intervalRef.current)
  }

  const handlePrev = () => {
    currentEpisode - 1 < 0
      ? setCurrentEpisode(episodes.length - 1)
      : setCurrentEpisode(currentEpisode - 1)
  }

  const handleNext = () => {
    currentEpisode < episodes.length - 1
      ? setCurrentEpisode(currentEpisode + 1)
      : setCurrentEpisode(0)
  }

  const handleScrubbing = (event) => {
    const { value } = event.target

    clearInterval(intervalRef.current)
    audioRef.current.currentTime = value
    setCurrentProgress(audioRef.current.currentTime)

    if (playing) handlePlay()
  }

  const selectEpisode = (key) => {
    setCurrentEpisode(key)
  }

  // Fetch Episodes
  useEffect(() => {
    console.log('initial render')
    fetchEpisodes().then((data) => {
      setEpisodes(data)
      setLoading(false)

      // Mount first episode
      const { url } = data[currentEpisode]
      audioRef.current = new Audio(url)
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Handle Play/Pause
  useEffect(() => {
    playing
      ? handlePlay()
      : handlePause()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playing])

  // Handle Episode Changes
  useEffect(() => {
    // unfortunately effective
    if (!loading) {
      const { url } = episodes[currentEpisode]

      handlePause()
      audioRef.current = new Audio(url)
      setCurrentProgress(0)
      if (playing) handlePlay()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentEpisode])

  return (
    <>
      {/* Progress Bar */}
      <>
        <input
          type='range'
          step='1'
          min='0'
          max={`${duration}`}
          value={currentProgress}
          onChange={(event) => handleScrubbing(event)}
        />
      </>

      {/* Player Controls */}
      <>
        <button onClick={() => handlePrev()}>prev</button>
        <button onClick={() => togglePlay()}>{playing ? 'pause' : 'play'}</button>
        <button onClick={() => handleNext()}>next</button>
        
        {/* Volume Controls */}

      </>

      {/* Episode List */}
      <ul>
        { loading
          ? 'loading...'
          : episodes.map((episode, key) => (
              <li key={key} onClick={() => selectEpisode(key)}>{episode.title}</li>)
            )
        }
      </ul>
    </>
  )
}