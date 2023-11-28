import styles from './Head.module.css'
import corzina from '../photo/corzina.png'

const Head = () => {
    return (
        <div className={styles.header}>
            <div className={styles.intocode}>Intocode Coding Shopcamp</div>
            <div className={styles.corzina}><img src={corzina} alt="" /></div>
        </div>
        
    );
}
export default Head;