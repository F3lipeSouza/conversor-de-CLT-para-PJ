
import Image from "next/image";
import styles from "./page.module.css";
import{ Title } from './components/title/title';
import { Corpo } from "./components/corpo/corpoPrincipal";
import { Footer } from './components/footer/footer';

export default function Home() {
  return (
    <>
      <Title/>
      <Corpo styles={{flex:1}}/>
      <Footer/>
    </>
  );
}
