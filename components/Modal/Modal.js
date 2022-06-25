import Image from 'next/image'
import ModalCss from './css/Modal.styles'

const Modal = ({handleShow, normal}) => {

    const { ModalStyles, ModalStyles__article, ModalStyles__close, ModalStyles__articleContainer } = ModalCss()

    return (
        <ModalStyles>
            <ModalStyles__article>
                
                <ModalStyles__articleContainer>
                    <h3>Rules</h3>
                    <ModalStyles__close>
                            <div>
                            <Image src="/icon-close.svg" alt='icon-close' width={30} height={30} onClick={handleShow}></Image>
                            </div>
                    </ModalStyles__close>
                </ModalStyles__articleContainer>

                    {normal && <Image src="/image-rules.svg" alt='rules' width={260} height={240}/>}
                    {!normal && <Image src="/image-rules-bonus.svg" alt='rules-bonus' width={260} height={240}/>}
            </ModalStyles__article>
        </ModalStyles>
    )
}

export default Modal