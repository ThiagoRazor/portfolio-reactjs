import styles from "../Home/Home.module.css";
import { Logo } from '../../../src/components/Logo';
import { BtnMain } from '../../components/BtnMain';
import gitHub from '../../assets/github-original.png';
import animeAvatar from '../../assets/anime-avatar-web.png';
import { showAsideMenu } from '../../components/helpers/showAsideMenu';
import { scrollToTop } from "../../components/helpers/scrollBtn";
import { hideButton } from "../../components/helpers/hideBtn";
import { TypeAnimation } from "react-type-animation";
import '../../Popup.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ShowTextOnHover from "../../components/onHover/hoverTeconologies";
import { items } from '../../components/onHover/items';
import { openWhatsapp } from "../../components/helpers/whatsapp";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {Tracker} from '../../components/CometTracker';

export const Home= () => {
    AOS.init();
    window.addEventListener('scroll', hideButton);

    return (
        
            


        <div>


            <Tracker />
            <button id="topButton" className={styles.topButtonScroll} onClick={scrollToTop}>^</button>
            <button id="topButton" className={styles.whatsappBtn} onClick={openWhatsapp}><WhatsAppIcon style={{ width: '40', height: '40', position:'relative', left:'-4', top:'-5'}}/></button>
            <section id={styles.home}>
                <header>
                    <div className={styles.asideArea}>
                        <div className={`${styles.asideMenuArea} hidden`} id='asideMenu'>
                            <aside>
                                <ul>
                                    <li> <a onClick={scrollToTop}>Início</a> </li>
                                    <li> <a href="./#about">Sobre</a> </li>
                                    <li> <a href="./#projects">Projetos</a> </li>
                                    <li> <a href="./#skills">Habilidades</a> </li>
                                </ul>
                            </aside>
                        </div>
                    </div>
                    <div className={styles.container}>
                        <div className={styles.lowerTotalArea}>
                            <div className={styles.lowerArea}>
                                <div className={styles.totalMenuArea}>
                                    <Logo />
                                    <div className={styles.totalNavArea} data-aos="fade-left" data-aos-offset="500" data-aos-easing="ease-in-sine">
                                        <nav>
                                            <ul>
                                                <li> <a onClick={scrollToTop} >Início  </a> </li>
                                                <li> <a href="./#about">Sobre  </a> </li>
                                                <li> <a href="./#projects">Projetos </a> </li>
                                                <li> <a href="./#skills">Habilidades  </a> </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className={styles.asideBtnArea} id="btnToShow" onClick={showAsideMenu}>
                                        <div className={styles.asideBar}></div>
                                        <div className={styles.asideBar}></div>
                                        <div className={styles.asideBar}></div>
                                    </div>
                                </div>
                            </div>
                        </div>




                    </div>
                </header >
                <main>
                    <div className={styles.bgTotalArea}>
                        <div className={styles.containerTitleArea}>
                            <div className={styles.homeTitleArea}>

                                <TypeAnimation

                                    sequence={[
                                        'Thiago de Oliveira',
                                        1000,
                                    ]}
                                    speed={30}
                                    style={{ fontWeight: 'bold', }}
                                    wrapper="div"
                                    repeat={0}
                                    className={styles.title}
                                />
                                <h1 data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0">
                                    Desenvolvedor Front-End
                                </h1>
                                <BtnMain />
                            </div>
                        </div>

                    </div>
                </main>
            </section>
            <article>
                <section id="about">
                    <div className={styles.boxArticleArea}>
                        <div className={styles.articleArea1} data-aos='fade-up' data-aos-duration="2000">
                            <img src={animeAvatar} alt="South Park Avatar" />
                        </div>
                        <div className={styles.articleArea2} data-aos='fade-up' data-aos-duration="2000">
                            <h2>
                                Quem sou.
                            </h2>
                            <p>
                                Sou um desenvolvedor front-end apaixonado por transformar ideias em projetos incríveis. Tenho habilidades técnicas para criar soluções personalizadas e me adaptar às necessidades do meu cliente. Me dê uma chamada se você quer alguém criativo, habilidoso e pronto para desafios para ajudar a alcançar seus objetivos de negócios.                            </p>
                        </div>
                    </div>
                </section>
                <section id="projects">
                    <div className={styles.boxArticleArea2}>

                        <div className={styles.boxProjects}>
                            <div className={styles.infoProjects}>

                                <h2 data-aos='fade-up' data-aos-duration="2000">Projetos</h2>
                            </div>
                            <div className={styles.boxesProjects}>
                                <a href="https://www.sueliscleaningservice.com">
                                    <div className={styles.projectsContainers} data-aos='fade-up' data-aos-duration="2000">
                                        <h2>Sueli's Cleaning Service</h2>
                                        <p>Site de uma empresa prestadora de serviços de limpeza. Feito em ReactJs e TypeScript</p>
                                    </div>
                                </a>
                                <div className={styles.projectsContainers} data-aos='fade-up' data-aos-duration="2000">
                                    <div className={styles.label}>
                                        <p>Em Breve</p>
                                    </div>
                                </div>
                                <div className={styles.projectsContainers} data-aos='fade-up' data-aos-duration="2000">
                                    <div className={styles.label}>
                                        <p>Em Breve</p>
                                    </div>
                                </div>
                            </div>
                            <a className={styles.gitAnchor} data-aos='fade-up' data-aos-duration="2000" href="https://github.com/ThiagoRazor?tab=repositories">Repositórios no Github</a>

                        </div>

                    </div>
                </section>

                <section id="skills">

                    <div className={styles.boxArticleArea3}>
                        <div className={styles.habilitiesTitle} data-aos='fade-up' data-aos-duration="2000">

                            <h2 data-aos='fade-up' data-aos-duration="2000">Habilidades</h2>
                        </div>
                        <div className={styles.areaBadges}>
                            <ShowTextOnHover items={items} styles={styles} />
                        </div>
                    </div>
                </section>
            </article>
            <footer>
                <div className={styles.containerFooter}>
                    <div className={styles.lowerTotalAreaFooter}>
                        <div className={styles.lowerArea}>
                            <div className={styles.totalMenuArea}>
                                <div className={styles.reservedRights}>
                                    Email: thiago.silva@ice.ufjf.br <br />
                                    Feito por Thiago de Oliveira
                                </div>
                                <div className={styles.contactsBox1}>
                                    <a href="https://github.com/ThiagoRazor"><img className={styles.iconArea} src={gitHub} alt="GitHub" /></a>
                                    <a href="https://www.linkedin.com/in/thiago-de-oliveira-da-silva-806772255/"> <img className={styles.iconArea} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="Linkedin" /> </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </footer >
        </div >

    );

};



