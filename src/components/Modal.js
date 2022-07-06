import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { createPortal } from 'react-dom'

import * as S from '../styles/ModalStyles'

export function Modal(props) {
  return createPortal(
    <S.ModalOverlay>
      <S.Modal>
        <S.CloseModalButton 
          onClick={props.closeModal}
          icon={faTimes}
        />

        {props.children}
      </S.Modal>
    </S.ModalOverlay>, document.getElementById('modal')
  )
}