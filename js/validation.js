function validateContact(){

if (document.getElementById("name").value == "")
{
    alert("Name can not be empty");
    document.myform.name.focus();
    return false;
}
if (document.getElementById("email").value == "")
{
    alert("Email can not be empty");
    document.myform.email.focus();
    return false;
}
if (document.getElementById("phone").value.length != 10)
{
    alert("Phone Number is not valid");
    document.myform.phone.focus();
    return false;
}
if (document.getElementById("message").value == "")
{
    alert("Message can not be empty");
    document.myform.message.focus();
    return false;
}
alert("Thank you for your submission.")
}