import Head from 'next/head'
import classes from '../styles/Home.module.scss';
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className={classes.container}>
      
      <Head>
        <title>Антенна для переносной трубки Senao SN 258 Plus. Цена: 550 руб.</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div className={classes.page}>
        <div className={classes.header}>
          <h1>Lorem ipsum dolor <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eius officiis doloribus?</p></h1>
        </div>
        <div className={classes.navigation}>
          navigat
        </div>
        <div className={classes.body}>

          <div className={classes.containerGoods}>
            <div className={classes.good}>
              <Image src={'/img/01.jpg'} width={'280'} height={'200'} />
              <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, enim.</h2>
              <p>Desc of one ...</p>
            </div>
            <div className={classes.good}>
             <Image src={'/img/01.jpg'} width={'280'} height={'200'} />
             <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur at vitae, itaque laboriosam voluptas architecto.</h2>
             <p>Desc of one ...</p>
            </div>
            <div className={classes.good}>
              <Image src={'/img/01.jpg'} width={'280'} height={'200'} />
              <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
              <p>Desc of one ...</p>
            </div>
            <div className={classes.good}>
             <Image src={'/img/01.jpg'} width={'280'} height={'200'} />
             <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum aperiam corporis est!</h2>
             <p>Desc of one ...</p>
            </div>
          </div>

        </div>
        <div className={classes.footer}>footer</div>
      </div>


      {/* <div className={classes.wrapper}>
        <div className={classes.goods1}>goods 1</div>
        <div className={classes.goods2}>goods 2</div>
        <div className={classes.goods3}>goods 3</div>
        <div className={classes.goods4}>goods 4</div>
      </div> */}


      {/* <main>

        <div className={classes.containerShow}>
         <div>
                 <Image 
                    src={"/img/antennas/ant_hs_258_plus.jpg"} 
                    width={"362"} 
                    height={"475"} 
                    alt="Антенна для переносной трубки Senao SN 258 Plus"
                 />
                 
          </div>
          <div className={classes.descAnt}>
            <h1>Антенна для переносной трубки Senao SN 258 Plus</h1>
            <h2>Антенна совместима с радиотелефонами: Senao SN 258 Sport, Senao SN 258 Flashlight</h2>
            <p className={classes.decs}>Рабочая частота: 240&mdash;390 МГц</p>
            <p className={classes.price}>Цена: <strong>550 руб.</strong></p>
            <p>Пн-Пт с 9:00 до 20:00</p>
            <p><strong>Телефон</strong>: + 7 (925) 585-33-71 (Мегафон)</p>
            <p><strong>Доставка по России:</strong></p>
            <ul>
              <li>Авито Доставка</li>
              <li>Автортрейдинг</li>
              <li>Деловые Линии</li>
              <li>Почта России</li>
              <li>СДЭК</li>
            </ul>
          </div>
        </div>
        
      </main> */}
      
   </div>
  )
}
