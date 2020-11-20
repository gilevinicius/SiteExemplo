// Menu responsivo 
  let header = document.getElementById ("header");
  let setamenu = document.getElementById ("setamenu");
  let estrutura = document.getElementById ("estrutura");
  setamenu.addEventListener ("mouseover", move1);
  header.addEventListener ("mouseover", move1);
  function move1 () {
    header.style.left = "0px";
    setamenu.style.transform = "rotate(180deg)";
    header.addEventListener ("mouseout", move2);
    estrutura.style.filter = "brightness(40%)";
  };
   function move2 () {
    header.style.left = "-150px";
    setamenu.style.transform = "rotate(0deg)";
    estrutura.style.filter = "brightness(100%)";
  };

// Animacao Box Tecnologia
let tec1 = document.getElementById ("tec1")
let tec2 = document.getElementById ("tec2")
let tec3 = document.getElementById ("tec3")
let txttec11 = document.getElementById ("txttec11")
let txttec22 = document.getElementById ("txttec22")
let txttec33 = document.getElementById ("txttec33")

tec1.addEventListener ("click", openbox1)
tec2.addEventListener ("click", openbox2)
tec3.addEventListener ("click", openbox3)


function openbox1 () {
    tec1.style.height = "500px"
    tec1.style.width = "300px"
    tec2.style.height = "200px"
    tec2.style.width = "200px"
    tec3.style.height = "200px"
    tec3.style.width = "200px"
    txttec22.style.display = "none"
    txttec33.style.display = "none"
    setTimeout (openbox1txt, 0500)
}
function openbox1txt () {
    txttec11.style.display = "inline"
}
function openbox2 () {
    tec2.style.height = "500px"
    tec2.style.width = "300px"
    tec1.style.height = "200px"
    tec1.style.width = "200px"
    tec3.style.height = "200px"
    tec3.style.width = "200px"
    txttec11.style.display = "none"
    txttec33.style.display = "none"
    setTimeout (openbox2txt, 0500)
}
function openbox2txt () {
    txttec22.style.display = "inline"
}
function openbox3 () {
    tec3.style.height = "500px"
    tec3.style.width = "300px"
    tec1.style.height = "200px"
    tec1.style.width = "200px"
    tec2.style.height = "200px"
    tec2.style.width = "200px"
    txttec22.style.display = "none"
    txttec11.style.display = "none"
    setTimeout (openbox3txt, 0500)
}
function openbox3txt () {
    txttec33.style.display = "inline"
}

// Animacao scrollSuave
$('ul a').click(function(e){
	e.preventDefault();
	var id = $(this).attr('href'),
			targetOffset = $(id).offset().top,
			menuHeight = $('nav').innerHeight();

	console.log(menuHeight);

	$('html, body').animate({
		scrollTop: targetOffset - menuHeight
	}, 500);
});

