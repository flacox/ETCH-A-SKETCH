const container = document.querySelector(".container");
let cell;
let row = 16;

// creting the grid using CSS

function createGrid(row){
	container.textContent = "";
	container.style.gridTemplateColumns = 'repeat(${row}, 1fr)';
	let square = row * row;
	for (var i = 0; i < square; i++){
		cell = document.createElement("div");
		cell.classList.add("content");
		container.appendChild(cell);
	}
}

createGrid(row);

// CHANGE GRID'S SIZE

const changeSizeBtn = document.querySelector("#change-size");

changeSizeBtn.addEventListener("click", function(){
	pencilBtn.classList.remove("active");
	rgbBtn.classList.remove("active");
	changeSize();
});

function changeSize(){
	row = prompt("Enter the amount of rows you want between 1 and 64.");
	createGrid(row);
}
//////////////////////////////////////////////////

// PENCIL DRAWING IF IT I ACTIVE

const pencilBtn = document.querySelector("#pencil");

pencilBtn.addEventListener("click", function(){
	if(rgbBtn.classList.contains("active")){
		rgbBtn.classList.remove("active");
	}
	pencilBtn.classList.add("active");
	cellDraw();
});

const rgbBtn = document.querySelector("#rgb");

rgbBtn.addEventListener("click", function() {
	if(pencilBtn.classList.contains("active")){
		pencilBtn.classList.remove("active");
	}
	rgbBtn.classList.add("active");
	cellDraw();
});


function cellDraw(){
	if(pencilBtn.classList.contains("active")){
		cell = document.querySelectorAll(".content");
		for(let i = 0; i < cell.length; i++){
			console.log(cell[i]);
			cell[i].addEventListener("mouseenter", (e) => {
				e.target.style.backgroundColor = "black";
			});
		}
	} else if (rgbBtn.classList.contains("active")){
		cell = document.querySelectorAll(".content");
		for (let i = 0; i < cell.length; i++){
			console.log(cell[i]);
			cell[i].addEventListener("mouseenter", (e) => {
				e.target.style.backgroundColor =
				"#" + Math.floor(Math.random() * 16777215).toString(16);
			});
		}
	}
}

// REET BUTTON

const resetBtn = document.querySelector("#reset");

resetBtn.addEventListener("click", function(){
	window.location.reload();
});