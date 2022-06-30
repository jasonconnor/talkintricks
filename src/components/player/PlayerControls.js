import { faStepBackward, faStepForward, faList, faPause, faPlay, faVolumeHigh } from '@fortawesome/free-solid-svg-icons'

import { ControlsContainer, ControlIcon, LargeControlIcon, SmallControlIcon } from '../../styles/PlayerStyles'

export function PlayerControls({showVolumeControls, playing, togglePlay, handleNext, handlePrev}) {
  return (
    <ControlsContainer>
      <div>
        <SmallControlIcon
          icon={faVolumeHigh}
          // onMouseOver={}
        />

        { showVolumeControls && <input 
            type='range'
            max='0'
            min='0'
            step='0.1'
          />
        }

      </div>

      <div>
        <ControlIcon 
          icon={faStepBackward}
          onClick={handlePrev}
        />
        <LargeControlIcon
          icon={playing ? faPause : faPlay}
          onClick={togglePlay}

        />
        <ControlIcon
          icon={faStepForward}
          onClick={handleNext}
        />
      </div>

      <SmallControlIcon
        icon={faList}
      />
    </ControlsContainer>
  )
}