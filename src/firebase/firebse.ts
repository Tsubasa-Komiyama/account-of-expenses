import {
  FirebaseApp,
  getApps,
  initializeApp,
  getApp,
  FirebaseOptions,
} from "firebase/app";

export const config: FirebaseOptions = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_AMESUREMENT_ID,
  databaseURL: "https://account-of-expenses-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);

export const getFirebaseApp = (): FirebaseApp => {
  return !getApps().length ? initializeApp(config) : getApp();
};
