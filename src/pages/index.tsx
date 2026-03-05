import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Hero from "@/components/Hero";
import ProfileBio from "@/components/ProfileBio";
import Works from "@/components/Works";
import Recognitions from "@/components/Recognitions";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nazia Ahmed</title>
        <meta name="description" content="Nazia Ahmed" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.page}>
        <Navbar />
        <main className={styles.main}>
          <Hero />
          <ProfileBio />
          <Works />
          <Recognitions />
          <Education />
          <Footer />
        </main>
      </div>
    </>
  );
}
