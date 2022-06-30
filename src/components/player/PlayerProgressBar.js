import { ProgressBarContainer, ProgressBar, ProgressText } from '../../styles/PlayerStyles'

export function PlayerProgressBar({progress, duration, handleScrubbing}) {
  
  function formatTime(time) {
    const hours = () => {
      const hrs = Math.floor(time / 3600)
      if (hrs === 0) return null
      if (hrs < 10) return `0${hrs}`
      return hrs
    } 
    const minutes = () => {
      const mins = Math.floor((time / 60) % 60)
      if (mins < 10) return `0${mins}`
      return mins
    }

    const seconds = () => {
      const secs = Math.floor(time % 60)
      if (secs < 10) return `0${secs}`
      return secs
    }

    return `${hours() ? hours() + ':' : ''}${minutes()}:${seconds()}`
  }

  return (
    <ProgressBarContainer>
      <ProgressText>{formatTime(progress)}</ProgressText>
      <ProgressBar
        value={progress}
        onChange={handleScrubbing}
        min='0'
        max={duration}
        step='1'
      />

      <ProgressText>{formatTime(duration)}</ProgressText>
    </ProgressBarContainer>
  )
}