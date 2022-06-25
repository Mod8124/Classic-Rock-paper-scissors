import Image from 'next/image'
import FooterLogic from "./FooterLogic";
import Modal from '../Modal/Modal'
import Link from 'next/link'
import ButtonDefault from "../button/Button.style";
import { FooterStyles, FooterStyles__home,FooterStyles__rules} from './css/Footer.styles';

const Footer = ({normal, display}) => {

    const {user,showModal,handleShow} = FooterLogic()
    
    return (
        <FooterStyles>

              <FooterStyles__home>
                    <Link href={'/'}>
                       <div>
                       <Image src="/icon-home.svg" alt='icon-home' width={40} height={40}/>
                       </div>
                    </Link>
                   <ButtonDefault value={user} border="transparent" cursor  />
              </FooterStyles__home>

                {!display &&
                    <FooterStyles__rules>
                        <div onClick={handleShow}>
                            <ButtonDefault value="Rules" trans pad/>
                        </div>
                    </FooterStyles__rules>
                }
              {showModal && <Modal handleShow={handleShow} normal={normal}/>}

        </FooterStyles>
    )
}

export default Footer;