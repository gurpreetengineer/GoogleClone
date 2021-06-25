
/* 
I am not using this component to fetch my key from firebase.firestore Database because:
=> It is delaying the result in useGoogleSearch() custom hook. This is leading to first call
(null)
(error)
(result of search field)

No doubt this is making our API_KEY secured but this is also making the fetching very slow.
Thereby, leading to the re-rendering of the components.

*/


import { useState, useEffect } from 'react';
import firebase from 'firebase';

export const firebaseConfig = {
	apiKey: 'AIzaSyBqw_zkAFTWXjQ9IbrGmezYYpqjUs_lq2U',
	authDomain: 'clone-9fe0d.firebaseapp.com',
	projectId: 'clone-9fe0d',
	storageBucket: 'clone-9fe0d.appspot.com',
	messagingSenderId: '332622319889',
	appId: '1:332622319889:web:e276f519e0b1599a2e7cb0',
	measurementId: 'G-Z8ELPQPY57'
};


export const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebase.firestore();

export const FetchKey = () => {
	const [API_KEY, setAPI_KEY] = useState('');
	useEffect(() => {
		database.collection('document').onSnapshot(snapshot => {
			snapshot.docs.map(doc => {
				setAPI_KEY(doc.data().key);
			});
		});
	}, []);

	return API_KEY;
};
// export default FetchKey;


// Alternative to above secure way, Less secure but fast way is below:

const API_KEY = 'AIzaSyBlD1TG48StkcsFXmYwCOd6kML4PyS55GA';

export default API_KEY;
