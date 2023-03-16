import styles from '../BtnMain/BtnMain.module.css';

export const BtnMain = () => {
    return (
        <div className={styles.btnArea}>
            <a href='https://www.linkedin.com/in/thiago-oliveira-5a171426a/' target="_blank">
                <div className={styles.btnM}>
                    Linkedin
                </div>
            </a>
        </div>
    );
}
