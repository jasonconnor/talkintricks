import { 
  faStepBackward, 
  faStepForward, 
  faList, 
  faPause, 
  faPlay,
  faVolumeHigh,
  faVolumeMute
} from '@fortawesome/free-solid-svg-icons'

import { 
  ControlsContainer,
  ControlIcon,
  LargeControlIcon,
  SmallControlIcon,
  VolumeBar,
  VolumeBarWrapper,
  VolumeControlContainer
} from '../../styles/PlayerStyles'

export function PlayerControls(props) {
  return (
    <ControlsContainer>
      <VolumeControlContainer
        onMouseLeave={() => props.setShowVolumeControls(false)}
      >
        <SmallControlIcon
          icon={props.muted ? faVolumeMute : faVolumeHigh}
          onMouseOver={() => props.setShowVolumeControls(true)}
          onClick={props.toggleMute}
        />

        {props.showVolumeControls && <VolumeBarWrapper>
          <VolumeBar
            value={props.currentVolume}
            onChange={props.handleSetVolume}
            min='0'
            max='1'
            step='0.1'
          />
        </VolumeBarWrapper>}

      </VolumeControlContainer>

      <div>
        <ControlIcon 
          icon={faStepBackward}
          onClick={props.handlePrev}
        />
        <LargeControlIcon
          icon={props.playing ? faPause : faPlay}
          onClick={props.togglePlay}

        />
        <ControlIcon
          icon={faStepForward}
          onClick={props.handleNext}
        />
      </div>

      <SmallControlIcon
        icon={faList}
        onClick={() => props.setShowEpisodeList(true)}
      />
    </ControlsContainer>
  )
}