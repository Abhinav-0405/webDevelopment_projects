prompt("Your Name ?")
prompt("Your Crush Name ?")

var n = Math.random();
n = Math.floor(n * 99) + 1;

if (n > 70){
    console.log("Your love score is " + n + "%" + " You love each other like kanye loves kanye")
}

if (n > 30 && n <= 70){
    console.log("Your love score is " + n + "%" )
} 

if (n <= 30){
    console.log ("Your love score is " + n + "%" + " you go together like oil and water")
}
