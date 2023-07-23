import { getFirebaseApp } from "@/firebase/firebse";
import styles from "./page.module.css";
import { getApp } from "firebase/app";

getFirebaseApp();

export default function Home() {
  console.log(getApp());
  return <main className={styles.main}></main>;
}
