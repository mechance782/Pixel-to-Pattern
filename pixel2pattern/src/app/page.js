import Image from "next/image";
import styles from "./page.module.css";
import MainHome from "@/components/MainHome.jsx";
import NavBar from "@/components/NavBar.jsx";

export default function Home() {
  return (
    <>
      <NavBar />
      <MainHome />
    </>
  );
}
