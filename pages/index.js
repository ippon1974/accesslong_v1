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
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>


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
