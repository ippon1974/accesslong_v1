import Head from 'next/head'
import classes from '../styles/Home.module.scss';
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className={classes.container}>
      
      <Head>
        <title>Антенны для навигаторов, раций, радиотелефонов. Антенны 3G,4G, LTE</title>
        <meta name="description" content="" />
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
            <div className={classes.good}>
              <article>
              <Link href={'goods/ahs258plus'}> 
              <Image src={'/img/antennas/ant_hs_258_plus.jpg'} width={'300'} height={'300'} />
              </Link>
              <div className={classes.costIndex}>500</div>
              <Link className={classes.descAgood} href={'goods/ahs258plus'}><h2>Антенна для переносной трубки Senao SN 258 Plus</h2></Link>
              <p className={classes.descGoodIndex}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus amet ea illum, repudiandae odio suscipit doloremque et nemo sint doloribus debitis molestias quos.</p>
              </article>
            </div>

            <div className={classes.good}>
              <article>
              <Link href={'goods/ahs258plus'}> 
              <Image src={'/img/antennas/ant_hs_258_plus.jpg'} width={'300'} height={'300'} />
              </Link>
              <div className={classes.costIndex}>550</div>
              <Link className={classes.descAgood} href={'goods/ahs258plus'}><h2>Антенна для навигатора Garmin Astro 320, Garmin Astro 220</h2></Link>
              <p className={classes.descGoodIndex}>Лидер продаж. 150-160 МГц гибкая антенна Garmin Astro 220, Garmin Astro 320 портативная антенна</p>
              </article>
            </div>

            <div className={classes.good}>
              <article>
              <Link href={'goods/ahs258plus'}> 
              <Image src={'/img/antennas/ant_hs_258_plus.jpg'} width={'300'} height={'300'} />
              </Link>
              <div className={classes.costIndex}>3240</div>
              <Link className={classes.descAgood} href={'goods/ahs258plus'}><h2>Охотничий GPS ошейник T5 для навигатора Garmin Astro 320, Garmin Astro 220</h2></Link>
              <p className={classes.descGoodIndex}>Ошейник Garmin T5 обладает функцией GPS/Glonass навигацией, которая сделает поиск собаки быстрее и сигнал не пропадет под большими кронами деревьев или в глубоких каньонах</p>
              </article>
            </div>

            <div className={classes.good}>
              <article>
              <Link href={'goods/ahs258plus'}> 
              <Image src={'/img/antennas/3g4glte_1.jpg'} width={'300'} height={'300'} />
              </Link>
              <div className={classes.costIndex}>10880</div>
              <Link className={classes.descAgood} href={'goods/ahs258plus'}><h2>Направленная выносная антенна 3G, 4G, LTE, 5G</h2></Link>
              <p className={classes.descGoodIndex}>Рабочие частоты антенны: 698-960 / 1710-2700 / 3300-4000 МГц. Коэффициент усиления: 12 дБ</p>
              </article>
            </div>

          </div>

        </div>
        <div className={classes.footer}>2023 Accsesslong</div>
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
export default Home;
