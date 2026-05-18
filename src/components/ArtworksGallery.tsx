import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import styles from "@/styles/ArtworksGallery.module.css";
import artworksData from "../../public/assets/artworks/artworks.json";

const ArtworksGallery = () => {
    const [index, setIndex] = useState(-1);

    const slides = artworksData.map((art) => ({
        src: `/${art.path}`,
        title: art.name,
        description: art.paintType,
    }));

    return (
        <section id="gallery" className={styles.gallery}>
            <h2 className={styles.title}>Artworks Gallery</h2>
            <div className={styles.masonryGrid}>
                {artworksData.map((art, i) => (
                    <div 
                        key={i} 
                        className={styles.artworkCard}
                        onClick={() => setIndex(i)}
                        style={{ cursor: "pointer" }}
                    >
                        <div className={styles.imageWrapper}>
                            <img 
                                src={`/${art.path}`} 
                                alt={art.name || "Artwork"} 
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.artworkInfo}>
                            {art.name && <h3 className={styles.artworkName}>{art.name}</h3>}
                            {art.paintType && <p className={styles.artworkMedium}>{art.paintType}</p>}
                        </div>
                    </div>
                ))}
            </div>

            <Lightbox
                index={index}
                slides={slides}
                open={index >= 0}
                close={() => setIndex(-1)}
                plugins={[Zoom]}
                render={{
                    buttonZoom: () => null,
                    slideFooter: ({ slide }) => (
                        <div className={styles.customCaption}>
                            <h3 className={styles.customTitle}>{slide.title}</h3>
                            <p className={styles.customDescription}>{slide.description}</p>
                        </div>
                    ),
                }}
                styles={{ 
                    container: { backgroundColor: "#000000" }
                }}
            />
        </section>
    );
};

export default ArtworksGallery;
