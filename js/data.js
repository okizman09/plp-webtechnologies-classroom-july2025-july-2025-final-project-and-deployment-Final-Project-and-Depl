/**
 * TuneVibes - Data Management
 * Contains all song data, mood mappings, and data utilities
 */

// All available songs database
const allSongs = [
    // Chill Songs
    { id: 1, title: 'Sunset Dreams', artist: 'Lo-Fi Beats', mood: 'chill', emoji: '🌅', duration: '3:45' },
    { id: 2, title: 'Ocean Waves', artist: 'Ambient Collective', mood: 'chill', emoji: '🌊', duration: '4:12' },
    { id: 3, title: 'Coffee Shop', artist: 'Chill Masters', mood: 'chill', emoji: '☕', duration: '3:28' },
    { id: 4, title: 'Lazy Sunday', artist: 'Relax Radio', mood: 'chill', emoji: '🛋️', duration: '4:05' },
    { id: 5, title: 'Rainy Day', artist: 'Calm Collective', mood: 'chill', emoji: '🌧️', duration: '3:52' },
    
    // Energetic Songs
    { id: 6, title: 'Thunder Strike', artist: 'Electric Pulse', mood: 'energetic', emoji: '⚡', duration: '3:15' },
    { id: 7, title: 'Adrenaline Rush', artist: 'Power Hour', mood: 'energetic', emoji: '🔥', duration: '3:38' },
    { id: 8, title: 'Unstoppable', artist: 'Momentum', mood: 'energetic', emoji: '🚀', duration: '3:22' },
    { id: 9, title: 'Victory Lap', artist: 'Champions', mood: 'energetic', emoji: '🏆', duration: '3:41' },
    { id: 10, title: 'Beast Mode', artist: 'Grind Time', mood: 'energetic', emoji: '💪', duration: '3:29' },
    
    // Heartbreak Songs
    { id: 11, title: 'Ghost of You', artist: 'Melancholy Moon', mood: 'heartbreak', emoji: '🌙', duration: '4:18' },
    { id: 12, title: 'Empty Spaces', artist: 'Sad Girl Hours', mood: 'heartbreak', emoji: '💔', duration: '4:32' },
    { id: 13, title: 'Tears in Rain', artist: 'Emotional', mood: 'heartbreak', emoji: '🌧️', duration: '4:15' },
    { id: 14, title: 'Moving On', artist: 'Healing Hearts', mood: 'heartbreak', emoji: '🕊️', duration: '3:58' },
    { id: 15, title: 'Fading Memories', artist: 'Lost Love', mood: 'heartbreak', emoji: '🥀', duration: '4:25' },
    
    // Focus Songs
    { id: 16, title: 'Flow State', artist: 'Productivity Lab', mood: 'focus', emoji: '🎯', duration: '5:12' },
    { id: 17, title: 'Study Mode', artist: 'Brain Waves', mood: 'focus', emoji: '📚', duration: '4:48' },
    { id: 18, title: 'Mind Palace', artist: 'Concentration', mood: 'focus', emoji: '🧠', duration: '5:05' },
    { id: 19, title: 'Lock In', artist: 'Peak Performance', mood: 'focus', emoji: '⚙️', duration: '4:52' },
    { id: 20, title: 'Deep Work', artist: 'Focus Flow', mood: 'focus', emoji: '💻', duration: '5:18' },
    
    // Party Songs
    { id: 21, title: 'Turn Up', artist: 'DJ Hype', mood: 'party', emoji: '🎉', duration: '3:24' },
    { id: 22, title: 'Dance Floor', artist: 'Club Kings', mood: 'party', emoji: '💃', duration: '3:35' },
    { id: 23, title: 'Weekend Vibes', artist: 'Party People', mood: 'party', emoji: '🎊', duration: '3:42' },
    { id: 24, title: 'Celebration', artist: 'Good Times', mood: 'party', emoji: '🥳', duration: '3:28' },
    { id: 25, title: 'Neon Lights', artist: 'Club Mix', mood: 'party', emoji: '✨', duration: '3:38' },
    
    // Dreamy Songs
    { id: 26, title: 'Starlight', artist: 'Cosmic Dreams', mood: 'dreamy', emoji: '✨', duration: '4:35' },
    { id: 27, title: 'Floating', artist: 'Cloud Nine', mood: 'dreamy', emoji: '☁️', duration: '4:22' },
    { id: 28, title: 'Moonbeams', artist: 'Night Sky', mood: 'dreamy', emoji: '🌙', duration: '4:48' },
    { id: 29, title: 'Ethereal', artist: 'Dream Pop', mood: 'dreamy', emoji: '🦋', duration: '4:15' },
    { id: 30, title: 'Aurora', artist: 'Sky Dreamers', mood: 'dreamy', emoji: '🌌', duration: '4:52' }
];

// Mood data with descriptions
const moodData = {
    chill: {
        title: 'Chill Vibes',
        description: 'Relax and unwind with smooth vibes',
        color: '#14B8A6',
        songs: allSongs.filter(song => song.mood === 'chill')
    },
    energetic: {
        title: 'Energetic Bangers',
        description: 'Pump up the energy and move',
        color: '#F59E0B',
        songs: allSongs.filter(song => song.mood === 'energetic')
    },
    heartbreak: {
        title: 'Heartbreak Hotel',
        description: 'Feel the emotion, heal with sound',
        color: '#EC4899',
        songs: allSongs.filter(song => song.mood === 'heartbreak')
    },
    focus: {
        title: 'Deep Focus',
        description: 'Get in the zone and concentrate',
        color: '#8B5CF6',
        songs: allSongs.filter(song => song.mood === 'focus')
    },
    party: {
        title: 'Party Anthems',
        description: 'Turn up and celebrate life',
        color: '#EF4444',
        songs: allSongs.filter(song => song.mood === 'party')
    },
    dreamy: {
        title: 'Dreamy Escape',
        description: 'Float away on ethereal sounds',
        color: '#6366F1',
        songs: allSongs.filter(song => song.mood === 'dreamy')
    }
};

// Get songs by mood
function getSongsByMood(mood) {
    return allSongs.filter(song => song.mood === mood);
}

// Get song by ID
function getSongById(id) {
    return allSongs.find(song => song.id === id);
}

// Search songs
function searchSongs(query) {
    const lowerQuery = query.toLowerCase();
    return allSongs.filter(song => 
        song.title.toLowerCase().includes(lowerQuery) ||
        song.artist.toLowerCase().includes(lowerQuery)
    );
}

// Get random songs
function getRandomSongs(count = 6) {
    const shuffled = [...allSongs].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}