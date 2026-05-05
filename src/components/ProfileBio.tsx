import styles from "@/styles/ProfileBio.module.css";

const ProfileBio = () => {
    return (
        <section id="about" className={styles.profileBio}>
            <div className={styles.leftContent}>
                <h2>Artist Profile</h2>
                <p>
                    I am Nazia, a Bengali artist whose curiosity fuels expansive creativity. My journey begins with colors and clay shapes that mold tangible forms, then transforms into art that voices my inner musings. Unstated feelings breathe on blank canvases as I paint poetry, letting strokes narrate stories I may not utter aloud. Each piece embodies a fragment of me, a life lived through pigment and texture. Art isn’t separate from my existence; it is my life. This evolving practice bridges clay sculpture and painted poetry, serving as a growing dialogue between thought, emotion, and audience.
                </p>
                <button>Contact Me</button>
            </div>

            <div className={styles.rigthContent}>
                <img src="/assets/profile-bio-right-img.avif" alt="artist-bio-cover" />
            </div>
        </section>
    );
};

export default ProfileBio;
