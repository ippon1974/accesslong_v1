import Head from 'next/head'
import classes from '../styles/Home.module.scss';
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/ui/footer/main/Footer";

const Home = () => {
  return (
    <div>
      
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
              <Image src={'/img/antennas/ant_hs_258_plus.jpg'} width={'300'} height={'300'} alt={'Антенна для переносной трубки Senao SN 258 Plus'} />
              </Link>
              <div className={classes.costIndex}>500</div>
              <Link className={classes.descAgood} href={'goods/ahs258plus'} title={"Антенна для переносной трубки Senao SN 258 Plus"}><h2>Антенна для переносной трубки Senao SN 258 Plus</h2></Link>
              <p className={classes.descGoodIndex}>Рабочая частота: 240—390 МГц. Антенна совместима с радиотелефонами: Senao SN 258 Sport, Senao SN 258 Flashlight</p>
              </article>
            </div>

            <div className={classes.good}>
              <article>
              <Link href={'goods/ahsGar320Flex'}> 
              <Image src={'/img/antennas/ant_garmin_320_hs.jpg'} width={'300'} height={'300'} />
              </Link>
              <div className={classes.costIndex}>685</div>
              <Link className={classes.descAgood} href={'goods/ahsGar320Flex'} title={"Антенна гибкая для навигатора Garmin Astro 320, Garmin Astro 220"}><h2>Антенна гибкая для навигатора Garmin Astro 320, Garmin Astro 220</h2></Link>
              <p className={classes.descGoodIndex}>Лидер продаж. 150-160 МГц гибкая антенна Garmin Astro 220, Garmin Astro 320 портативная антенна</p>
              </article>
            </div>

            <div className={classes.good}>
              <article>
              <Link href={'goods/dogGarmin320'}> 
              <Image src={'/img/antennas/dog_garmin_320.jpg'} width={'300'} height={'300'} alt={'Охотничий GPS ошейник T5 для навигатора Garmin Astro 320, Garmin Astro 220'} />
              </Link>
              <div className={classes.costIndex}>3240</div>
              <Link className={classes.descAgood} href={'goods/dogGarmin320'} title={'Охотничий GPS ошейник T5 для навигатора Garmin Astro 320, Garmin Astro 220'}><h2>Охотничий GPS ошейник T5 для навигатора Garmin Astro 320, Garmin Astro 220</h2></Link>
              <p className={classes.descGoodIndex}>Ошейник Garmin T5 обладает функцией GPS/Glonass навигацией, которая сделает поиск собаки быстрее и сигнал не пропадет под большими кронами деревьев или в глубоких каньонах</p>
              </article>
            </div>

            <div className={classes.good}>
              <article>
              <Link href={'goods/an3g4g5glte'}> 
              <Image src={'/img/antennas/3g4glte_1.jpg'} width={'300'} height={'300'} alt={'Направленная выносная антенна 3G, 4G, LTE, 5G'} />
              </Link>
              <div className={classes.costIndex}>7800</div>
              <Link className={classes.descAgood} href={'goods/an3g4g5glte'} title={'Направленная выносная антенна 3G, 4G, LTE, 5G'}><h2>Направленная выносная антенна 3G, 4G, LTE, 5G</h2></Link>
              <p className={classes.descGoodIndex}>Рабочие частоты антенны: 698-960 / 1710-2700 / 3300-4000 МГц. Коэффициент усиления: 12 дБ</p>
              </article>
            </div>

          </div>

        </div>

        <Footer />
        
      </div>

   </div>
  )
}
export default Home;
