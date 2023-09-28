// firebase-config.js

var firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// schemas/user.js

export default {
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
      {
        name: 'email',
        title: 'Email',
        type: 'string',
      },
      {
        name: 'password',
        title: 'Password',
        type: 'string',
      },
    ],
  };
  