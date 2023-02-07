// stores/counter.js
import { defineStore } from 'pinia'
import { auth } from '@/js/firebase';
import { createUserWithEmailAndPassword,signOut,signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";





export const useStoreAuth = defineStore('storeAuth', {
  state: () => {
    return { 
        user: {}
     }
  },
  actions: {
    init()
    {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in
          this.user.id = user.uid
          this.user.email = user.email
          console.log("Logged In")
          this.router.push('/')
        } else {
          // User is signed out
          this.user = {}
          console.log("Logged Out")
          this.router.replace('/auth')
        }
      });
    },
    registerUser(credentials)
    {
      createUserWithEmailAndPassword(auth, credentials.emailId, credentials.password)
      .then((userCredential) => { 
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    },
    loginUser(credentials){
      signInWithEmailAndPassword(auth, credentials.emailId, credentials.password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          console.log("The user does not exist")
        });
    },
    userLogout(){
      signOut(auth).then(() => {

      }).catch((error) => {
        // An error happened.
      });
    }

  },

})