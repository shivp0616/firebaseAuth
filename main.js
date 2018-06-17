var mainApp = {};
(function(){
  var firebase = app_fireBase;
  var uid = null;
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      uid = user.uid;
      document.getElementById("name").innerHTML=user.displayName;
      var ref = firebase.database().ref(uid);
      ref.on('value', function(snapshot) {
         if (snapshot.exists())
         {
            document.getElementById('qrgraph').style.display = 'inline';
            document.getElementById('input_form').style.display = 'none';
          }
         else
         {
             alert ("Going for Registration");
             document.getElementById('input_form').style.display = 'inline';
             document.getElementById('qrgraph').style.display = 'none';
         }
      });

      jQuery('#qrcodeCanvas').qrcode({
    		text	: uid
    	});

      document.getElementById('contactForm').addEventListener('submit', submitForm);

      //submit
      function submitForm(e){
        e.preventDefault();

        //get values
        // var name = getInputVal('name');
        var institute = getInputVal('company');
        var email = getInputVal('email');
        var phone = getInputVal('phone');
        var gender = "";
      	var dateTime = Date();
      	if (document.getElementById('r1').checked) {
        	gender = document.getElementById('r1').value;
        }
      	else {
       		gender="female";
      	}
        saveMessage(name, institute, email, phone, gender, dateTime);

        // Show alert
        document.getElementById('alert_text').style.display = 'inline';
        // document.querySelector('.alert').style.display = 'block';

        // Hide alert after 3 seconds
        setTimeout(function(){
          document.querySelector('alert_text').style.display = 'none';
        },3000);

        // Clear form
        document.getElementById('contactForm').reset();
        document.getElementById('contactForm').style.display = 'none';
        document.getElementById('contact').style.display = 'none';
      }

      //function to get from values
      function getInputVal(id){
        return document.getElementById(id).value;
      }

      //save the msz
      console.log("Save");
      function saveMessage(name, institute, email, phone, gender, dateTime){
        console.log("Inside save");
        var newMessageRef = firebase.database().ref(uid).set({
          name:user.displayName,
          email:email,
          institute:institute,
          phone:phone,
          gender:gender,
      		dateTime:dateTime,
          attandance:'absent'
        });
      }
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
