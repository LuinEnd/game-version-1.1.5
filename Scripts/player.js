function moveUp() {
	
	g$u.removeEventListener("click", moveUp)
	g$d.addEventListener("click", moveDown)
	g$l.addEventListener("click", moveLeft)
	g$r.addEventListener("click", moveRight)
	
	document.removeEventListener("keypress", moveUpByKey)
	document.addEventListener("keypress", moveDownByKey)
	document.addEventListener("keypress", moveLeftByKey)
	document.addEventListener("keypress", moveRightByKey)
	
	clearInterval(p$d)
	clearInterval(p$l)
	clearInterval(p$r)
	
	p$u = setInterval(framesUp, 30)
	
	function framesUp() {
	if (p$ud == p$mu) {
      clearInterval(p$u)
    } 
	else {
      p$ud--
      g$p.style.top = p$ud + 'vh'
  	}
}
}

function moveDown() {
	
	g$u.addEventListener("click", moveUp)
	g$d.removeEventListener("click", moveDown)
	g$l.addEventListener("click", moveLeft)
	g$r.addEventListener("click", moveRight)
	
	document.addEventListener("keypress", moveUpByKey)
	document.removeEventListener("keypress", moveDownByKey)
	document.addEventListener("keypress", moveLeftByKey)
	document.addEventListener("keypress", moveRightByKey)
	
	clearInterval(p$u)
	clearInterval(p$l)
	clearInterval(p$r)
	
	p$d = setInterval(framesDown, 30)
	
	function framesDown() {
	if (p$ud == p$md) {
      clearInterval(p$d)
    } 
	else {
      p$ud++
      g$p.style.top = p$ud + 'vh'
  	}
}
}

function moveLeft() {
	
	
	
	g$u.addEventListener("click", moveUp)
	g$d.addEventListener("click", moveDown)
	g$l.removeEventListener("click", moveLeft)
	g$r.addEventListener("click", moveRight)
	
	document.addEventListener("keypress", moveUpByKey)
	document.addEventListener("keypress", moveDownByKey)
	document.removeEventListener("keypress", moveLeftByKey)
	document.addEventListener("keypress", moveRightByKey)
	
	clearInterval(p$u)
	clearInterval(p$d)
	clearInterval(p$r)
	
	p$l = setInterval(framesLeft, 30)
	
	function framesLeft() {
	if (p$lr == p$ml) {
      clearInterval(p$l)
    } 
	else {
      p$lr--
      g$p.style.left = p$lr + 'vw'
  	}
}
}

function moveRight() {
	
	g$u.addEventListener("click", moveUp)
	g$d.addEventListener("click", moveDown)
	g$l.addEventListener("click", moveLeft)
	g$r.removeEventListener("click", moveRight)
	
	document.addEventListener("keypress", moveUpByKey)
	document.addEventListener("keypress", moveDownByKey)
	document.addEventListener("keypress", moveLeftByKey)
	document.removeEventListener("keypress", moveRightByKey)
	
	clearInterval(p$u)
	clearInterval(p$d)
	clearInterval(p$l)
	
	p$r = setInterval(framesRight, 30)
	
	function framesRight() {
	if (p$lr == p$mr) {
      clearInterval(p$r)
    }
	else {
      p$lr++
      g$p.style.left = p$lr +'vw'
  	}
}
}

function moveUpByKey(event) {
	hideButtons()
	if (event.key == p$uk) {
		moveUp()
		document.removeEventListener("keypress", moveUpByKey)
		document.addEventListener("keypress", moveDownByKey)
		document.addEventListener("keypress", moveLeftByKey)
		document.addEventListener("keypress", moveRightByKey)
	}
}

function moveDownByKey(event) {
	hideButtons()
	if (event.key == p$dk) {
		moveDown()
		document.addEventListener("keypress", moveUpByKey)
		document.removeEventListener("keypress", moveDownByKey)
		document.addEventListener("keypress", moveLeftByKey)
		document.addEventListener("keypress", moveRightByKey)
	}
}

function moveLeftByKey(event) {
	hideButtons()
	if (event.key == p$lk) {
		moveLeft()
		document.addEventListener("keypress", moveUpByKey)
		document.addEventListener("keypress", moveDownByKey)
		document.removeEventListener("keypress", moveLeftByKey)
		document.addEventListener("keypress", moveRightByKey)
	}
}

function moveRightByKey(event) {
	hideButtons()
	if (event.key == p$rk) {
		moveRight()
		document.addEventListener("keypress", moveUpByKey)
		document.addEventListener("keypress", moveDownByKey)
		document.addEventListener("keypress", moveLeftByKey)
		document.removeEventListener("keypress", moveRightByKey)
	}
}

function disableKey() {
	document.removeEventListener("keypress", moveUpByKey)
	document.removeEventListener("keypress", moveDownByKey)
	document.removeEventListener("keypress", moveLeftByKey)
	document.removeEventListener("keypress", moveRightByKey)
}

function enableKey() {
	document.addEventListener("keypress", moveUpByKey)
	document.addEventListener("keypress", moveDownByKey)
	document.addEventListener("keypress", moveLeftByKey)
	document.addEventListener("keypress", moveRightByKey)
}

function hideButtons() {
	g$m.style.zIndex = "-1"
}

function showButtons() {
	g$m.style.zIndex = "10"
}

g$u.addEventListener("click", moveUp)
g$d.addEventListener("click", moveDown)
g$l.addEventListener("click", moveLeft)
g$r.addEventListener("click", moveRight)

enableKey()