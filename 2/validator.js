function validateForm() {

    var fname = document.forms["myForm"]["FirstName"].value;
    if (fname.length < 3 ) {
        alert("Firstname must be filled out");
        return false;
    }


    var lname = document.forms["myForm"]["LastName"].value;
    if (lname.length != 13 || isNaN(lname)){
        alert("ID must be 13 digits");
        return false;
    }

    var add = document.forms["myForm"]["Address"].value;
    add = add.split("\n");
    if (add.length >= 2){
        if (add[0].length < 5 || add[1].length < 5)
        {
            alert("Address must 2 and 5");


            return false;
        }
    }
    else{
        alert("Address must 2 and 5");
        return false;
    }

    var country = document.forms["myForm"]["Country"].value;
    if (country == "000" ) {
        alert("Country must be selected");
        return false;
    }
}