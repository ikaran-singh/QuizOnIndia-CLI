var readlineSync=require("readline-sync");
var userName=readlineSync.question("Your name please: ");
console.log("-----------------------")
console.log(`\nHey ${userName}. Welcome to "What you know about India?" quiz.\n`);

var highScore = ["Karan",4]


var score=0;
function quiz(ques, ans) {
  var currAns = readlineSync.question(ques," ");

  if(currAns===ans){
    score=score+1;
    console.log("Right! ✨")
  }
  else{
    console.log("Oops! You got this one wrong. 😢")
  }
  console.log("Current Score: "+score);
  console.log("-----------------------")
}


var questions = [{ques: "1. Who among the following assassinated Mahatma Gandhi?\n\tA. Karamchand\n\tB. Nathuram Godse\n\tC. Ashfaquallah Khan\n\tD. None of the Above\nYour answer(choose one option):",ans: "B"},{ques: "2. Who was the first female to become the governor of an Indian state?\n\tA. Subba Lakshmi\n\tB. Padmaja Naidu\n\tC. Sarojini Naidu\n\tD. Vijaya Lakshmi Pandit\nYour answer(choose one option):",ans: "C"},{ques: "3. Who was the first Indian woman in Space?\n\tA. Kalpana Chawla\n\tB. Sunita Williams\n\tC. Koneru Humpy\n\tD. None of the above\nYour answer(choose one option):",ans: "A"},{ques: "4. Who was the first Indian in space?\n\tA. Vikram Ambalal\n\tB. Ravish Malhotra\n\tC. Rakesh Sharma\n\tD. Nagapathi Bhat\nYour answer(choose one option):",ans: "C"},{ques: "5. Who built the Jama Masjid?\n\tA. Jahangir\n\tB. Akbar\n\tC. Imam Bukhari\n\tD. Shah Jahan\nYour answer(choose one option):",ans: "D"}]

for(var i=0;i<questions.length;i++){
  var curr=questions[i];
  quiz(curr.ques,curr.ans);
}
console.log("Final Score: "+score,"/5");

console.log("-----------------------")

if(score>highScore[1]){
  console.log("Wohooo! 🎉 You made it to the High Scorers.");
  console.log(`Previous High Scorer:-\nName:${highScore[0]}\nScore:${highScore[1]}`);
  console.log("-----------------------");
  highScore[0]=userName;
  highScore[1]=score;
}

console.log(`HighScore:-\nName: ${highScore[0]} \nScore:${highScore[1]}`);