// Get all the sound buttons
var soundButtons = document.querySelectorAll('.sound-button');

// Add a click event listener to each sound button
soundButtons.forEach(function(button) {
	button.addEventListener('click', function() {
		// Get the sound file path from the data-sound attribute
		var soundPath = this.getAttribute('data-sound');

		// Play the sound
		var sound = new Audio(soundPath);
		sound.play();
	});
});
