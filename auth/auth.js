module.exports = () =>{


const Firebase = require('../Firebase')
const firebaseui = require('firebaseui')
let window;


// Initializes the Firebase UI Widget
const ui = new firebaseui.auth.AuthUI(Firebase.auth())


//Sets the config s

const uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        // User successfully signed in.
   
        return true;
      },
      uiShown: function() {
        // The widget is rendered.
        // Hide the loader.
        document.getElementById('loader').style.display = 'none';
      }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: 'http://localhost:4000/auth',
    signInOptions: [
      // List of 3rd party auth that can be used.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    //   firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    //   firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    //   firebase.auth.GithubAuthProvider.PROVIDER_ID,
    //   firebase.auth.EmailAuthProvider.PROVIDER_ID,
    //   firebase.auth.PhoneAuthProvider.PROVIDER_ID
    ],
    // Terms of service url.
    tosUrl: '<your-tos-url>',
    // Privacy policy url.
    privacyPolicyUrl: '<your-privacy-policy-url>'
  };

  // Checks to see if user is logged in
if (ui.isPendingRedirect()){
    // If not redirects user to login 
ui.start('#firebaseui-auth-container',uiConfig,{  
    signInOptions:[
    {

    provider:firebase.auth.EmailAuthProvider.PROVIDER_ID,
    signInMethod:firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD,
    signInMethod:firebase.auth.GoogleAuthProvider.PROVIDER_ID
    
    }
],
})}

}