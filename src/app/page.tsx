'use client'
import styles from "./page.module.css";
import { useAuth } from "@/context/auth";
import { login, logout } from "@/lib/auth";
import { useState } from "react";

export default function Home() {
  const user = useAuth();
  const [waiting, setWaiting] = useState<boolean>(false);

  const signIn = () => {
    setWaiting(true);

    login()
      .catch((error) => {
        console.error(error?.code);
      })
      .finally(() => {
        setWaiting(false);
      });
  };

  return (
    <main className={styles.main}>
      {user === null && !waiting && <button onClick={signIn}>ログイン</button>}
      {user && <button onClick={logout}>ログアウト</button>}
    </main>
  );
}
