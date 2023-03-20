import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCdoB5BUngUQAxyJAF-QkafRdtiqnd7N4",
  authDomain: "wine-commerce-358b1.firebaseapp.com",
  projectId: "wine-commerce-358b1",
  storageBucket: "wine-commerce-358b1.appspot.com",
  messagingSenderId: "564773306344",
  appId: "1:564773306344:web:1025e2892b5d6d553bee5d"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
    <App />
    </ChakraProvider>
  </React.StrictMode>,
)
