import styles from "../../../style/About.module.css";
import Head from "next/head";
import Image from "next/image";

export const metadata = {
  title: "About",
};

export default function About() {
  return (
    <>
      <Head>
        <title>About | Basu shop</title>
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>About Page</h1>
        <Image src="/next.svg" width={400} height={400} />
      </div>
    </>
  );
}
