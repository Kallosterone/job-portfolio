import styles from "./Header.module.css";

function Header() {
    return(
        <header className={styles['nav-div']}>
            <div className={styles['nav-div-upper']}>
                <h1 className={`${styles['nav-title']} ${styles['flex-center']}`}>Portfolio</h1>
                <h2 className={`${styles['nav-subtitle']} ${styles['flex-center']}`}>Lee Jun Jie</h2>
            </div>
            <div className={`${styles['nav-div-under']} ${styles['flex-center']} ${styles['displayonHover']}`}>
                <div className={styles['flex-center']}>
                    <h1 className={`${styles['page-title']} ${styles['active']}`} data-displayonhover="1" id="home">Home</h1>
                </div>
            </div>
        </header>
    );
}

export default Header