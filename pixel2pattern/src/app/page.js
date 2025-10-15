import Image from "next/image";
import styles from "./page.module.css";
import MainHome from "@/components/MainHome.jsx";
import NavBar from "@/components/NavBar";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{height: '100vh'}}>
      <NavBar />
      <MainHome />
    </ Box>
  );
}
