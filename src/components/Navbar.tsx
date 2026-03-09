import { useState } from 'react';
import styles from "@/styles/Navbar.module.css";
import { IconBrandInstagram, IconBrandFacebook } from '@tabler/icons-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const menuItems = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Exhibition', href: '#exhibition' },
        { name: 'Education', href: '#education' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.logoWrapper}>
                    <img src="/assets/site-logo.png" alt="Logo" className={styles.logo} />
                </div>
                <div className={styles.navRight}>
                    <div className={styles.socialIcons}>
                        <a href="https://www.instagram.com/naznaznaziastudio?igsh=NzVsMGwwNnFoaXYz&utm_source=qr" target="_blank" rel="noopener noreferrer">
                            <IconBrandInstagram className={styles.socialIcon} stroke={1.5} />
                        </a>
                        <a href="https://www.facebook.com/share/1CRMn5zh7w/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                            <IconBrandFacebook className={styles.socialIcon} stroke={1.5} />
                        </a>
                    </div>
                    <button className={styles.menuButton} onClick={toggleMenu}>
                        <span className={styles.menuText}>Menu</span>
                        <img src="/assets/burger-menu.png" alt="Menu" className={styles.burgerIcon} />
                    </button>
                </div>
            </nav>

            <div className={`${styles.overlay} ${isMenuOpen ? styles.open : ''}`}>
                <button className={styles.closeButton} onClick={toggleMenu}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
                <div className={styles.menuLinks}>
                    {menuItems.map((item, index) => (
                        <div key={index} className={styles.linkItem}>
                            <a href={item.href} onClick={toggleMenu}>{item.name}</a>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Navbar;
