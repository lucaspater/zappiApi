export const firebaseConfig = {
  apiKey: 'AIzaSyDlr1LchIYksHUG1by0x4MTJAmnGogdjnw',
  authDomain: 'zappiapi.firebaseapp.com',
  projectId: 'zappiapi',
  storageBucket: 'zappiapi.appspot.com',
  messagingSenderId: '92211900745',
  appId: '1:92211900745:web:d2fa9ee63c4fb9d53a6a98',
};

export const actionCodeSettingsVerification = {
  url:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/'
      : 'linkDeProducción',
};

export const actionCodeSettingsForgotPassword = {
  url:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/login'
      : 'linkDeProducción',
};
