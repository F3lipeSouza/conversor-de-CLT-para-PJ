
import Image from "next/image";
import styles from "./page.module.css";
import{ Title } from './components/title/title';
import { Corpo } from "./components/corpo/corpoPrincipal";

export default function Home() {
  return (
    <>
      <Title/>
      <Corpo/>
    </>
  );
}
