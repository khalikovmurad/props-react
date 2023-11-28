import styles from './MainBlock.module.css'


const Card = ({name, price, img}) => {
    return (
        <div className={styles.tovar}>
            <div className={styles.photo}><img src={img} alt="" /></div>
            <div><h1>{price}</h1></div>
            <div><p>{name}</p></div>
            <div><button>Купить</button></div>
        </div>
    )
}
export default Card