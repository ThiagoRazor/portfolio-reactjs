import styles from '../Logo/Logo.module.css';
import LogoS from '../../assets/logo.png'
export const Logo = () => {
    return (
        <div className={styles.logoArea} data-aos="fade-right" data-aos-offset="500" data-aos-easing="ease-in-sine">
            <a href="./">
                <h2>Thiago<div className={styles.colorD}>D</div>ev</h2>
            </a>
        </div>
    );

}