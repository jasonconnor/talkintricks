import { 
  DisplayContainer, 
  EpisodeTitle, 
  PlayerImage, 
  TitleContainer 
} from '../../styles/PlayerStyles.js'

import { PlayerControls } from './PlayerControls.js'
import { PlayerProgressBar } from './PlayerProgressBar.js'

export function PlayerDisplay(props) {
  return (
    <DisplayContainer>
      <PlayerImage />

      <TitleContainer>
        <EpisodeTitle>{props.title}</EpisodeTitle>
      </TitleContainer>

      <PlayerProgressBar
        progress={props.progress}
        duration={props.duration}
        handleScrubbing={props.handleScrubbing}
      />

      <PlayerControls 
        muted={props.muted}
        playing={props.playing}
        handlePrev={props.handlePrev}
        handleNext={props.handleNext}
        togglePlay={props.togglePlay}
        currentVolume={props.currentVolume}
        showVolumeControls={props.showVolumeControls}
      />
    </DisplayContainer>
  )
}