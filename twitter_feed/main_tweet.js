// JavaScript Document

/* VARIABLES */

var grid = document.getElementById('grid'),
	tweets = document.querySelectorAll('#tweet_list li'),
	twitter_character_limit = 280,
	refresh_rate = 40; //in seconds


/* FUNCTIONS */


//get random tweet and apply to grid
function showTweet(){
    	
	var new_message = '',
		grid_letters = document.querySelectorAll('#grid div'),
		random_integer = Math.floor(Math.random() * Math.floor(tweets.length)),
		tweet = tweets[random_integer].innerHTML;
	
	//replace the style of each grid div with character
	grid_letters.forEach(function(gl,index) {
  		
		new_class = tweet[index];
		new_class = (new_class)?new_class:'star'; //fills any remaining space with stars
		new_class = translateCharacters(new_class);
		new_class = new_class.toLowerCase();  //change to lowercase
		
		gl.className = new_class + ' letter';
		
	});
	
	//console.log(tweet);

}

//translate special characters to named styles
function translateCharacters(character){
	
	switch (character) {
		case '#':
			character = "star";
			break;
		case ':':
			character = "colon";
			break;
		case '/':
			character = "slash";
			break;
		case ' ':
			character = "space";
			break;
		case '“':
			character = "quote";
			break;
		case '”':
			character = "quote";
			break;
		case '"':
			character = "quote";
			break;
		case '\’':
			character = "single_quote";
			break;
		case '\'':
			character = "single_quote";
			break;
		case ',':
			character = "comma";
			break;
		case '…':
			character = "dash";
			break;
		case '–':
			character = "dash";
			break;
		case '-':
			character = "hyphen";
			break;
		case '.':
			character = "period";
			break;
		case '@':
			character = "at";
			break;
		case '!':
			character = "exclamation";
			break;
		case '?':
			character = "question";
			break;
		case '1':
			character = "one";
			break;
		case '2':
			character = "two";
			break;
		case '3':
			character = "three";
			break;
		case '4':
			character = "four";
			break;
		case '5':
			character = "five";
			break;
		case '6':
			character = "six";
			break;
		case '7':
			character = "seven";
			break;
		case '8':
			character = "eight";
			break;
		case '9':
			character = "nine";
			break;
		default:
			character = character;
	}
	
	return character;
}


//build grid of stars
function buildGrid(){
	var i=0,
		grid_items = '';
	
	while(i < twitter_character_limit){
		grid_items += '<div class="star letter"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>';	
		i++;
	}
	grid.innerHTML = grid_items;
}


/* FIRE */

buildGrid();
showTweet();

//cycle randomly through tweets
window.setInterval(function(){
  showTweet();
}, (refresh_rate*1000) );
