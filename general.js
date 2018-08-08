
function checkresult(){
    if(middleScore==30){
	if(playerScore > computerScore){
	    var audio = new Audio('applause.mp3');
            applaud(1, audio);
	}
	
	else if(playerScore < computerScore){
	    var audio = new Audio('boo.mp3');
            applaud(0,audio);
	}
	else {
	    var audio = new Audio('applause.mp3');
	    applaud(2,audio);
	}
    }
}


function applaud(n, audio){
    
    if(n==1){
	var string = 'Congratulations! You won.<br>'+ ' Computer Score:'+computerScore +',  ' +'  Player Score:' + playerScore+'.';
	document.getElementById("victoryDiv").innerHTML = string;
	audio.play();
    }
    if(n==0){

	var string = 'Game Over! You lose.<br>'+ '  Computer Score: '+computerScore +', '+ ' Player Score:' + playerScore+'.';
	document.getElementById("victoryDiv").innerHTML = string;
	
	audio.play();
    }
    if(n==2){
	var string = 'Game is a draw.<br>'+ ' Computer Score: '+computerScore + ', '+' Player Score:' + playerScore +'.';
	document.getElementById("victoryDiv").innerHTML = string;

	audio.play();
    }

}







/* When the user clicks on the button,
   toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {

	var dropdowns = document.getElementsByClassName("dropdown-content");
	var i;
	for (i = 0; i < dropdowns.length; i++) {
	    var openDropdown = dropdowns[i];
	    if (openDropdown.classList.contains('show')) {
		openDropdown.classList.remove('show');
	    }
	}
    }}
