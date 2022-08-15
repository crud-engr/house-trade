// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBk9mbpFokGVZ_ywaOsiCMURQckbj_SRjs',
  authDomain: 'house-marketplace-2b738.firebaseapp.com',
  projectId: 'house-marketplace-2b738',
  storageBucket: 'house-marketplace-2b738.appspot.com',
  messagingSenderId: '534261722596',
  appId: '1:534261722596:web:c18248bf52b070a8ba2bf1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
