import Card from './Card'
import styles from './MainBlock.module.css'



const MainBlock = () => {
    return (
        <div className={styles.block}>
            <div className={styles.sideBar}>
                <div>Гаджеты и аксессуары</div>
                <hr />
                <div>Бытовая техника</div>
                <hr />
                <div>Прочее</div>
            </div>
            <div className={styles.centr}>
                <Card name="Macbook" price="97000р" img="https://ru-apple.com.ru/image/cache/catalog/products_images/apple_store/Apple_MacBook_Pro_13_3_M2_1-1000x1000.png"/>
                <Card name="Galaxy" price="35999р" img="https://avatars.mds.yandex.net/get-mpic/6425823/img_id6000668805646645156.jpeg/orig"/>
                <Card name="Скутер" price="58950р" img="https://mototandem.ru/images/cms/data/Regulmoto_GRIDO/skuter_regulmoto_grido_lj175t-18_sinij.jpg"/>
                <Card name="Монитор Samsung" price="12000р" img="https://main-cdn.sbermegamarket.ru/big1/hlr-system/565/103/411/143/39/100029989768b0.jpg"/>
                <Card name="Респераторная маска" price="500р" img="https://img.promportal.su/foto/good_fotos/3750/37504821/maska-respiratornaya-6-ti-sloynaya-s-klapanom-i-ugolnim-filtrom_foto_largest.jpg"/>
                <Card name="Cтиральная машина" price="75000р" img="https://main-cdn.sbermegamarket.ru/big1/hlr-system/-18/211/579/512/121/913/600009617844b0.jpeg"/>
            </div>
        </div>
    )
}
export default MainBlock