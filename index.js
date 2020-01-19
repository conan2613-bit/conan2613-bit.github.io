firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      document.getElementById("login_div").style.display="none";
      document.getElementById("user_div").style.display="initial";

    } else {
      // No user is signed in.
     

      document.getElementById("login_div").style.display="initial";
      document.getElementById("user_div").style.display="none";
    }
  });



function login(){
    var email_id=document.getElementById("email_field").value;
    var password=document.getElementById("password_field").value;
    
    
}



