import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <Link href="/">
          <Image src="/next.svg" width={100} height={100} />
        </Link>
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/products">Products</Link>
    </nav>
  );
}
