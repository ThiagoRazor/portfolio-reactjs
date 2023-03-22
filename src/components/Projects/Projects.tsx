import projetosData from './projetos.json';
import styles from '../../pages/Home/Home.module.css';

const Projetos = () => {
    return (
        <div className={styles.boxArticleArea2}>
                <div className={styles.boxProjects}>
                    <div className={styles.infoProjects}>
                        <h2 data-aos="fade-up" data-aos-duration="2000"> 
                            Projetos
                        </h2>
                    </div>
                    <div  className={styles.boxesProjects}>
                        {projetosData.projetos.map((projeto) => (
                            <a href={projeto.link} target={projeto.target}>
                                <div
                                    data-aos="fade-up"
                                    data-aos-duration="2000"
                                >
                                    <h2>{projeto.titulo}</h2>
                                    <p>{projeto.descricao}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                    <a
                        className={styles.gitAnchor}
                        target="_blank"
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        href="https://github.com/ThiagoRazor"
                    >
                        Repositórios no Github
                    </a>
                </div>
            </div>
    )
}

export default Projetos;