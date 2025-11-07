/**
 * TuneVibes - Playlist Management
 * Handles localStorage operations for user playlists
 */

/**
 * Get user's playlist from localStorage
 * @returns {Array} Array of song objects
 */
function getUserPlaylist() {
    const playlist = localStorage.getItem('userPlaylist');
    return playlist ? JSON.parse(playlist) : [];
}

/**
 * Save user's playlist to localStorage
 * @param {Array} playlist - Array of song objects
 */
function saveUserPlaylist(playlist) {
    localStorage.setItem('userPlaylist', JSON.stringify(playlist));
}

/**
 * Add song to user's playlist
 * @param {Object} song - Song object to add
 */
function addToPlaylist(song) {
    const playlist = getUserPlaylist();
    
    // Check if song already exists
    if (!playlist.find(s => s.id === song.id)) {
        playlist.push(song);
        saveUserPlaylist(playlist);
        return true;
    }
    
    return false;
}

/**
 * Remove song from user's playlist
 * @param {Number} songId - ID of song to remove
 */
function removeFromPlaylistById(songId) {
    let playlist = getUserPlaylist();
    playlist = playlist.filter(song => song.id !== songId);
    saveUserPlaylist(playlist);
}

/**
 * Check if song is in user's playlist
 * @param {Number} songId - ID of song to check
 * @returns {Boolean}
 */
function isInUserPlaylist(songId) {
    const playlist = getUserPlaylist();
    return playlist.some(song => song.id === songId);
}

/**
 * Clear entire playlist
 */
function clearPlaylist() {
    localStorage.removeItem('userPlaylist');
}

/**
 * Get playlist statistics
 * @returns {Object} Stats object with count and total duration
 */
function getPlaylistStats() {
    const playlist = getUserPlaylist();
    
    const totalSeconds = playlist.reduce((total, song) => {
        const [minutes, seconds] = song.duration.split(':').map(Number);
        return total + (minutes * 60) + seconds;
    }, 0);
    
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    
    return {
        count: playlist.length,
        totalDuration: hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`,
        moodBreakdown: getMoodBreakdown(playlist)
    };
}

/**
 * Get mood breakdown of playlist
 * @param {Array} playlist - Array of songs
 * @returns {Object} Object with mood counts
 */
function getMoodBreakdown(playlist) {
    return playlist.reduce((acc, song) => {
        acc[song.mood] = (acc[song.mood] || 0) + 1;
        return acc;
    }, {});
}

/**
 * Get songs from playlist by mood
 * @param {String} mood - Mood to filter by
 * @returns {Array} Filtered songs
 */
function getPlaylistByMood(mood) {
    const playlist = getUserPlaylist();
    return playlist.filter(song => song.mood === mood);
}

/**
 * Shuffle playlist
 * @returns {Array} Shuffled playlist
 */
function shufflePlaylist() {
    const playlist = getUserPlaylist();
    const shuffled = [...playlist].sort(() => Math.random() - 0.5);
    return shuffled;
}

/**
 * Export playlist as JSON
 * @returns {String} JSON string of playlist
 */
function exportPlaylist() {
    const playlist = getUserPlaylist();
    return JSON.stringify(playlist, null, 2);
}

/**
 * Import playlist from JSON
 * @param {String} jsonString - JSON string to import
 * @returns {Boolean} Success status
 */
function importPlaylist(jsonString) {
    try {
        const playlist = JSON.parse(jsonString);
        if (Array.isArray(playlist)) {
            saveUserPlaylist(playlist);
            return true;
        }
        return false;
    } catch (error) {
        console.error('Error importing playlist:', error);
        return false;
    }
}

/**
 * Get recently added songs
 * @param {Number} limit - Number of songs to return
 * @returns {Array} Recent songs
 */
function getRecentlyAdded(limit = 5) {
    const playlist = getUserPlaylist();
    return playlist.slice(-limit).reverse();
}

/**
 * Sort playlist by criteria
 * @param {String} criteria - 'title', 'artist', or 'mood'
 * @returns {Array} Sorted playlist
 */
function sortPlaylist(criteria = 'title') {
    const playlist = getUserPlaylist();
    
    return [...playlist].sort((a, b) => {
        if (criteria === 'title' || criteria === 'artist') {
            return a[criteria].localeCompare(b[criteria]);
        } else if (criteria === 'mood') {
            return a.mood.localeCompare(b.mood);
        }
        return 0;
    });
}