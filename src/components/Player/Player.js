import { useRef, useState, useEffect } from 'react'

import fetchEpisodes from '../../services/fetchEpisodes'

export default function Player() {
  const [episodes, setEpisodes] = useState()

  const [loading, setLoading] = useState(true)
  const [playing, setPlaying] = useState(false)

  const [currentEpisode, setCurrentEpisode] = useState(0)

  const audioRef = useRef(new Audio())

  // Controller Functions
  const togglePlay = () => {
    playing
      ? setPlaying(false)
      : setPlaying(true)
  }

  const handlePlay = () => {
    audioRef.current.play()
  }

  const handlePause = () => {
    audioRef.current.pause()
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
  }, [playing])

  // Handle Episode Changes
  useEffect(() => {
    // unfortunately effective
    if (!loading) {
      const { url } = episodes[currentEpisode]

      handlePause()
      audioRef.current = new Audio(url)
      if (playing) handlePlay()
    }
  }, [currentEpisode])

  return (
    <>
      {/* Progress Bar */}
      
      
      {/* Player Controls */}
      <>
        <button onClick={() => handlePrev()}>prev</button>
        <button onClick={() => togglePlay()}>{playing ? 'pause' : 'play'}</button>
        <button onClick={() => handleNext()}>next</button>
      </>

      {/* Episode List */}
      <ul>
        { loading
          ? 'loading...'
          : episodes.map((episode, key) => (<li key={key}>{episode.title}</li>))
        }
      </ul>
    </>
  )
}