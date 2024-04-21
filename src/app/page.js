import styles from "../../style/Home.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Home Page</h1>
        <Image src="/vercel.svg" width={400} height={400} />
        <p>Welcome to basu shop</p>
        <Link href="/products" className={styles.btn}>
          Enter Shop
        </Link>
      </div>
    </>
  );
}
