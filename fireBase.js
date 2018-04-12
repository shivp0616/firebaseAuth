var app_fireBase = {};
(function(){
    // Initialize Firebase
    var config = {
      apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxx",
      authDomain: "xxxxxxxxxxxxxxxxxxxxxxxxxx",
      databaseURL: "xxxxxxxxxxxxxxxxxxxxxxxxxx",
      projectId: "xxxxxxxxxxxxxxxxxxxxxxxxxx",
      storageBucket: "xxxxxxxxxxxxxxxxxxxxxxxxxx",
      messagingSenderId: "xxxxxxxxxxxxxxxxxxxxxxxxxx"
    };
    firebase.initializeApp(config);

    app_fireBase = firebase;
})()
