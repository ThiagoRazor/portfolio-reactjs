import styles from '../BtnMain/BtnMain.module.css';

export const BtnMain = () => {
    return (
        <div className={styles.btnArea}>
            <a href='https://www.linkedin.com/in/thiago-razor/' target="_blank">
                <div className={styles.btnM}>
                    Linkedin
                </div>
            </a>
        </div>
    );
}
