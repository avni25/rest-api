console.log("qwe");
const mytext = document.getElementById("mytext");
const button = document.getElementById("mybtn");
        
button.addEventListener("click", ()=>{
    console.log(mytext.value);
    window.location = `http://localhost:3000/aircrafts?type=${mytext.value}`
});