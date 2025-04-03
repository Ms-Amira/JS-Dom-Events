//When the dom is fully loaded, this will be fired
document.addEventListener("DOMContentLoaded", function(){
//Get the element with an id of onload
let onLoadEl = document.getElementById("onload");

//Add some HTML within the element we grabbed
onLoadEl.innerHTML = "<h1> I loaded cause the DOM was fully loaded</h1>"

   })

   //When the dom is fully loaded, this will be fired
document.addEventListener("DOMContentLoaded", function(){

    //Get the element with an id of onload
    let onLoadEl = document.getElementById("onload");

    //Add some HTML within the element we grabbed
    onLoadEl.innerHTML = "<h1> I loaded cause the DOM was fully loaded</h1>"

   })

let buttonClick = document.getElementById('clickMe')
    buttonClick.addEventListener('click', function() {
    buttonClick.innerText = 'You clicked me!'
})

let newButtonClick = document.getElementById('randomColorBtn');
newButtonClick.addEventListener('click', function() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
})

function darkness() {
    let btn = document.body;
    let onClick = document.querySelector('.toggle')
    btn.classList.toggle('darkMode')
    onClick.addEventListener('click', function() {
        if (document.body.classList.contains('darkMode')) {
            onClick.innerText = 'Light Mode!'
        } else {
            onClick.innerText = 'Dark Mode'
        }
});
}