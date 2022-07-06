import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const PlayerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 600px;
`

export const DisplayContainer = styled.div`
  align-items: center;
  border-radius: 10px;
  box-shadow: 1px 1px 5px 5px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  padding: 15px;
`

export const PlayerImage = styled.div`
  background: url('./images/logo.png');
  height: 320px;
  width: 480px;
`

export const TitleContainer = styled.div`
  padding: 20px 0;
  width: 100%;
`

export const EpisodeTitle = styled.h2`
  color: #eee;
  font-size: 24px;
  font-weight: lighter;
  margin-left: 20px;
`

export const ProgressBarContainer = styled.div`
  align-items: center;
  display: flex;
  height: 40px;
  justify-content: center;
  width: 100%;
`

export const ProgressText = styled.span`
  color: #bbb;
  font-size: 12px;
`

const Slider = styled.input.attrs({
  type: 'range'
})`
  -webkit-appearance: none;
  background: transparent;
  cursor: pointer;

  &::-webkit-slider-runnable-track {
    height: 6px;
    border-radius: 3px;
    background: linear-gradient(
      90deg,
      #372e41 ${props =>((props.value / props.max) * 100).toFixed(2) + '%'},
      #eee ${props =>((props.value / props.max) * 100).toFixed(2) + '%'}
    );
  }

  &::-moz-range-track {
    height: 6px;
    border-radius: 3px;
    background: linear-gradient(
      90deg,
      #372e41 ${props =>((props.value / props.max) * 100).toFixed(2) + '%'},
      #eee ${props =>((props.value / props.max) * 100).toFixed(2) + '%'}
    );
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    margin-top: -6px;
    height: 16px;
    width: 16px;
    border-radius: 8px;
    background: #22172c;
  }

  &::-moz-range-thumb {
    border: none;
    appearance: none;
    margin-top: -6px;
    height: 16px;
    width: 16px;
    border-radius: 8px;
    background: #22172c;
  }
`

export const ProgressBar = styled(Slider)`
  margin: 0px 10px;
  width: 75%;
`

export const ControlsContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const ControlIcon = styled(FontAwesomeIcon)`
  color: #bbb;
  cursor: pointer;
  font-size: 30px;
  padding: 15px 25px;

  &:hover {
    color: #efefef;
  }
`

export const LargeControlIcon = styled(ControlIcon)`
  font-size: 36px;
`

export const SmallControlIcon = styled(ControlIcon)`
  font-size: 18px;
`

export const VolumeControlContainer = styled.div`
  position: relative;
`

export const VolumeBarWrapper = styled.div`
  position: absolute;
  left: 50px;
  bottom: 5px;
  padding: 14px;
`

export const VolumeBar = styled(Slider)`
  width: 100px;
`

export const DetailsContainer = styled.div`
  color: #bbb;
  padding: 20px 0;
  border-radius: 10px;
  box-shadow: 1px 1px 5px 5px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 25px;
`

export const DescriptionText = styled.p`
  width: 80%;
  font-size: 18px;
`

export const DescriptionDate = styled.p`
  font-size: 12px;
  margin-top: 10px;
  width: 80%;
`


export const EpisodesList = styled.ul`
  list-style: none;
`

export const EpisodeListItemTitle = styled.span`
  color: #eee;
  font-size: 20px;
`

export const EpisodeListItemOptions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const EpisodeListItem = styled.li`
  align-items: center;
  padding: 10px 20px;
  color: #eee;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;

  &:hover {
    background: #323232;

    ${EpisodeListItemTitle} {
      color: #22172c;
    }
  }
`