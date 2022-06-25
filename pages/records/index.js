import UseRecords from "../../composables/UseRecords"
import Title from "../../components/title/Title"
import ButtonDefault from "../../components/button/Button.style"
import styles from '../../styles/Record.module.css';
import Footer from "../../components/Footer/Footer";
import SetUser from "../../helpers/SetUser";

const index = () => {

    const {records} = UseRecords();
    SetUser()


    return (
       <main className={styles.record}>
           <Title main={false}></Title>
            <article className={styles.record__article}>
                {records && records.length < 1 ? <h2 className={styles.record__title}>Loading....</h2>:records.map((record,index) => (

                        <div key={record._id} className={index === 0 ? styles.record__main :index === 1? styles.record__second: index ===2 ? styles.record__third:styles.record__normal}>
                            <ButtonDefault value={record.name} point={record.point} border="transparent" cursor color={index === 0 ? ' hsl(39, 89%, 49%)':index === 1 ? 'hsl(349, 71%, 52%)': index === 2 ? 'hsl(230, 89%, 62%)':"white"}/>
                        </div>

                ))}
            </article>
            <Footer display={true}></Footer>
       </main>
    )
}

export default index;