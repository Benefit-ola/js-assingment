/1.(email)
1.
let email = prompt("please input your email address").trim()
let correctemail = email.endsWith("@gmail.com") 
if(correctemail){
    console.log("valid email")
}else{
    console.log("Invalid email ")
 }


// // 2. (password)
// let password1 = prompt("please input your password").trim()
// let lowerCase = password1.charAt(0).toLowerCase() === pass.charAt(0)
// let upperCase = password1.charAt(password1.length - 1).toUpperCase() === password1.charAt(pass.length - 1)
// let password2 = lowerCase && upperCase && password1.includes(0)
// if(passwor2d){
//     console.log("Strong password")
// }else{
//     console.log("Weak password")
// }
// 3.(url)
let url = prompt(" URL")
let url2 =url .trim().toLowerCase();
        if (url2.startsWith("https:")) {
             console.log("Valid URL");
    } else if (url2.startsWith("http:")) {
         console.log("incorrect URL");
        } else {
            console.log("Invalid URL ");
        }

//  5.(username)      
let username = prompt("Please input your username").trim(); 

if (username.length >= 5 && username.length <= 15) {
    console.log("Valid username ");
} else {
    console.log("Invalid username ");
} 

// 10.(exam grade)
let grade = prompt("please input your score")
    if(grade >= 75 && grade <= 100) {
        console.log("excellect, gradeA");
        }else if(grade >= 60 && grade < 75) {
            console.log("great, gradeB")
        }else if (grade >= 50 && grade < 60){
            console.log("good, gradeC")
             }else if (grade < 50) {
                  console.log("advice to retake the exam!");
        } else{
            console.log("advice to retake the exam!")
        }
