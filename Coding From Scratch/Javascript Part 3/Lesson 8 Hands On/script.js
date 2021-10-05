function nameInfo(){
  
    var firstName = document.getElementById("firstName").value;
    var middleName = document.getElementById("middleName").value;
    var lastName = document.getElementById("lastName").value;
    var fullName = firstName + " " + middleName + " " + lastName;
    document.getElementById("fullName").innerHTML = fullName;
    
  } //after defining the name variables to the users input value, and inserting these values into the definition
    //of a new variable, you then utilize a method that grabs a unique ID and sources the inner html. Using the 
   //newly sourced html it is then inserted back in to 'fullName' redifining it with the users input (html) that  
  //was described in the previouse definition of 'fullName'.