/1.(email)
1.
let email = prompt("please input your email address").trim()
let correctemail = email.endsWith("@gmail.com") 
if(correctemail){
    console.log("valid email")
}else{
    console.log("Invalid email ")
 }