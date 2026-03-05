import styles from "@/styles/Education.module.css";

const Education = () => {
    return (
        <section className={styles.education}>
            <div className={styles.leftContent}>
                <img
                    src="/assets/education-cover.avif"
                    alt="Education Background"
                    className={styles.coverImage}
                />
            </div>
            <div className={styles.rightContent}>
                <div className={styles.contentWrapper}>
                    <h2 className={styles.title}>Education</h2>
                    <ul className={styles.educationList}>
                        <li>2009 : Completed BBA from Independent University, Bangladesh. 2004 :</li>
                        <li>HSC from Viqarunnisa Noon College, Dhaka, Bangladesh 2002 :</li>
                        <li>SSC from Viqarunnisa Noon School, Dhaka, Bangladesh</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Education;
