import styles from "@/styles/Recognitions.module.css";

interface RecognitionItem {
    id: number;
    image?: string;
    text?: string;
    title?: string;
    link?: string;
}

const recognitionData: RecognitionItem[] = [
    {
        id: 1,
        image: "/assets/recognitions/recognition-letter-from-white-house-us-senator-1998.avif",
        text: "Recognition letter from White House / US Senator in 1998"
    },
    {
        id: 2,
        image: "/assets/recognitions/coverage-in-the-blue-lotus-online-art-magazine-malaysia-featuring-my-work-cover-photo-2019.avif",
        text: "Coverage in The Blue Lotus: Online Art magazine of Malaysia featuring my work & one of my paintings as cover photo in 2019"
    },
    {
        id: 3,
        image: "/assets/recognitions/art-dubai-project-elephant-in-the-room.avif",
        text: 'Art Dubai: Project "Elephant in the room"'
    },
    {
        id: 4,
        image: "/assets/recognitions/feature-story-showcase-magazine-full-link.avif",
        text: "Feature Story in Showcase Magazine:",
        link: "https://www.showcase.com.bd/residence-design/tying-generations-kutir-golpo/"
    },
    {
        id: 5,
        image: "/assets/recognitions/lotus-magazine-feature-the-blue-lotus-issue-17-2019-issuu-link.avif",
        text: "Lotus Magazine Feature: The Blue Lotus Issue 17, 2019",
        link: "https://issuu.com/martinabradley/docs/the_blue_lotus_17"
    },
    {
        id: 6,
        text: "The Blue Lotus Magazine Feature 2023:",
        link: "https://issuu.com/martinabradley/docs/the_blue_lotus_magazine_58"
    },
    {
        id: 7,
        image: "/assets/recognitions/mash-india-magazine-travelling-canvases-article-link.avif",
        text: "Mash India Magazine: Travelling Canvases article",
        link: "https://www.mashindia.com/art/travelling-canvases"
    },
    {
        id: 8,
        image: "/assets/recognitions/certificate-from-penn-school-of-art.avif",
        title: 'Certificate from Penn School of Art'
    },
    {
        id: 9,
        image: "/assets/recognitions/TWOBYTWO2023.avif",
        title: 'TWOBYTWO2023',
        text: "Participation in Group Art Exhibition at CERULIAN ARTS, Philadelphia, USA"
    },
];

const Recognitions = () => {
    return (
        <section className={styles.recognitions}>
            <h2 className={styles.title}>Recognition & Achievements:</h2>

            <div className={styles.gridContainer}>
                {recognitionData.map((item) => {
                    const placeholderText = encodeURIComponent(item.title || item.text || "Recognition");
                    const imageSrc = item.image || `https://placehold.co/300x400?text=${placeholderText}`;

                    return (
                        <div key={item.id} className={styles.recognitionCard}>
                            <div className={styles.imageWrapper}>
                                <img
                                    src={imageSrc}
                                    alt={item.text || item.title || "Recognition"}
                                />
                            </div>
                            {item.title && <h3 className={styles.cardTitle}>{item.title}</h3>}
                            {(item.text || item.link) && (
                                <p>
                                    {item.text}
                                    {item.link && (
                                        <>
                                            {item.text && " "}
                                            <a
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={styles.link}
                                            >
                                                {item.link}
                                            </a>
                                        </>
                                    )}
                                </p>
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Recognitions;
