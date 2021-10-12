function idCard() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var postFullName = firstName + " " + lastName;
    document.getElementById("postFullName").innerHTML = postFullName;

    var address = document.getElementById("address").value;
    var postAddress = "Address: " + address;
    document.getElementById("postAddress").innerHTML = postAddress;

    var age = parseInt(document.getElementById("age").value);var phoneNumber = parseInt(document.getElementById("phoneNumber").value);
    
    var numberArray = [];
    numberArray.push(age, phoneNumber);

    for (i=0; i < numberArray.length; i++ ) {
        if (numberArray[i] <= 100) {
            var postAge = "Age: " + age;
            parseInt(document.getElementById("postAge").innerHTML = postAge);
        }
        else if (numberArray[i] >= 100) {
            var postPhoneNumber = "Phone Number: " + phoneNumber;
            parseInt(document.getElementById("postPhoneNumber").innerHTML = postPhoneNumber);
        }
    }

}