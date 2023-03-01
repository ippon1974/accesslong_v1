import Head from 'next/head'
import classes from '../styles/Home.module.scss';
import Image from "next/image";


export default function Home() {
  return (
    <div className={classes.container}>

      <Head>
        <title>Антенна для переносной трубки Senao SN 258 Plus. Цена: 550 руб.</title>
        <meta name="description" content="" />Антенны
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main>

        <div className={classes.containerShow}>
         <div>
                 <Image 
                    src={"/img/ant_hs_258_plus.jpg"} 
                    width={"362"} 
                    height={"475"} 
                    alt="Антенна для переносной трубки Senao SN 258 Plus"
                 />
                 
          </div>
          <div className={classes.descAnt}>
            <h1>Антенна для переносной трубки Senao SN 258 Plus</h1>
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
            <hr/>
          </div>
        </div>
        
      </main>
      {/* <hr /> */}
      <footer className={classes.footer}>
        @Accesslong store 2023
      </footer>

    </div>
  )
}
