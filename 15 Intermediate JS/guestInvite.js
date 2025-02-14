var guestList = ["Abhinav", "Ayushi", "Arpit", "Harsh", "Priyanshu", "Adityam"]

var guestName = prompt("What is your name ?")

guestList.includes(guestName)
    
if (guestName){
    console.log ("Welcome !!!"); 
}else{
        console.log ("Better luck next time !!!");
    }
