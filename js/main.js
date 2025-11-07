/**
 * TuneVibes - Main JavaScript
 * Handles navigation, mood selection, and general UI interactions
 */

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

/**
 * Initialize the application
 */
function initializeApp() {
    setupNavigation();
    setupMoodCards();
    setupScrollAnimations();
}

/**
 * Setup mobile navigation
 */
function setupNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }
}

/**
 * Setup mood card interactions on home page
 */
function setupMoodCards() {
    const moodCards = document.querySelectorAll('.mood-card');
    const playlistPreview = document.getElementById('playlistPreview');
    const moodTitle = document.getElementById('moodTitle');
    const songList = document.getElementById('songList');

    if (!moodCards.length) return;

    moodCards.forEach(card => {
        card.addEventListener('click', () => {
            const mood = card.dataset.mood;
            
            // Remove active class from all cards
            moodCards.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked card
            card.classList.add('active');

            // Get mood data
            const data = moodData[mood];
            
            // Update title
            moodTitle.textContent = data.title;
            
            // Clear and populate song list
            songList.innerHTML = '';
            data.songs.forEach(song => {
                const songItem = createSongElement(song);
                songList.appendChild(songItem);
            });

            // Show playlist preview
            playlistPreview.classList.add('show');
            
            // Smooth scroll to preview
            playlistPreview.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'nearest' 
            });

            // Update background gradient based on mood
            updateBackgroundMood(data.color);
        });
    });
}

/**
 * Create a song list item element
 */
function createSongElement(song) {
    const songItem = document.createElement('div');
    songItem.className = 'song-item';
    songItem.innerHTML = `
        <div class="song-cover">${song.emoji}</div>
        <div class="song-info">
            <div class="song-title">${song.title}</div>
            <div class="song-artist">${song.artist}</div>
        </div>
        <button class="play-btn" onclick="playSong(${song.id})">▶</button>
    `;
    return songItem;
}

/**
 * Update background gradient based on mood color
 */
function updateBackgroundMood(color) {
    const animatedBg = document.querySelector('.animated-bg');
    if (animatedBg) {
        animatedBg.style.opacity = '0.25';
    }
}

/**
 * Play a song (navigates to now playing page)
 */
function playSong(songId) {
    // Store current song in localStorage
    localStorage.setItem('currentSongId', songId);
    
    // Navigate to now playing page
    window.location.href = 'nowplaying.html';
}

/**
 * Setup scroll animations
 */
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements with animation class
    const animatedElements = document.querySelectorAll('.mood-card, .music-card, .about-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

/**
 * Load discover page with all songs
 */
function loadDiscoverPage() {
    const musicGrid = document.getElementById('musicGrid');
    const searchInput = document.getElementById('searchInput');
    const filterMood = document.getElementById('filterMood');

    if (!musicGrid) return;

    // Initial load - show all songs
    displaySongs(allSongs);

    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value;
            const mood = filterMood.value;
            filterAndDisplaySongs(query, mood);
        });
    }

    // Filter by mood
    if (filterMood) {
        filterMood.addEventListener('change', (e) => {
            const mood = e.target.value;
            const query = searchInput.value;
            filterAndDisplaySongs(query, mood);
        });
    }

    /**
     * Filter and display songs based on search and mood
     */
    function filterAndDisplaySongs(query, mood) {
        let filteredSongs = allSongs;

        // Filter by mood
        if (mood !== 'all') {
            filteredSongs = filteredSongs.filter(song => song.mood === mood);
        }

        // Filter by search query
        if (query.trim() !== '') {
            filteredSongs = searchSongs(query);
            if (mood !== 'all') {
                filteredSongs = filteredSongs.filter(song => song.mood === mood);
            }
        }

        displaySongs(filteredSongs);
    }

    /**
     * Display songs in the music grid
     */
    function displaySongs(songs) {
        musicGrid.innerHTML = '';

        if (songs.length === 0) {
            musicGrid.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
                    <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem;">No songs found</h3>
                    <p style="color: var(--text-muted);">Try a different search or filter</p>
                </div>
            `;
            return;
        }

        songs.forEach(song => {
            const musicCard = createMusicCard(song);
            musicGrid.appendChild(musicCard);
        });
    }

    /**
     * Create a music card element
     */
    function createMusicCard(song) {
        const card = document.createElement('div');
        card.className = 'music-card';
        
        const isInPlaylist = isInUserPlaylist(song.id);
        
        card.innerHTML = `
            <div class="music-card-cover">${song.emoji}</div>
            <div class="music-card-info">
                <h3>${song.title}</h3>
                <p>${song.artist}</p>
                <p style="font-size: 0.85rem; color: var(--text-muted);">
                    <span style="text-transform: capitalize;">${song.mood}</span> • ${song.duration}
                </p>
            </div>
            <div class="music-card-actions">
                <button class="btn-play" onclick="playSong(${song.id})">▶ Play</button>
                <button class="btn-add ${isInPlaylist ? 'added' : ''}" onclick="togglePlaylist(${song.id}, this)">
                    ${isInPlaylist ? '✓ Added' : '+ Add'}
                </button>
            </div>
        `;
        
        return card;
    }
}

/**
 * Toggle song in user's playlist
 */
function togglePlaylist(songId, button) {
    const song = getSongById(songId);
    if (!song) return;

    let playlist = getUserPlaylist();

    if (isInUserPlaylist(songId)) {
        // Remove from playlist
        playlist = playlist.filter(s => s.id !== songId);
        button.classList.remove('added');
        button.textContent = '+ Add';
        showNotification('Removed from playlist', 'info');
    } else {
        // Add to playlist
        playlist.push(song);
        button.classList.add('added');
        button.textContent = '✓ Added';
        showNotification('Added to playlist', 'success');
    }

    saveUserPlaylist(playlist);
}

/**
 * Show notification message
 */
function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#22c55e' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
    `;

    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

/**
 * Load user's playlist page
 */
function loadUserPlaylist() {
    const playlistGrid = document.getElementById('playlistGrid');
    const emptyState = document.getElementById('emptyState');
    const clearBtn = document.getElementById('clearPlaylist');

    if (!playlistGrid) return;

    const playlist = getUserPlaylist();

    if (playlist.length === 0) {
        emptyState.style.display = 'block';
        playlistGrid.style.display = 'none';
        if (clearBtn) clearBtn.style.display = 'none';
    } else {
        emptyState.style.display = 'none';
        playlistGrid.style.display = 'grid';
        if (clearBtn) clearBtn.style.display = 'block';

        // Display playlist items
        playlistGrid.innerHTML = '';
        playlist.forEach(song => {
            const item = createPlaylistItem(song);
            playlistGrid.appendChild(item);
        });
    }

    // Clear all button
    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            if (confirm('Are you sure you want to clear your entire playlist?')) {
                localStorage.removeItem('userPlaylist');
                loadUserPlaylist();
                showNotification('Playlist cleared', 'info');
            }
        });
    }
}

/**
 * Create a playlist item element
 */
function createPlaylistItem(song) {
    const item = document.createElement('div');
    item.className = 'playlist-item';
    item.innerHTML = `
        <div class="playlist-item-cover">${song.emoji}</div>
        <div class="playlist-item-info">
            <h3>${song.title}</h3>
            <p>${song.artist} • ${song.duration}</p>
        </div>
        <div class="playlist-item-actions">
            <button class="btn-play" onclick="playSong(${song.id})">▶</button>
            <button class="btn-remove" onclick="removeFromPlaylist(${song.id})">Remove</button>
        </div>
    `;
    return item;
}

/**
 * Remove song from playlist
 */
function removeFromPlaylist(songId) {
    let playlist = getUserPlaylist();
    playlist = playlist.filter(song => song.id !== songId);
    saveUserPlaylist(playlist);
    loadUserPlaylist();
    showNotification('Removed from playlist', 'info');
}

// Add CSS for notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);