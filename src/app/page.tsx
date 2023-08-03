import { getFirebaseApp } from "@/firebase/firebse";
import styles from "./page.module.css";
import { getApp } from "firebase/app";

getFirebaseApp();

export default function Home() {
  console.log(getApp());
  console.log(process.env.NEXT_PUBLIC_FIREBASE_API_KEY);
  console.log("Hello world!");

  return (
    <main className={styles.main}>
      console.log("Hello world!");
      <h1>Hello world!</h1>
    </main>
  );
}
