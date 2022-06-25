import  ModalInputLogic  from "./ModalInputLogic"
import ButtonDefault from "../button/Button.style"
import Colors from "../../helpers/Colors"
import  { ModalStyles, ModalStyles__form, ModalStyles__confirmation, ModalStyles__Btn, ModalStyles__input, ModalStyles__btn } from './css/Modal.styles'

const ModalInput = () => {
   
    const {changeName, handleSubmit, confirmation, name, handleCancel, handleConfirmation} = ModalInputLogic()
    const { Neutral } = Colors();

    return (
        <ModalStyles>

            {!confirmation && 
            <ModalStyles__form onSubmit={handleSubmit} >
              <ModalStyles__input type="text" placeholder="name..." onChange={changeName} autoFocus/>
                <ModalStyles__Btn>
                    <ButtonDefault value="Add player" back={Neutral['Score']} />
                    <strong>YOU CANNOT CHANGE LATER</strong>
                </ModalStyles__Btn>
            </ModalStyles__form>}

            {confirmation &&  
            <ModalStyles__confirmation>
                <h2>Are you Sure ?</h2>
                    <p>Are you sure you want <strong>{name}</strong></p>
                <div>
                    <ModalStyles__btn onClick={handleCancel} back={Neutral['Score']}>Cancel</ModalStyles__btn>
                    <ModalStyles__btn onClick={handleConfirmation} back=" hsl(349, 71%, 52%)">Confirm</ModalStyles__btn>
                </div>
            </ModalStyles__confirmation>
            }

        </ModalStyles>
    )
}

export default ModalInput;