// Function to create a new playlist
function createPlaylist(name) {
    // Implement logic to create a new playlist with the provided name
    console.log('Creating playlist:', name);
}

function populatePlaylistList() {
    // Select the playlist list element
    var playlistList = document.getElementById('playlist-list');

    // Clear any existing content in the playlist list
    playlistList.innerHTML = '';

    // Loop through the saved playlists and create list items for each playlist
    playlists.forEach(function (playlist) {
        // Create a list item for the playlist
        var listItem = document.createElement('li');
        listItem.textContent = playlist.name;

        // Append the list item to the playlist list
        playlistList.appendChild(listItem);
    });
}

// Add event listener to the create playlist button when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Select the create playlist button
    var createPlaylistBtn = document.getElementById('createPlaylistBtn');

    // Add event listener to the create playlist button
    createPlaylistBtn.addEventListener('click', function () {
        // Get the value entered in the input field
        var playlistName = document.getElementById('playlistName').value;

        // Call the createPlaylist function with the entered name
        createPlaylist(playlistName);

        // Clear the input field after creating the playlist
        document.getElementById('playlistName').value = '';

        // Re-populate the playlist list after creating the playlist
        populatePlaylistList();
    });

    // Populate the playlist list when the popup is opened
    populatePlaylistList();
});
