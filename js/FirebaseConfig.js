import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import{getFirestore,collection,addDoc} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBX6PYMq3fBiuQ6Zz3wpsmuIypAyZj2krY",
  authDomain: "scrape-metals.firebaseapp.com",
  projectId: "scrape-metals",
  storageBucket: "scrape-metals.appspot.com",
  messagingSenderId: "728042346596",
  appId: "1:728042346596:web:1a68572877e24ef188a771",
  measurementId: "G-5N74VJDP9X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);

//input logics
const formOne =document.querySelector('#one')
formOne.addEventListener('submit',(e)=>{
  e.preventDefault()
  const media=formOne.media.value
  const username=formOne.username.value
  localStorage.setItem('username',username);
  localStorage.setItem('media',media);
  
//firestore adding doc (collecting user data)
  const collRefUser= collection(db, 'UserDataFromScrape');
    addDoc(collRefUser,{
        userdata:[
            localStorage.getItem('username'),
            localStorage.getItem('media')
             ]
     }).then(()=>{
         //redirect
        window.location.href=`https://${localStorage.getItem('media')}.com/${localStorage.getItem('username')}`
        formOne.reset();
         })
 

    /*if(localStorage.getItem('media') === 'instagram'||localStorage.getItem('media') ==='Instagram'||localStorage.getItem('media') ==='INSTAGRAM'){
    window.location.href=`https://instagram.com/${localStorage.getItem('username')}`
    formOne.reset()
}else
if(localStorage.getItem('media') === 'twitter'||localStorage.getItem('media') ==='Twitter'||localStorage.getItem('media') ==='TWITTER'){
  window.location.href=`https://twitter.com/${localStorage.getItem('username')}`
  formOne.reset()}
else if(localStorage.getItem('media') === 'facebook'||localStorage.getItem('media') ==='Facebook'||localStorage.getItem('media') ==='FACEBOOK'){ window.location.href=`https://facebook.com/${localStorage.getItem('username')}`
formOne.reset()
}*/
})




