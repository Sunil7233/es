const activité = document.querySelector("#activités")
const allActivité = document.querySelector(".allActivité")
activité.addEventListener("mouseover", () => {
    allActivité.style.visibility = "visible";
    console.log("nice");
});
activité.addEventListener("mouseout", () => {
    allActivité.style.visibility = "hidden";
    console.log("nicererere");
});
allActivité.addEventListener("mouseover", ()=> {
    allActivité.style.visibility="visible";
    console.log("mince")
});

allActivité.addEventListener("mouseout", ()=> {
    allActivité.style.visibility="hidden";
});