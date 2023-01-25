let a = prompt("Enter anything here"); //won't work in nodejs
//works fine in any browser, or replit

//Assuming that the input was a number:
a = Number.parseInt(a);
if(a > 0) alert("Input given is valid");
else alert("Invalid input given");