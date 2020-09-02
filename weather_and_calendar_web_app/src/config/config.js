import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBDMwGHbc3FBMEYkL_UZPRc0vkuVTvsR9g",
  authDomain: "weather-and-calendar-web-app.firebaseapp.com",
  databaseURL: "https://weather-and-calendar-web-app.firebaseio.com",
  projectId: "weather-and-calendar-web-app",
  storageBucket: "weather-and-calendar-web-app.appspot.com",
  messagingSenderId: "497127573191",
  appId: "1:497127573191:web:0ff23ef845862f92dc20e2",
  };
  // Initialize Firebase

  const fire=firebase.initializeApp(firebaseConfig);

  export default fire;

