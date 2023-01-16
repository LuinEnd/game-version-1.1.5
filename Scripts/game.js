function gameVersion() {
	alert("LuinEnd Version 1.1.5")
}

function help() {
	alert("/back --> connects you to the menu page \n /settings --> connects you to the settings page \n /credits --> connects you to the credit page \n /username [value] --> sets your username to [value] \n /color [value] --> changes the username's color to [value] \n /stage [value] --> changes the stage's color to [value] \n /buttons [value] --> moves the direction buttons by [value] \n /buttons [hide/show] --> hides or shows the buttons \n /size [value] --> changes the player's size by [value] \n /filters [value] --> changes the filter to [value] \n /hitboxes [value] --> changes the hitbox color to [value] \n /rgb --> adds a color animation to the stage's background \n /normal --> removes any animation from the stage's background \n /log hide --> hides the command log \n /log show --> shows the command log \n /github --> connects you to the github \n /owner --> connects you to the owner's github profile \n /files [path] --> opens the file [path] \n /version --> shows you the current code version \n /help --> opens this help window \n /reload --> reloads the game site")
}

function commands() {
	
	if (g$cm.value == "/back") {
		location.replace("../Sites/menu.html")
	}
	
	if (g$cm.value == "/settings") {
		location.replace("../Sites/settings.html")
	}
	
	if (g$cm.value == "/credits") {
		location.replace("../Sites/credits.html")
	}
	
	if (g$cm.value.match("/username")) {
		g$us.innerHTML = g$cm.value.slice(10, 18)
	}
	
	if (g$cm.value.match("/color")) {
		g$us.style.color = g$cm.value.slice(7, 17)
	}
	
	if (g$cm.value.match("/stage")) {
		g$st.style.backgroundColor = g$cm.value.slice(7, 17)
	}
	
	if (g$cm.value.match("/buttons")) {
		g$m.style.top = g$cm.value.slice(9, 19) + "vh"
	}
	
	if (g$cm.value.match("/buttons hide")) {
		hideButtons()
	}
	
	if (g$cm.value.match("/buttons show")) {
		showButtons()
	}
	
	if (g$cm.value.match("/size")) {
		g$p.style.width = g$cm.value.slice(6, 16) + "vw"
		g$p.style.height = g$cm.value.slice(6, 16) + "vw"
		g$pi.style.width = g$cm.value.slice(6, 16) + "vw"
		g$pi.style.height = g$cm.value.slice(6, 16) + "vw"
	}
	
	if (g$cm.value.match("/filters")) {
		g$s.style.backgroundColor = g$cm.value.slice(9, 19)
	}
	
	if (g$cm.value.match("/github")) {
		location.replace("https://github.com/LuinEnd/game")
	}
	
	if (g$cm.value.match("/owner")) {
		location.replace("https://github.com/LuinEnd")
	}
	
	if (g$cm.value.match("/files")) {
		location.replace("../" + g$cm.value.slice(7, 100))
	}
	
	if (g$cm.value.match("/version")) {
		gameVersion()
	}
	
	if (g$cm.value.match("/hitboxes")) {
		g$p.style.borderColor = g$cm.value.slice(10, 20)
	}
	
	if (g$cm.value.match("/rgb")) {
		g$st.style.animation = "RGB 10s infinite ease"
	}
	
	if (g$cm.value.match("/normal")) {
		g$st.style.animation = "none"
	}
	
	if (g$cm.value.match("/log hide")) {
		g$cl.style.color = "transparent"
		g$cl.style.backgroundColor = "transparent"
	}
	
	if (g$cm.value.match("/log show")) {
		g$cl.style.color = "blue"
		g$cl.style.backgroundColor = "lightgreen"
	}
	
	if (g$cm.value.match("/help")) {
		help()
	}
	
	if (g$cm.value.match("/reload")) {
		location.replace("../Sites/game.html")
	}
	
	g$cl.innerHTML = g$cl.innerHTML + "<br>" + "--" + g$cm.value + "--"

	g$cm.value = ""
}

	
function confirmCommand (hitEnter) {
	if (hitEnter.key === "Enter") {
		commands()
	}
}

g$cm.addEventListener("keypress", confirmCommand)
g$cm.addEventListener("focus", disableKey)
g$cm.addEventListener("blur", enableKey)