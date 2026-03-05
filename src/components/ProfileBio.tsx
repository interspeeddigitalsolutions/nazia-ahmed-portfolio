import styles from "@/styles/ProfileBio.module.css";

const ProfileBio = () => {
    return (
        <section id="about" className={styles.profileBio}>
            <div className={styles.leftContent}>
                <h2>Artist Profile</h2>
                <p>I am Nazia, one of many aspiring Bengali artists who's fascinated about the beautiful world around us. My fascination of the colors and shapes in my surroundings are expressed vividly in my artwork. This fascination turns into inspiration for my countlessworks of art. The dreams I see come to life on a blank piece of canvas in which I relive my childhood, my surroundings and my life through. I tell my story through the strokesof my paintbrush and a part of me goes into every painting I make. Art is my life, my dream, my passion and like many others, I am motivated to live my fantasy and make my surroundings even more beautiful.</p>
                <button>Contact Me</button>
            </div>

            <div className={styles.rigthContent}>
                <img src="/assets/profile-bio-right-img.avif" alt="artist-bio-cover" />
            </div>
        </section>
    );
};

export default ProfileBio;
