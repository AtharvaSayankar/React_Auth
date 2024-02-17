// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
// Using auth fuctionality of npm firebase module
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9-_2-fPvAzldWnV0TtPqZgw4B43BJ7Zk",
  authDomain: "authentication-488cd.firebaseapp.com",
  projectId: "authentication-488cd",
  storageBucket: "authentication-488cd.appspot.com",
  messagingSenderId: "56462643169",
  appId: "1:56462643169:web:9e5254742dbe97c61f4ca0"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export {auth}