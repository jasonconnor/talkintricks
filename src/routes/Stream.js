import { useEffect, useRef, useState } from 'react'

import { PlayerWrapper } from '../styles/PlayerStyles'
import { PlayerDetails } from '../components/player/PlayerDetails'
import { PlayerDisplay } from '../components/player/PlayerDisplay'
import { PlayerList } from '../components/player/PlayerList'

export function Stream() {
  const [error, setError] = useState(null)
  const [episodes, setEpisodes] = useState(null)

  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(false)

  const [showVolumeControls, setShowVolumeControls] = useState(false)
  const [showEpisodeList, setShowEpisodeList] = useState(false)

  const [currentEpisode, setCurrentEpisode] = useState(0)
  const [currentProgress, setCurrentProgress] = useState(0)
  const [currentVolume, setCurrentVolume] = useState(.75)

  const audioRef = useRef(new Audio())
  const progressRef = useRef(0)
  const volumeRef = useRef(currentVolume)

  const { duration } = audioRef.current

  async function getEpisodes() {
    try {
      const response = await fetch('http://localhost:4000/episodes')
      const result = await response.json()
      
      setEpisodes(result)
      audioRef.current = new Audio(result[currentEpisode].url)
    } catch (error) {
      console.error(error)
      setError('Unable to load episodes, try again soon.')
    }
  }

  function startListening() {
    clearInterval(progressRef.current)

    progressRef.current = setInterval(() => {
      const { currentTime, ended } = audioRef.current

      ended
        ? handleNext()
        : setCurrentProgress(currentTime)
    }, [1000])
  }

  function handleNext() {
    currentEpisode < episodes.length - 1
      ? setCurrentEpisode(currentEpisode + 1)
      : setCurrentEpisode(0)
  }

  function handlePrev() {
    currentEpisode - 1 < 0
      ? setCurrentEpisode(episodes.length - 1)
      : setCurrentEpisode(currentEpisode - 1)
  }

  function handleScrubbing(event) {
    const { value } = event.target

    if (playing) handlePause()
    audioRef.current.currentTime = value
    setCurrentProgress(audioRef.current.currentTime)
    if (playing) handlePlay()
  }

  function togglePlay() {
    playing
      ? setPlaying(false)
      : setPlaying(true)
  }

  function toggleMute() {
    console.log('mute toggle')
    muted
      ? setMuted(false)
      : setMuted(true)
  }

  function handleMute() {
    console.log('muted')
    setCurrentVolume(0)
  }

  function handleUnmute() {
    console.log('unmuted')
    volumeRef.current === 0
      ? setCurrentVolume(1)
      : setCurrentVolume(volumeRef.current)
  }

  function handlePlay() {
    audioRef.current.play()
    startListening()
  }

  function handlePause() {
    audioRef.current.pause()
    clearInterval(progressRef.current)
  }

  function handleSetVolume(event) {
    const value = parseFloat(event.target.value)

    if (value === 0) setMuted(true)
    volumeRef.current = value
    setCurrentVolume(value)
    if (muted) setMuted(false)
  }

  function selectEpisode(key) {
    setCurrentEpisode(key)
    setPlaying(true)
    setShowEpisodeList(false)
  }

  useEffect(() => {
    getEpisodes()

    return () => {
      audioRef.current.pause()
      clearInterval(progressRef.current)
    }
  }, [])

  useEffect(() => {
    if (episodes) {
      const { url } = episodes[currentEpisode]
      handlePause()
      audioRef.current = new Audio(url)
      audioRef.current.volume = currentVolume
      setCurrentProgress(0)
  
      if (playing) handlePlay()

    }
  }, [currentEpisode])

  useEffect(() => {
    audioRef.current.volume = currentVolume
  }, [currentVolume])

  useEffect(() => {
    playing
      ? handlePlay()
      : handlePause()
  }, [playing])

  useEffect(() => {
    muted
      ? handleMute()
      : handleUnmute()
  }, [muted])

  return (
    <>
      {error && <>{error}</>}
      {episodes && <PlayerWrapper>
        <PlayerDisplay
          title={episodes[currentEpisode].title}
          progress={currentProgress}
          playing={playing}
          duration={duration ? duration : 0}
          handlePrev={handlePrev}
          handleNext={handleNext}
          handleScrubbing={handleScrubbing}
          togglePlay={togglePlay}
          muted={muted}
          toggleMute={toggleMute}
          currentVolume={currentVolume}
          handleSetVolume={handleSetVolume}
          showVolumeControls={showVolumeControls}
          setShowEpisodeList={setShowEpisodeList}
          setShowVolumeControls={setShowVolumeControls}
        />
        <PlayerDetails
          date={episodes[currentEpisode].date}
          description={episodes[currentEpisode].description}
        />
      </PlayerWrapper>}

      { showEpisodeList && <PlayerList 
          playing={playing}
          episodes={episodes}
          togglePlay={togglePlay}
          selectEpisode={selectEpisode}
          currentEpisode={currentEpisode}
          closeModal={() => setShowEpisodeList(false)}
        />
      }
    </>
  )
}