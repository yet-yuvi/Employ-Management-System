import {useContext} from 'react'
import { ModalContext } from '../../context'

export const BaseModal = ({children}) => {
    const {showModal} = useContext(ModalContext);
  return (
    <div>
        {showModal && <div>{children}</div>}
    </div>
  )
}

