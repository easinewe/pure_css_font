// JavaScript Document

/* VARIABLES */

var grid = document.getElementById('grid'),
	tweets = document.querySelectorAll('#tweet_list li'),
	twitter_character_limit = 280,
	refresh_rate = 10; //in seconds


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
		new_class = ( new_class && (new_class == ' ') )?'space':new_class.toLowerCase();  //create spaces or change to lowercase
		
		gl.className = new_class + ' letter';
		
	});
	
	//console.log(tweet);

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
