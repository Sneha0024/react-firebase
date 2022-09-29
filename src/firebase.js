import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCrJnldVNdlcjMcMk0Cis9CFs7Q8ktgWko",
  authDomain: "django-demo-8f192.firebaseapp.com",
  projectId: "django-demo-8f192",
  storageBucket: "django-demo-8f192.appspot.com",
  messagingSenderId: "321257679804",
  appId: "1:321257679804:web:380364fa37c61a5ee099b9"
};
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
