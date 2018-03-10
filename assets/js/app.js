// Initialize Firebase
var config = {
    apiKey: "AIzaSyDeGkmM8yLp1mGe3Dh7sTVTxZA6XVj3srU",
    authDomain: "pikaflik-9cfdc.firebaseapp.com",
    databaseURL: "https://pikaflik-9cfdc.firebaseio.com",
    projectId: "pikaflik-9cfdc",
    storageBucket: "",
    messagingSenderId: "25073261476"
  };
  
  firebase.initializeApp(config);
 
  // Created a variable to reference to the firebase 
  var db = firebase.database();
  const auth = firebase.auth();
  auth.onAuthStateChanged(firebaseUser => { });


  // Get Elements
  var txtEmail;
  var txtPassword;
  


  // Add login event
  $("#btnLogin").on("click", function(){
    // Get email and pass
    txtEmail = $("#txtEmail").val();
    txtPassword = $("#txtPassword").val();
    // Sign in 
    const promise = auth.signInWithEmailAndPassword(txtEmail, txtPassword);
    promise.catch(e => console.log(e.message));
  })

  // Add Sign up event
  $("#btnSignUp").on("click", function(){
    // Get email and pass
    txtEmail = $("#txtEmail").val().trim();
    txtPassword = $("#txtPassword").val().trim();
    // Sign up 
    const promise = auth.signInWithEmailAndPassword(txtEmail, txtPassword);
    promise.catch(e => console.log(e.message));
  })


//   $(".submit").on("click", function (){
    
//     // auth.signInWithEmailAndPassword('pehi@gmail.com', "password");
//     auth.createUserWithEmailAndPassword('pehisa@gmail.com', 'pas12sword');



//   })




























//   db.ref().push({
//     trainName: "choo choo",
//     destination: "destination",
//     dateAdded: firebase.database.ServerValue.TIMESTAMP
//   })

var clickedNumber = 1;
var rowNumber = 0;
// On click function for add button, creates new space for group button
$("#plus-box").on("click", function () {
    clickedNumber++;
    // If you've clicked the button 3 times, then we will create a new row and add everything to that row and present it. The second time is if it's been clicked 4 times
    // if (clickedNumber % 3 === 0) {
    //     var newRow = $("<div class='row'></div>");
    //     var newDiv = $("<div class='col-md-3'></div>");
    //     var newButton = $("<button>");
    //     var p = $("<p>");
    //     p.addClass("group-box");
    //     newButton.text("Select");
    //     p.append("Group 42");
    //     p.append(newButton);
    //     newDiv.append(p);
    //     newRow.append(newDiv);
    //     $("#main-body").append(newDiv);

    // } else {

        var newDiv = $("<div class='col-md-3'></div>");
        var newButton = $("<button>");
        var p = $("<p>");
        p.addClass("group-box");
        newDiv.addClass("top-height");
        newButton.text("Select");
        p.append("Group 42");
        p.append(newButton);
        // newDiv.attr("margin-top", "25px");
        newDiv.append(p);
        $("#first-row").append(newDiv);
    // }
});

// on click for movie poster

$(".movieInfo").on('click', function(){
    alert( "Handler for .click() called." );
});