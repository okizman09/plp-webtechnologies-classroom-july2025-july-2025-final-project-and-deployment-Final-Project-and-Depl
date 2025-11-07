/**
 * TuneVibes - Music Player
 * Handles music playback, controls, and visualizer
 */

// Player state
let currentSongIndex = 0;
let playlist = [];
let isPlaying = false;
let currentTime = 0;
let duration = 0;

// Initialize player when DOM loads
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('nowplaying.html')) {
        initializePlayer();
    }
});

/**
 * Initialize the music player
 */
function initializePlayer() {
    loadPlayerSong();
    setupPlayerControls();
    setupProgressBar();
    setupVolumeControl();
    startVisualizer();
}

/**
 * Load the song to play
 */
function loadPlayerSong() {
    const songId = localStorage.getItem('currentSongId');
    const userPlaylist = getUserPlaylist();
    
    // Use user's playlist if available, otherwise use all songs
    playlist = userPlaylist.length > 0 ? userPlaylist : allSongs;
    
    // Find song index
    if (songId) {
        const index = playlist.findIndex(song => song.id == songId);
        currentSongIndex = index !== -1 ? index : 0;
    }
    
    // Load and display current song
    displayCurrentSong();
}

/**
 * Display current song information
 */
function displayCurrentSong() {
    const song = playlist[currentSongIndex];
    if (!song) return;
    
    const albumArt = document.getElementById('albumArt');
    const songTitle = document.getElementById('currentSongTitle');
    const artist = document.getElementById('currentArtist');
    const durationEl = document.getElementById('duration');
    
    if (albumArt) albumArt.querySelector('.album-icon').textContent = song.emoji;
    if (songTitle) songTitle.textContent = song.title;
    if (artist) artist.textContent = song.artist;
    if (durationEl) durationEl.textContent = song.duration;
    
    // Reset progress
    currentTime = 0;
    duration = parseDuration(song.duration);
    updateProgress();
}

/**
 * Setup player control buttons
 */
function setupPlayerControls() {
    const playBtn = document.getElementById('playBtn');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (playBtn) {
        playBtn.addEventListener('click', togglePlay);
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', playPrevious);
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', playNext);
    }
}

/**
 * Toggle play/pause
 */
function togglePlay() {
    const playBtn = document.getElementById('playBtn');
    
    isPlaying = !isPlaying;
    
    if (isPlaying) {
        playBtn.textContent = '⏸️';
        startPlayback();
    } else {
        playBtn.textContent = '▶️';
        stopPlayback();
    }
}

/**
 * Start playback simulation
 */
let playbackInterval;

function startPlayback() {
    playbackInterval = setInterval(() => {
        currentTime++;
        
        if (currentTime >= duration) {
            playNext();
        } else {
            updateProgress();
        }
    }, 1000);
}

/**
 * Stop playback
 */
function stopPlayback() {
    if (playbackInterval) {
        clearInterval(playbackInterval);
    }
}

/**
 * Play previous song
 */
function playPrevious() {
    currentSongIndex--;
    
    if (currentSongIndex < 0) {
        currentSongIndex = playlist.length - 1;
    }
    
    displayCurrentSong();
    
    if (isPlaying) {
        stopPlayback();
        startPlayback();
    }
}

/**
 * Play next song
 */
function playNext() {
    currentSongIndex++;
    
    if (currentSongIndex >= playlist.length) {
        currentSongIndex = 0;
    }
    
    displayCurrentSong();
    
    if (isPlaying) {
        stopPlayback();
        startPlayback();
    }
}

/**
 * Setup progress bar interaction
 */
function setupProgressBar() {
    const progressBar = document.querySelector('.progress-bar');
    
    if (progressBar) {
        progressBar.addEventListener('click', (e) => {
            const rect = progressBar.getBoundingClientRect();
            const percent = (e.clientX - rect.left) / rect.width;
            currentTime = Math.floor(duration * percent);
            updateProgress();
        });
    }
}

/**
 * Update progress bar and time display
 */
function updateProgress() {
    const progressFill = document.getElementById('progressFill');
    const currentTimeEl = document.getElementById('currentTime');
    
    const percent = (currentTime / duration) * 100;
    
    if (progressFill) {
        progressFill.style.width = `${percent}%`;
    }
    
    if (currentTimeEl) {
        currentTimeEl.textContent = formatTime(currentTime);
    }
}

/**
 * Setup volume control
 */
function setupVolumeControl() {
    const volumeSlider = document.getElementById('volumeSlider');
    
    if (volumeSlider) {
        volumeSlider.addEventListener('input', (e) => {
            const volume = e.target.value;
            // In a real app, this would control actual audio volume
            console.log('Volume:', volume);
        });
    }
}

/**
 * Start visualizer animation
 */
function startVisualizer() {
    const visualizer = document.getElementById('visualizer');
    
    if (!visualizer) return;
    
    // Visualizer bars animate when music is playing
    setInterval(() => {
        if (isPlaying) {
            const bars = visualizer.querySelectorAll('.bar');
            bars.forEach(bar => {
                const height = Math.random() * 80 + 20;
                bar.style.height = `${height}px`;
            });
        }
    }, 100);
}

/**
 * Parse duration string to seconds
 * @param {String} duration - Duration in format "M:SS"
 * @returns {Number} Duration in seconds
 */
function parseDuration(duration) {
    const [minutes, seconds] = duration.split(':').map(Number);
    return (minutes * 60) + seconds;
}

/**
 * Format seconds to M:SS
 * @param {Number} seconds - Time in seconds
 * @returns {String} Formatted time
 */
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

/**
 * Keyboard shortcuts for player
 */
document.addEventListener('keydown', (e) => {
    if (!window.location.pathname.includes('nowplaying.html')) return;
    
    switch(e.code) {
        case 'Space':
            e.preventDefault();
            togglePlay();
            break;
        case 'ArrowLeft':
            e.preventDefault();
            playPrevious();
            break;
        case 'ArrowRight':
            e.preventDefault();
            playNext();
            break;
    }
});