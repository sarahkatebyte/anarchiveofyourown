// Add event listener to the create playlist button when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Select the create playlist button and input field
    var createPlaylistBtn = document.getElementById('createPlaylistBtn');
    var playlistNameInput = document.getElementById('playlistName');

    // Add event listener to the create playlist button
    createPlaylistBtn.addEventListener('click', function () {
        // Get the value entered in the input field
        var playlistName = playlistNameInput.value;

        // Call a function to create the new playlist with the entered name
        createPlaylist(playlistName);

        // Clear the input field after creating the playlist (optional)
        playlistNameInput.value = '';
    });
});

// Function to create a new playlist
function createPlaylist(name) {
    // Implement logic to create a new playlist with the provided name
    console.log('Creating playlist:', name);
}
