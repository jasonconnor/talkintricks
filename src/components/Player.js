import { useEffect, useState } from 'react'
import { faStepBackward, faStepForward, faPause, faPlay } from '@fortawesome/free-solid-svg-icons'

import * as S from '../styles/PlayerStyles'
import { fetchEpisodes } from '../actions/fetchEpisodes'

export function Player() {

  const [error, setError] = useState('')

  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)

  const [episodes, setEpisodes] = useState([])
  const [currentEpisode, setCurrentEpisode] = useState(0)

  function togglePlay() {
    if (playing) {
      handlePause()
    } else {
      handlePlay()
    }
  }

  function handlePlay() {
    setPlaying(true)
  }

  function handlePause() {
    setPlaying(false)
  }

  function updateProgress(event) {
    setProgress(event.target.value)
  }

  async function getEpisodes() {
    const [episodes, error] = await fetchEpisodes()

    if (error) return setError(error.message)

    return episodes
  }

  useEffect(() => {

  }, [])

  return (
    <>

        <S.DisplayContainer>
          <S.PlayerImage />
        </S.DisplayContainer>

        <S.TitleContainer>
          <S.EpisodeTitle>{episodes[currentEpisode].title}</S.EpisodeTitle>
        </S.TitleContainer>

        <S.ProgressBarContainer>
          <S.ProgressBar
            type='range' 
            value={progress}
            onChange={updateProgress}
          />
        </S.ProgressBarContainer>


        <S.ControlsContainer>
          <S.ControlIcon
            icon={faStepBackward}
          />
        
          <S.ControlIcon
            onClick={togglePlay}
            icon={playing ? faPause : faPlay}
          />

          <S.ControlIcon
            icon={faStepForward}
          />
        </S.ControlsContainer>

      <S.DetailsContainer>
        <S.DescriptionText>
          {episodes[currentEpisode].description}
        </S.DescriptionText>

        <S.DescriptionDate>
          Uploaded {episodes[currentEpisode].date}
        </S.DescriptionDate>
      </S.DetailsContainer>
    </>
  )
}