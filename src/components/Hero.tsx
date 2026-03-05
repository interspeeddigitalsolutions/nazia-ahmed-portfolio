import styles from "@/styles/Hero.module.css";

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.leftBg}>
                <div className={styles.leftContent}>
                    <h1><span>Nazia</span> Ahmed</h1>
                    <p>I am Nazia, one of many aspiring Bengali artists who's fascinated about the beautiful world around us</p>
                    <button className={styles.triangleDown}>
                        <img src="/assets/down-black.png" alt="scroll down" />
                    </button>
                </div>
            </div>

            <div className={styles.rightBg}>
                <div className={styles.rightContent}>
                    <img src="/assets/nazia.avif" alt="Hero" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
