let aboutMeClick = document.getElementById("aboutMe");
let resumeClick = document.getElementById("resume");
let projectsClick = document.getElementById("projects");
let paperAreaView = document.getElementById("paperText");
let topViewPlace = document.getElementById("topView")


let aboutMeText = "Hi again. like i said earlier, my name is oscar åberg and iam 32 years old. Iam"
+ " currently living both in sweden and in Thailand,Bangkok. in the last 2-3 years when the cold has started to sweep over our country I have escaped sweden"
+ " Unfortunately, I left all my winter interest or hobbies for the winter in my childhood and with a well-developed hatred for the cold that I got during"
+" my draft period in the military, when i was position far north in my country, has made that I can no longer handle Sweden in the winter!."
+"<br> <br>I was lucky enough to meet a good girl in Thailand and since day one we have been inseparable. Her name is Thanasita and works as a midlevel manager"
+" in the goverment, more precisly at the anti-corruption department. My plan is to move there and find work after i graduate my education"
+"<br> <br>I have started to be interested in the world of programming not so long ago and these are my first staggering steps into this world actually."
+" Would actually categorize me as very bad with computers for my age haha, but I feel a calling within me and the motivation inside me has awakened."
+" I feel like it's fun to learn  and look forward try every new knowledge that i pick up <br> <br>"
+"I am a calm and kind person. An introvert who has learned to be an extrovert if required. Likes to do exciting new things and experince the world."
+" But most of the time, I appreciate just being at home and taking it easy. <br>"
+"However, I am very adventurous, I like to travel and experience new things. I can not only blame the winter in Sweden as my only reason why"
+" I travel the world. I have always had a goal to see and experience as much as I can of our planet!"  ;

let resumeText = "This is what i have been doing so far in my life, as you can see iam changing my career path to web developer as we speak. So my past experinces have been in other areas"
+ "My past work experince has taught me much though that i will bring into this occupation and that will benifit me much <br>"
+"Warehouse manager <br> Forklift operator <br> Temp Teacher middle/high school <br> Kindergarden teacher";

function createTopViewButton (){
    paperAreaView.insertAdjacentHTML("afterend", '<button class="topView" onclick="topFunction()" id="backTop" title="Go to top"> Back To Top</button>');
    let myButtonBackTop = document.getElementById("backTop");

}




function topFunction (){
    topViewPlace.scrollIntoView({behavior: "smooth"});

}

aboutMeClick.addEventListener("click", function(){
    createTopViewButton();
    paperAreaView.innerHTML = " <p id='scrollFocus'>" +aboutMeText + " </p>";
    let myScrollFocus = document.getElementById("scrollFocus");
    myScrollFocus.scrollIntoView({behavior: "smooth"});

});


resumeClick.addEventListener("click", function(){
    createTopViewButton();
    paperAreaView.innerHTML = " <p id='scrollFocus'>" +resumeText + " </p>";
    let myScrollFocus = document.getElementById("scrollFocus");
    myScrollFocus.scrollIntoView({behavior: "smooth"});

});

projectsClick.addEventListener("click", function(){
    createTopViewButton();
    paperAreaView.innerHTML = '<a id="scrollFocus" href="https://github.com/Drakeclaw88" target="_blank">This is my github page</a>';
    let myScrollFocus = document.getElementById("scrollFocus");
    myScrollFocus.scrollIntoView({behavior: "smooth"});
});

myButtonBackTop.addEventListener("click", function(){
    myButtonBackTop.remove();

});

