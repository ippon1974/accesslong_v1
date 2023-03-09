import Head from 'next/head'
import classes from '../styles/Home.module.scss';
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/ui/footer/main/Footer";

const Constcts = () => {
    return (
        <>
             <div>
      
      <Head>
        <title>Антенны для навигаторов, раций, радиотелефонов. Антенны 3G,4G, LTE</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={classes.page}>
        <div className={classes.header}>
          <h1><Link href={'/'} title={"На главную"}>Accsesslong.store</Link><p>Антенны для навигаторов, раций, радиотелефонов. Антенны 3G,4G, LTE</p></h1>
        </div>
        <div className={classes.navigation}>
         <Link href={'/'} title={"На главную"}>Главная</Link> | Контакты
        </div>
        <div className={classes.subnavigation}>
          Home | Atenns | Contacts
        </div>
        <div className={classes.body}>

            <div className={classes.contacts}>
            <h1>Контакты</h1>
            <p>Пн-Пт с 9:00 до 19:00</p>
            <p>Телефон: +7 (925) 124-22-92</p>
            </div>
    
        </div>

        <Footer />
        
      </div>

   </div>
        </>
    )
}
export default Constcts;