import Head from 'next/head'
import classes from '../../styles/goods_id.module.scss';
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/ui/footer/main/Footer";

const Ant3G4G5GLTE = () => {
    return (
        <>
             <div>
      
      <Head>
        <title>Направленная выносная антенна 3G, 4G, LTE, 5G</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={classes.page}>

        <div className={classes.header}>
          <h1><Link href={'/'} title={"На главную"}>Accsesslong.store</Link><p>Антенны для навигаторов, раций, радиотелефонов. Антенны 3G,4G, LTE</p></h1>
        </div>
        <div className={classes.navigation}>
          <Link href={'/'} title={"Главная"}>Главная</Link> | <Link href={'/contacts'} title={"Контакты"}>Контакты</Link>
        </div>
        {/* <div className={classes.subnavigation}>
          Home | Atenns | Contacts
        </div> */}

        <div className={classes.body}>
          
          <div className={classes.containerGood}>
            <div className={classes.goodImg}>
              <Image src={"/img/antennas/3g4glte_1.jpg"} width={"450"} height={"500"} alt={'Направленная выносная антенна 3G, 4G, LTE, 5G'} />
            </div>
            <div className={classes.goodDesc}>
              <h2>Направленная выносная антенна 3G, 4G, LTE, 5G</h2>
              <p>Рабочие частоты антенны: 698-960 / 1710-2700 / 3300-4000 МГц.</p>
              <p>Коэффициент усиления: 12 дБ</p>
              <div>Цена: <div className={classes.costId}>7800</div></div>
              <p><strong>Доставка по России</strong></p>
              <ul className={classes.listDeliv}>
                <li>Авито Доставка</li>
                <li>Автортрейдинг</li>
                <li>Деловые Линии</li>
                <li>Почта России</li>
                <li>СДЭК</li>
              </ul>
            </div>
          </div>
          
        </div>

        <Footer />
        
      </div>
      
   </div>
        </>
    )
}
export default Ant3G4G5GLTE;