import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import classes from '../styles/Home.module.scss';
import Image from "next/image";
import Link from "next/link";
import ListCoods from '../components/page/main/listGoods';
import ListCoodsMobile from '../components/page/main/listGoodsMobile';
import Footer from "../components/ui/footer/main/Footer";
import { useMediaQuery } from 'react-responsive';

const Home = () => {
  
  const [mobile, setMobile] = useState(false)
  const isPhone = useMediaQuery({ query: '(max-width: 481px)'})
  useEffect(() => setMobile(isPhone), [isPhone]);


  return (
    <div>
      
      <Head>
        <title>Антенны для навигаторов, раций, радиотелефонов. Антенны 3G,4G, LTE</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={classes.page}>
        <div className={classes.header}>
          <h1>Accsesslong.store<p>Антенны для навигаторов, раций, радиотелефонов. Антенны 3G,4G, LTE</p></h1>
        </div>
        <div className={classes.navigation}>
          <Link href={'/contacts'} title={"Контакты"}>Контакты</Link>
        </div>
        <div className={classes.subnavigation}>
          Home | Atenns | Contacts
        </div>
        <div className={classes.body}>

          <div className={classes.containerGoods}>
            {mobile ? <ListCoodsMobile /> : <ListCoods />}
          </div>

        </div>

        <Footer />
        
      </div>

   </div>
  )
}
export default Home;
