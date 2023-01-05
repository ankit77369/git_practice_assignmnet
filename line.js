PRIME number

number=3;
var count=0;
for(var i=1;i<=number;i++){
if(number%i=0){ //error
count++;
}
if(count==2){
console.log(number,"is a prime number");
}
else{
console.log("not a prime number);
}

2.Palindrome
var str="naman";
var bag=""
for(var i=str.length-1;i>=0;i--){
bag=bag+str[i];
}
if(bag=str){
console.log("Palindrome");
}
else{
console.log("Not Palindrome");
}