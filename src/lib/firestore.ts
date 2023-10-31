// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyB3gnVaDiz6U8iUwdTQ9p7fefhn-EyYI5A',
	authDomain: 'shs-flex-50a7d.firebaseapp.com',
	projectId: 'shs-flex-50a7d',
	storageBucket: 'shs-flex-50a7d.appspot.com',
	messagingSenderId: '565249607818',
	appId: '1:565249607818:web:f2cbe58c479f540b5bc573',
	measurementId: 'G-1ETYEVQCJ6'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app);
// export let analytics = getAnalytics(app);

export const storage = getStorage(app);
