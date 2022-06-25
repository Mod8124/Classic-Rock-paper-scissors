import Title from "../../components/title/Title";
import Options from "../../components/options/Options";
import ModalInput from "../../components/modalInput/ModalInput";
import Footer from "../../components/Footer/footer";
import Choose from "../../components/choose/Choose";
import Logic from "../../helpers/Logic";
import SetUser from "../../helpers/SetUser";
import styles from '../../styles/Normal.module.css';

const index = () => {

    const {showModalInput, showOptions, handleSelected, selected, handleRestart} = Logic()
    SetUser()
    
    return (
       <main className={styles.normal}>
            <div className={styles.normal__title}>
                <Title main={true}></Title>
            </div>
            <div className={styles.normal__options}>
                {showOptions && <Options normal={true} handleSelected={handleSelected}/>}
                {!showOptions && <Choose selected={selected} normal={true} handleRestart={handleRestart}/>}
                {showModalInput && <ModalInput/>}
            </div>
            <Footer normal={true}/>
       </main>
    )
}

export default index;