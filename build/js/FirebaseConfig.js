import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import {getAuth, GoogleAuthProvider, signInWithPopup,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";
import{getFirestore,collection,getDocs,addDoc} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAk_mBGAyX_iEcBJiWiGg3bfSCIJ2_ydUc",
  authDomain: "fir-site-bb2a5.firebaseapp.com",
  projectId: "fir-site-bb2a5",
  storageBucket: "fir-site-bb2a5.appspot.com",
  messagingSenderId: "869027154677",
  appId: "1:869027154677:web:1b0cbb66015c543b5053bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export const db=getFirestore(app);

//Authentication
const provider= new GoogleAuthProvider();
//signin
 const signInWithGoogle=()=>{
    signInWithPopup(auth, provider).then((result)=>{
      const name=result.user.displayName;
      const email= result.user.email;
      const pic=result.user.photoURL;

      localStorage.setItem("name",name)
      localStorage.setItem("email",email)
      localStorage.setItem("pic",pic)
    }).catch((err)=>{
      console.log(err.message)
    })
  }
  //signin
const signin=document.querySelector('#signin')
signin.addEventListener('click', function(){
    signInWithGoogle();
})
const name=document.querySelector('#name')
let html=''
const p=`
    ${localStorage.getItem('name')}
`
html = html +=p;
name.innerHTML= html;






const sub=document.querySelector('#sub')
//const site=document.querySelector('#site')
const formOne =document.querySelector('#one')
formOne.addEventListener('submit',(e)=>{
  e.preventDefault()
  const username=formOne.username.value
  localStorage.setItem('username',username);
  
  /*const instagram =document.querySelector('#instagram');
  instagram.addEventListener('click',()=>{
    instagram='insta'
    localStorage.setItem('insta', instagram)
  })
  const twitter =document.querySelector('#twitter');
  twitter.addEventListener('click',()=>{
    twitter='twitte'
    localStorage.setItem('twitte', twitter)
  })
  const facebook =document.querySelector('#facebook');
  facebook.addEventListener('click',()=>{
    facebook='face'
    localStorage.setItem('face', facebook)
  })
  */

 
  /*let instagram =formOne.instagram;
  const insta=1
  instagram=insta
  localStorage.setItem('instagram',instagram);

  let twitter=formOne.twitter;
  const twitte=2
   twitter= twitte
  localStorage.setItem('twitter',twitter);

  let facebook=site.facebook;
  const face=3
  facebook=face
  localStorage.setItem('facebook',facebook);
*/
const instagram =document.querySelector('#instagram');
const twitter =document.querySelector('#twitter');
const facebook =document.querySelector('#facebook');
  sub.addEventListener('click',()=>{
    if(instagram){
    window.location.href=`https://instagram.com/${localStorage.getItem('username')}`
    formOne.reset()
}else
if(twitter){
  window.location.href=`https://twitter.com/${localStorage.getItem('username')}`
  formOne.reset()}
else if(facebook){ window.location.href=`https://facebook.com/${localStorage.getItem('username')}`
formOne.reset()
}
})
})

//firestore adding doc
/*FormOne.addEventListener('submit',(e)=>{
e.preventDefault()
 const collRefgroup= collection(db, 'form-ikaba');
 addDoc(collRefgroup,{
  userdata:[localStorage.getItem('name'),
  localStorage.getItem('email'),
  localStorage.getItem('pic')],
     name: FormOne.username.value,
     number: FormOne.number.value
   }).then(()=>{
    FormOne.reset();
   })
 })*/



//listening to user auth status change 
import {setupUI} from './init.js'
auth.onAuthStateChanged((user)=>{
   //going to controll what users see if logged in or out
   const account =document.querySelector('.account-details');
   if(user){
     let html='';
        const li =`
          <h4>
          <p>${localStorage.getItem('name')}</p>
          <p>${localStorage.getItem('email')}</p>
          <img src='${localStorage.getItem('pic')}' />
          </h4>
        `
      account.innerHTML =  html += li;

      setupUI(user)
   } else {
     const account =document.querySelector('.account-details');
      account.innerHTML = [];
     setupUI()
   }
  })
