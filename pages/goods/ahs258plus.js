import Head from 'next/head'
import classes from '../../styles/goods_id.module.scss';
import Image from "next/image";
import Link from "next/link";
import listGoodsId from '../../components/page/main/listGoodsId';
import ListGoodsIdMobile from '../../components/page/main/listGoodsIdMobile';
import Footer from "../../components/ui/footer/main/Footer";
import { useMediaQuery } from 'react-responsive';

export default function AntHsSenao258Plus() {
    return(
        <>
        <div>
      
          <Head>
            <title>Телескопическая антенна для переносной трубки радиотелефона Senao SN 258 Plus</title>
            <meta name="description" content="" />
            <meta name="viewport" content="width=device-width"/>
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
              <Image src={"/img/antennas/ant_hs_258_plus.jpg"} width={"450"} height={"500"} alt={'Телескопическая антенна для переносной трубки радиотелефона Senao SN 258 Plus'} />
            </div>
            <div className={classes.goodDesc}>
              <h2>Телескопическая антенна для переносной трубки радиотелефона Senao SN 258 Plus</h2>
              <p>Рабочая частота: 240—390 МГц</p>
              <p>Антенна совместима с радиотелефонами: Senao SN 258 Sport, Senao SN 258 Flashlight</p>
              <div>Цена: <div className={classes.costId}>500</div></div>
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