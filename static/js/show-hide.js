
function showHide(shID) {
	if (document.getElementById(shID)) {
		if (document.getElementById(shID+'-show').style.display != 'none') {
			document.getElementById(shID+'-show').style.display = 'none';
			document.getElementById(shID).style.display = 'block';
			document.getElementById(shID+'-hide').style.display = 'inline';
			resetheight();
		}
		else {
			document.getElementById(shID+'-show').style.display = 'inline';
			document.getElementById(shID).style.display = 'none';
			document.getElementById(shID+'-hide').style.display = 'none';
			resetheight();
		}
	}
}
	
