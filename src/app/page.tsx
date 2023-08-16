'use client'
import styles from "./page.module.css";
import { useAuth } from "@/context/auth";
import { login, logout } from "@/lib/auth";
import { useState } from "react";
import { getAuth, signOut } from "firebase/auth"
import { useRouter } from 'next/navigation'

export default function Home() {
  const user = useAuth();
  const [waiting, setWaiting] = useState<boolean>(false);
  const router = useRouter()

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

  const logOut = async () => {
    const auth = getAuth()
    await signOut(auth)
      .then(() => {
        router.push('/signin')
      })
      .catch((e) => {
        alert('ログアウトに失敗しました')
        console.log(e)
      })
  }

  return (
    <main className={styles.main}>
      <button
        className='rounded bg-sky-200 py-2 px-4 font-bold text-white hover:bg-sky-300 md:col-span-1'
        type={'submit'}
        onClick={logOut}
      >
        ログアウト
      </button>
    </main>
  );
}
