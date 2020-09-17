let aboutMeClick = document.getElementById("aboutMe");
let resumeClick = document.getElementById("resume");
let projectsClick = document.getElementById("projects");
let paperAreaView = document.getElementById("paperText");


aboutMeClick.addEventListener("click", function(){
    console.log("klick")

    paperAreaView.innerHTML = " <p>Hi again. like i said earlier, my name is oscar åberg and iam 32 years old. Iam currently living both in sweden and in Thailand,Bangkok</p>";



    paperAreaView.insertAdjacentHTML("afterbegin", "<p>Hi again. like i said earlier, my name is oscar åberg and iam 32 years old. Iam"
    + " currently living both in sweden and in Thailand,Bangkok</p>");
   
});

resumeClick.addEventListener("click", function(){
    console.log("klick");

});
projectsClick.addEventListener("click", function(){
    console.log("klick");
});
