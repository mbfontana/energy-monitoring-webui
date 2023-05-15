import SideLinks from "@/components/common/SideLinks";
import styles from "../styles/Home.module.scss";
import FirstSection from "@/components/Home/FirstSection";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href="/">
        <img alt="Logo" src="logo.svg" className={styles.logo} />
      </Link>
      <FirstSection />
      <SideLinks />
    </main>
  );
}
