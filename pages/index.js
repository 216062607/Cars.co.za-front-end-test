import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

function Home() {
  return (
    <div>
      <h1 className="title">
        <Link href="/breeds/">
          <a>Breeds</a>
        </Link>
      </h1>
      <h1 className="title">
        <Link href="/categories/">
          <a>Categories</a>
        </Link>
      </h1>
    </div>
  );
}

export default Home;
