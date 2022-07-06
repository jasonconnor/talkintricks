import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

export const ModalOverlay = styled.div`
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0px;
  left: 0;
  position: absolute;
  right: 0px;
  top: 0;
  z-index: 100;
`

export const CloseModalButton = styled(FontAwesomeIcon)`
  color: #eee;
  cursor: pointer;
  font-size: 18px;
  right: 20px;
  top: 15px;
  position: absolute;
  padding: 10px;
  
  &:hover {
    color: red;
  }
`

export const Modal = styled.div`
  background: #262626;
  border-radius: 10px;
  padding: 50px 25px;
  height: 600px;
  position: relative;
  width: 750px;
`