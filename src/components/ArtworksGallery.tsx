import { useState } from "react";
import Lightbox, { SlideImage } from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import styles from "@/styles/ArtworksGallery.module.css";
import artworksData from "../../public/assets/artworks/artworks.json";

// Define a custom slide type that includes the properties we're using
interface CustomSlide extends SlideImage {
    title?: string;
    description?: string;
}

const ArtworksGallery = () => {
    const [index, setIndex] = useState(-1);

    const slides: CustomSlide[] = artworksData.map((art) => ({
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
                    slideFooter: ({ slide }) => {
                        const customSlide = slide as CustomSlide;
                        return (
                            <div className={styles.customCaption}>
                                <h3 className={styles.customTitle}>{customSlide.title}</h3>
                                <p className={styles.customDescription}>{customSlide.description}</p>
                            </div>
                        );
                    },
                }}
                styles={{ 
                    container: { backgroundColor: "#000000" }
                }}
            />
        </section>
    );
};

export default ArtworksGallery;
