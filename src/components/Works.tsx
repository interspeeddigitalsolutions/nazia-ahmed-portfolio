import styles from "@/styles/Works.module.css";

const Works = () => {
    return (
        <section id="exhibition" className={styles.works}>
            <div className={styles.leftContent}>
                <div className={styles.workCard}>
                    <h3>Solo Exhibitions:</h3>
                    <ul>
                        <li>2022 : “Involutary Solitude” - Nordic Club</li>
                        <li>2019 : “Life Collages” - American Embassy EmployeeAssociation (AEEA).</li>
                        <li>2018 : “Colours of Bangladesh” : American Embassy Employee Association(AEEA). 2012 : “Of Pen & Paint : Visions of Nature” - Bagha Club.</li>
                    </ul>
                </div>

                <div className={styles.workCard}>
                    <h3>Projects:</h3>
                    <ul>
                        <li>2022: Collaborative art initiative supported by UNHCR . Implanting partner: BRACWorked as a Art facilitator/Educator to Develop the idea to make community mural with Rohingya community at Bhashan Char /Relocated Island</li>
                        <li>2021: Art installer : “Elephant in the Room” at Dubai Design District. 2020: Art installer : “Elephant in the room” at Candian High Commission.</li>
                        <li>2019 : Project Coordinator : 15 Italian Contemporary Art day (Giornata DelContemporaneo) at Bay Edge Gallery.</li>
                        <li>2018 : Project Coordinator : Candian Contemporary Artist “Charles Pachter’s “show at</li>
                        <li>National Museam of Bangladesh</li>
                    </ul>
                </div>
            </div>
            <div className={styles.rightContent}>
                <div className={styles.workCard}>
                    <h3>Group Exhibitions:</h3>
                    <ul>
                        <li>2025: “7 FIAP” The 7th International Festival of Fine Arts, Marrakech, Morocco</li>
                        <li>2025: “Reminiscence of Light” Group Art Exhibition, Desh Art Gallery, Baridhara, Dhaka</li>
                        <li>2025: “AESTHETE” Group Art Exhibition, Alliance Francaise De Dhaka</li>
                        <li>2024: “Kolkata, my city” by COG India Art Foundation, Birla Academy of Art & Culture</li>
                        <li>2023: TWO BY TWO Group Art Exhibition, Cerulean Arts, Philadelphia, USA</li>
                        <li>2023: “Zervasart” International Virtual art Exposition, Lucknow, India</li>
                        <li>2023: “Awadh 2023” by Awadh Art Festival at India Habitat Centre</li>
                        <li>2023: Participant at Group Exhibition in Madaripur Shilpakhala in Memory of Ekushe Padak Artist</li>
                        <li>Kazi Anwar Hossain</li>
                        <li>2022: “Bangla Art Fest”- Art Residence Mymensingh</li>
                        <li>2022: “Realizing Divine Harmony” 9th Oreintal Painting Exhibition at Abinta Gallery of Fine Arts</li>
                        <li>2022: “Chitrashaala 2022 International Art Residency “ at Rishikesh, India 2022: “Safarnama” 2022 by COG India Art Foundation at New Delhi, India</li>
                        <li>2019: “Woman in Art” - Dhaka American Women’s club ( DAWC) at Bay Edge Gallery.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Works;
