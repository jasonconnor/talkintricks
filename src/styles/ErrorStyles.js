import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const ErrorMessage = styled.div`
  display: flex;
  flex-direction: row;
  background: #ff7276;
  border-radius: 8px;
  border: 2px solid red;
  width: 60%;
  justify-content: space-between;
`

export const ErrorText = styled.span`
  padding: 20px 10px;
  color: red;
`

export const CloseError = styled(FontAwesomeIcon)`
  cursor: pointer;

  &:hover {
    color: red;
  }
`