import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDX9ksGGSPpONjmaC5z5EPs55XsXYgMXl4",
    authDomain: "my-react-project-eabd0.firebaseapp.com",
    databaseURL: "https://my-react-project-eabd0.firebaseio.com",
    projectId: "my-react-project-eabd0",
    storageBucket: "",
    messagingSenderId: "449538795913",
    appId: "1:449538795913:web:4e7c430b7c1278412c9958"
  };
  // Initialize Firebase

  const fire=firebase.initializeApp(firebaseConfig);


  export default fire;
  

