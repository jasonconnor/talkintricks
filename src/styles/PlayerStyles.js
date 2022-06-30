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

export const ProgressBar = styled.input.attrs({
  type: 'range'
})`
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