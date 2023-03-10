import Head from 'next/head'
import classes from '../../styles/goods_id.module.scss';
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/ui/footer/main/Footer";

const AntFlexHsGarmin320 = () => {
    return (
        <>
         <div>
      
      <Head>
        <title>Антенна гибкая для навигатора Garmin Astro 320, Garmin Astro 220</title>
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
              <Image src={"/img/antennas/ant_garmin_320_hs.jpg"} width={"450"} height={"500"} alt={'Антенна гибкая для навигатора Garmin Astro 320, Garmin Astro 220'} />
            </div>
            <div className={classes.goodDesc}>
              <h2>Антенна гибкая для навигатора Garmin Astro 320, Garmin Astro 220</h2>
              <p>Рабочая частота: 150—160 МГц</p>
              <div>Цена: <div className={classes.costId}>685</div></div>
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
export default AntFlexHsGarmin320;