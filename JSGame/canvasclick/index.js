const canvas = document.querySelector("canvas");
const text = document.querySelector("#txt");
canvas.height = 800;
canvas.width = 600;

var canvasLeft = canvas.offsetLeft + canvas.clientLeft,
canvasTop = canvas.offsetTop + canvas.clientTop,
elements = [];

const c = canvas.getContext("2d");

c.fillStyle = "black";
c.fillRect(0, 0, canvas.width, canvas.height);


//Add event listener for 'click' events.
canvas.addEventListener('click', interact, false);
canvas.addEventListener('touchend', interact, false)

//logic
function interact(event){
    text.innerHTML = event + "<br/>";
   // alert(event);
    var x = event.pageX - canvasLeft;
    var y = event.pageY - canvasTop;

    //collision detection between clicked offset and element
    elements.forEach((el) => {
        if(y > el.top 
            && y < el.top + el.height 
            && x > el.left 
            && x < el.left + el.width){
                text.innerHTML += `Clicked on ${el.name}`;
                //alert(`Clicked on ${el.name}`);
                //console.log(event);
            }
    });
}

//add element
elements.push({
    color: "#05EFFF",
    width: 150,
    height: 100,
    top: 20,
    left: 15,
    name: "Chris"
},
{
    color: "#94c02f",
    width: 100,
    height: 150,
    top: 220,
    left: 215,
    name: "Gary"
});

//render elements
elements.forEach((el) => {
    c.fillStyle = el.color;
    c.fillRect(el.left, el.top, el.width, el.height);
})



