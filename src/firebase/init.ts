import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCZkJAfivyANY-iCam5SZgishPrN4bEDrI",
  authDomain: "turismayab.firebaseapp.com",
  projectId: "turismayab",
  storageBucket: "turismayab.appspot.com",
  messagingSenderId: "100247270438",
  appId: "1:100247270438:web:84ed7c061fd01bb20ae2e7",
  measurementId: "G-9K0XS11R7R"
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);