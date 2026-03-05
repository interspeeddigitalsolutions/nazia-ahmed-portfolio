import styles from "@/styles/Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.topRow}>
                    <h2 className={styles.name}>Nazia Ahmed</h2>
                </div>

                <div className={styles.middleRow}>
                    <div className={styles.column}>
                        <p>Instagram: <a href="https://instagram.com/nazia.visualart.official" target="_blank" rel="noopener noreferrer">nazia.visualart.official</a></p>
                        <p>LinkedIn: <a href="https://www.linkedin.com/in/naziavisualarts" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/naziavisualarts</a></p>
                    </div>

                    <div className={styles.column}>
                        <p><a href="mailto:artbynazia@gmail.com">artbynazia@gmail.com</a>,</p>
                        <p><a href="mailto:ahmednaziaz8@gmail.com">ahmednazia8@gmail.com</a></p>
                    </div>

                    <div className={styles.column}>
                        <p>+8801711563845</p>
                    </div>
                </div>

                <div className={styles.bottomRow}>
                    <p>© 2026 by Nazia Ahmed. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
