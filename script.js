let aboutMeClick = document.getElementById("aboutMe");
let resumeClick = document.getElementById("resume");
let projectsClick = document.getElementById("projects");
let paperAreaView = document.getElementById("paperText");

let aboutMeText = "Hi again. like i said earlier, my name is oscar åberg and iam 32 years old. Iam"
+ " currently living both in sweden and in Thailand,Bangkok. in the last 2-3 years when the cold has started to sweep over our country I have escaped sweden"
+ " Unfortunately, I left all my winter interest or hobbies for the winter in my childhood and with a well-developed hatred for the cold that I got during"
+" my draft period in the military, when i was position far north in my country, has made that I can no longer handle Sweden in the winter!."
+"<br>I was lucky enough to meet a good girl in Thailand and since day one we have been inseparable. Her name is Thanasita and works as a midlevel manager"
+" in the goverment, more precisly at the anti-corruption department. My plan is to move there and find work after i graduate my education"
+"<br> I have started to be interested in the world of programming not so long ago and these are my first staggering steps into this world actually."
+" Would actually categorize me as very bad with computers for my age haha, but I feel a calling within me and the motivation inside me has awakened."
+" I feel like it's fun to learn  and look forward try every new knowledge that i pick up "  ;

let resumeText = "This is what i have been doing so far in my life, as you can see iam changing my career path to web developer as we speak. So my past experinces have been in other areas"
+ "My past work experince has taught me much though that i will bring into this occupation and that will benifit me much <br>"
+"Warehouse manager <br> Forklift operator <br> Temp Teacher middle/high school <br> Kindergarden teacher";


aboutMeClick.addEventListener("click", function(){
    console.log("klick");
    paperAreaView.scrollIntoView({behavior: "smooth"});
    paperAreaView.innerHTML = " <p>" +aboutMeText + " </p>";
});




resumeClick.addEventListener("click", function(){
    console.log("klick");
    paperAreaView.scrollIntoView({behavior: "smooth"});

    paperAreaView.innerHTML = " <p>" +resumeText + " </p>";

});
projectsClick.addEventListener("click", function(){
    console.log("klick");
});
