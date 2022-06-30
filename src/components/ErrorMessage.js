import { useContext } from 'react'
import { faClose } from '@fortawesome/free-solid-svg-icons'

import * as S from '../styles/ErrorStyles'
import { ErrorContext } from '../contexts/ErrorContext'



export function ErrorMessage() {
  const {error, clearError} = useContext(ErrorContext)
  return (
    <S.ErrorMessage>
      <S.ErrorText>{error}</S.ErrorText>


      <S.CloseError
        icon={faClose}
        onClick={clearError}
      ></S.CloseError>
    </S.ErrorMessage>
  )
}