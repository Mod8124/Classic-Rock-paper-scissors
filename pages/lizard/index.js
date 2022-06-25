import Title from "../../components/title/Title";
import ModalInput from "../../components/modalInput/ModalInput";
import Options from "../../components/options/Options";
import Footer from "../../components/Footer/Footer";
import Choose from "../../components/choose/Choose";
import Logic from "../../helpers/Logic";
import SetUser from "../../helpers/SetUser";
import styles from '../../styles/Lizard.module.css'


const index = () => {

    const {showModalInput, selected, showOptions, handleSelected, handleRestart} = Logic()
    SetUser()

    return (
        <main className={styles.lizard}>
            <div className={styles.lizard__title}>
                <Title logo={true} main={true}></Title>
            </div>
            <div className={styles.lizard__options}>
                {showOptions && <Options normal={false} handleSelected={handleSelected}/>}
                    {!showOptions && <Choose selected={selected} normal={false} handleRestart={handleRestart}/>}
                {showModalInput && <ModalInput/>}
            </div>
            <Footer normal={false}/>
        </main>
    )
}

export default index;