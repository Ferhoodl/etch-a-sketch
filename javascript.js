in_container = document.querySelector("#input_container");
container = document.querySelector("#container");

const inputField = document.createElement("input");
const submitButton = document.createElement("button");

in_container.appendChild(inputField);
in_container.appendChild(submitButton);

container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.height = "500px";
container.style.width = "500px"; 
container.style.border = "solid";
let colorSwitch = 0;
function createGrid(sideLength){
	while(container.firstChild){
		container.removeChild(container.firstChild);
	}
	for(let i = 0; i < sideLength * sideLength; i++){
		const doc = document.createElement("div");
		cellDimension = 500 / sideLength + "px";
		doc.style.width = cellDimension;
		doc.style.height = cellDimension;
		if (colorSwitch == 0){
			doc.style.backgroundColor = "blue";
			colorSwitch = 1;
		}else{
			doc.style.backgroundColor = "red";
			colorSwitch = 0;
		}	
		doc.addEventListener("mouseover", () => {
			doc.style.backgroundColor = "pink";
			console.log("turning pink");
		});
		container.appendChild(doc);
		
	}
}

createGrid(5);

submitButton.addEventListener("click", () => {
	let sideLength = inputField.value;
	inputField.value = '';
	createGrid(sideLength);
});	
/*
container.addEventListener("hover", (event) => {
	targetElement = event.target;
	targetElement.style.backgroundColor = "pink";	
	console.log("testing");
});
*/
