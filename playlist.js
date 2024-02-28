// Define an array to store playlists
var playlists = [];

// Function to create a new playlist
function createPlaylist(name) {
    // Create a new playlist object
    var playlist = {
        name: name,
        urls: [] // Array to store URLs associated with this playlist
    };

    // Add the new playlist to the array
    playlists.push(playlist);

    // Return the newly created playlist object
    return playlist;
}

// Function to add a URL to a playlist
function addUrlToPlaylist(playlistIndex, url) {
    // Check if the playlist index is valid
    if (playlistIndex >= 0 && playlistIndex < playlists.length) {
        // Add the URL to the specified playlist
        playlists[playlistIndex].urls.push(url);
    } else {
        console.error('Invalid playlist index:', playlistIndex);
    }
}

// Function to rename a playlist
function renamePlaylist(playlistIndex, newName) {
    // Check if the playlist index is valid
    if (playlistIndex >= 0 && playlistIndex < playlists.length) {
        // Rename the specified playlist
        playlists[playlistIndex].name = newName;
    } else {
        console.error('Invalid playlist index:', playlistIndex);
    }
}

// Function to remove a playlist
function removePlaylist(playlistIndex) {
    // Check if the playlist index is valid
    if (playlistIndex >= 0 && playlistIndex < playlists.length) {
        // Remove the specified playlist from the array
        playlists.splice(playlistIndex, 1);
    } else {
        console.error('Invalid playlist index:', playlistIndex);
    }
}

// You can define more functions to manipulate playlists as needed

// Export the playlists array and functions for use in other files
export { playlists, createPlaylist, addUrlToPlaylist, renamePlaylist, removePlaylist };

