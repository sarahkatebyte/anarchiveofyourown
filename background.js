chrome.runtime.onInstalled.addListener(function () {
    console.log('Extension loaded and background script registered.');
});

// Add event listener to the create playlist button
document.getElementById('createPlaylistBtn').addEventListener('click', function () {
    // Get the value entered in the input field
    var playlistName = document.getElementById('playlistName').value;

    // Call a function to create the new playlist with the entered name
    createPlaylist(playlistName);

    // Clear the input field after creating the playlist (optional)
    document.getElementById('playlistName').value = '';
});

// Function to create a new playlist
function createPlaylist(name) {
    // Implement logic to create a new playlist with the provided name
    console.log('Creating playlist:', name);
}
