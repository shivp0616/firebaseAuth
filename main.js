var mainApp = {};
(function(){
  var firebase = app_fireBase;
  var uid = null;
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      uid = user.uid;
      document.getElementById("name").innerHTML=user.displayName;
      jQuery('#qrcodeCanvas').qrcode({
    		text	: uid
    	});
    }
    else {
      uid = null;
      window.location.replace("login.html");
    }
  });

  function logOut(){
    firebase.auth().signOut();
  }

  mainApp.logOut = logOut;
})()
