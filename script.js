let submitButton=document.querySelector(".submitButton");
let result=document.querySelector(".result");
submitButton.onclick=function(){
  let input1=document.querySelector(".input1").value;
  let input2=document.querySelector(".input2").value;
  let image1=document.querySelector(".image1");
    let image2=document.querySelector(".image2");
    let image3=document.querySelector(".image3");
    let image4=document.querySelector(".image4");



if ((input1 >=1 && input1 <=5)&& input2==="negative"){
result.innerHTML="Because you picked " + input1 + " and " + input2 + " you are the color red you're usually in a bad mood and just want to get everything over with"
  img="https://htmlcolorcodes.com/assets/images/colors/red-color-solid-background-1920x1080.png"
  image1.style.display="block"
    image2.style.display="none"
    image3.style.display="none"
    image4.style.display="none"

}

else if ((input1 >=6 && input1 <=10)&& input2==="positive"){
result.innerHTML="Because you picked " + input1 + " and " + input2 + " you are the color pink you're usually very energetic and in a happy mood. You tend to very outgoing and focus on the positive things"
  image1.style.display="none"
    image2.style.display="block"
    image3.style.display="none"
    image4.style.display="none"

  
}

else if ((input1>=6 && input1 <=10)&& input2==="negative"){
result.innerHTML="Because you picked " + input1 + " and " + input2 + " you are the color blue you're usually pretty energetic but you tend to focus only the negative things"
  image1.style.display="none"
    image2.style.display="none"
    image3.style.display="block"
    image4.style.display="none"

  
}

else if ((input1>=1 && input1 <=5)&& input2==="positive"){
result.innerHTML="Because you picked " + input1 + " and " + input2 + " you are the color yellow you're usually tired but still look forward to the day and try to make the best out of your day"
  image1.style.display="none"
    image2.style.display="none"
    image3.style.display="block"
    image4.style.display="none"
  
}

else{
  result.innerHTML="Try again!"
  

}

};