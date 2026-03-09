import styles from "@/styles/Footer.module.css";
import { IconBrandInstagram, IconBrandFacebook, IconBrandLinkedin, IconMail, IconPhone } from '@tabler/icons-react';

const Footer = () => {
    return (
        <footer id="contact" className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.topRow}>
                    <h2 className={styles.name}>Nazia Ahmed</h2>
                </div>

                <div className={styles.middleRow}>
                    <div className={styles.column}>
                        <div className={styles.socialLinkContainer}>
                            <IconBrandInstagram className={styles.socialIcon} stroke={1.5} />
                            <a href="https://www.instagram.com/naznaznaziastudio?igsh=NzVsMGwwNnFoaXYz&utm_source=qr" target="_blank" rel="noopener noreferrer">naznaznaziastudio</a>
                        </div>
                        <div className={styles.socialLinkContainer}>
                            <IconBrandFacebook className={styles.socialIcon} stroke={1.5} />
                            <a href="https://www.facebook.com/share/1CRMn5zh7w/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">Nazia Ahmed</a>
                        </div>
                        <div className={styles.socialLinkContainer}>
                            <IconBrandLinkedin className={styles.socialIcon} stroke={1.5} />
                            <a href="https://www.linkedin.com/in/naziavisualarts" target="_blank" rel="noopener noreferrer">naziavisualarts</a>
                        </div>
                    </div>

                    <div className={styles.column}>
                        <div className={styles.socialLinkContainer}>
                            <IconMail className={styles.socialIcon} stroke={1.5} />
                            <a href="mailto:artbynazia@gmail.com">artbynazia@gmail.com</a>
                        </div>
                        <div className={styles.socialLinkContainer}>
                            <IconMail className={styles.socialIcon} stroke={1.5} />
                            <a href="mailto:ahmednazia8@gmail.com">ahmednazia8@gmail.com</a>
                        </div>
                    </div>

                    <div className={styles.column}>
                        <div className={styles.socialLinkContainer}>
                            <IconPhone className={styles.socialIcon} stroke={1.5} />
                            <p className={styles.plainText}>+8801711563845</p>
                        </div>
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
