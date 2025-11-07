## 📄 **README.md**

```markdown
# 🎵 TuneVibes - Music That Matches Your Emotion

<div align="center">

![TuneVibes Logo](https://img.shields.io/badge/TuneVibes-Feel%20The%20Vibe-8B5CF6?style=for-the-badge&logo=music&logoColor=white)

**An interactive music discovery platform that connects emotions with sound**

[![Live Demo](https://img.shields.io/badge/LIVE%20DEMO-Visit%20Site-EC4899?style=for-the-badge&logo=netlify&logoColor=white)](https://tunevibes-okizman.netlify.app/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

[View Demo](https://tunevibes-okizman.netlify.app/) · [Report Bug](https://github.com/yourusername/tunevibes/issues) · [Request Feature](https://github.com/yourusername/tunevibes/issues)

</div>

---

## 📖 About The Project

**TuneVibes** is a modern, interactive web application that revolutionizes how people discover music. Instead of browsing by genre or artist, users explore songs through **emotions and moods** — creating a deeply personal musical journey.

Whether you're feeling chill, energetic, heartbroken, focused, party-ready, or dreamy, TuneVibes curates the perfect soundtrack for your moment.

### ✨ What Makes TuneVibes Special?

- 🎭 **Emotion-First Discovery** - Find music that matches how you feel
- 🎨 **Stunning Visual Design** - Gradient animations and glassmorphism UI
- 📱 **Fully Responsive** - Perfect experience on any device
- 💾 **Personal Playlists** - Save your favorites with localStorage
- 🎧 **Interactive Player** - Beautiful music player interface
- ⚡ **Zero Dependencies** - Pure vanilla JavaScript, no frameworks

---

## 🌐 Live Demo

### **[🎵 Experience TuneVibes Now →](https://tunevibes-okizman.netlify.app/)**

Deployed on **Netlify** with continuous deployment from GitHub.

---

## 🎯 Key Features

<table>
<tr>
<td width="50%">

### 🏠 Home Page
- Interactive mood selector
- 6 emotion categories
- Dynamic playlist previews
- Smooth animations

</td>
<td width="50%">

### 🔍 Discover Page
- Browse 30+ curated songs
- Real-time search functionality
- Filter by mood
- Add to playlist instantly

</td>
</tr>
<tr>
<td width="50%">

### 💜 My Vibes
- Personal saved playlists
- Quick remove functionality
- Clear all option
- Empty state guidance

</td>
<td width="50%">

### 🎧 Now Playing
- Simulated music player
- Play/Pause/Next/Previous controls
- Progress bar with time tracking
- Audio visualizer animation

</td>
</tr>
<tr>
<td width="50%">

### 📚 About Page
- Project story and mission
- Technology stack details
- Creator information
- Social links

</td>
<td width="50%">

### 📞 Contact Page
- Working contact form
- Real-time validation
- Success notifications
- Professional layout

</td>
</tr>
</table>

---

## 🛠️ Built With

This project showcases modern web development best practices using vanilla technologies:

| Technology | Purpose | Why? |
|------------|---------|------|
| **HTML5** | Structure & Semantics | Accessible, SEO-friendly markup |
| **CSS3** | Styling & Animations | Custom properties, Grid, Flexbox, Keyframes |
| **JavaScript ES6+** | Interactivity & Logic | Modular, clean, well-documented code |
| **LocalStorage API** | Data Persistence | Save user playlists client-side |
| **Google Fonts** | Typography | Poppins (headings) & Inter (body) |

### 🎨 Design Philosophy

- **Color Palette**: Vibrant gradients (Purple, Pink, Teal, Orange)
- **UI Style**: Glassmorphism with animated backgrounds
- **Animations**: Smooth transitions and hover effects
- **Accessibility**: Semantic HTML and proper contrast ratios

---

## 📂 Project Structure

```
TuneVibes/
│
├── 📄 index.html              # Home - Mood selection & featured playlists
├── 📄 discover.html           # Discover - Browse all songs
├── 📄 playlists.html          # My Vibes - User's saved tracks
├── 📄 nowplaying.html         # Now Playing - Music player
├── 📄 about.html              # About - Project information
├── 📄 contact.html            # Contact - Contact form
│
├── 📁 css/
│   ├── style.css              # Core styles (navigation, cards, layout)
│   ├── animations.css         # All keyframe animations
│   └── responsive.css         # Media queries for mobile/tablet
│
├── 📁 js/
│   ├── main.js                # App initialization, navigation, UI logic
│   ├── player.js              # Music player controls & functionality
│   ├── playlist.js            # Playlist management & localStorage
│   └── data.js                # Song database & mood mappings
│
├── 📁 data/
│   └── songs.json             # 30 songs in JSON format
│
└── 📄 README.md               # You are here! 📍
```

**Total Lines of Code**: ~2,500+ lines
**Files**: 15 production files
**No Build Tools Required**: Just open and run!

---

## 🚀 Getting Started

### Prerequisites

You only need:
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor (VS Code, Sublime, Atom)
- Git (optional, for version control)

### Installation

**Option 1: Direct Download**
1. Download the ZIP file from GitHub
2. Extract to your desired location
3. Open `index.html` in your browser

**Option 2: Clone Repository**
```bash
# Clone the repo
git clone https://github.com/yourusername/tunevibes.git

# Navigate to project
cd tunevibes

# Open in browser (or use Live Server in VS Code)
open index.html
```

**That's it!** No npm install, no webpack, no build process. Pure vanilla web development. 🎉

---

## 💻 Usage

### For End Users

1. **🏠 Home Page**
   - Click on any mood card (Chill, Energetic, Heartbreak, etc.)
   - See curated songs for that emotion
   - Click play to listen (simulated)

2. **🔍 Discover Page**
   - Browse all 30 songs
   - Use search bar to find specific titles/artists
   - Filter by mood using the dropdown
   - Click "Add" to save songs to your playlist

3. **💜 My Vibes**
   - View all your saved songs
   - Remove individual songs or clear all
   - Click play to start listening

4. **🎧 Now Playing**
   - Control playback with play/pause/next/previous
   - See progress bar and time remaining
   - Watch the animated visualizer
   - Adjust volume with slider

5. **📞 Contact**
   - Fill out the form with your message
   - Form validates in real-time
   - See success notification on submission

### For Developers

**Adding New Songs:**
Edit `js/data.js`:
```javascript
const allSongs = [
    // ... existing songs
    {
        id: 31,
        title: 'Your New Song',
        artist: 'Artist Name',
        mood: 'chill', // chill, energetic, heartbreak, focus, party, dreamy
        emoji: '🎵',
        duration: '3:45'
    }
];
```

**Customizing Colors:**
Edit CSS variables in `css/style.css`:
```css
:root {
    --primary: #8B5CF6;      /* Purple */
    --accent: #EC4899;        /* Pink */
    --gradient-start: #6366F1; /* Indigo */
    --gradient-end: #14B8A6;   /* Teal */
}
```

**Modifying Moods:**
Update mood data in `js/data.js`:
```javascript
const moodData = {
    your_mood: {
        title: 'Your Mood Title',
        description: 'Description text',
        color: '#HEXCODE',
        songs: []
    }
};
```

---

## 📱 Responsive Design

TuneVibes is fully responsive across all devices:

| Device | Breakpoint | Optimizations |
|--------|------------|---------------|
| 📱 Mobile | 320px - 480px | Single column, hamburger menu, touch-friendly buttons |
| 📱 Large Mobile | 481px - 767px | Optimized card sizes, stacked layouts |
| 💻 Tablet | 768px - 1024px | 2-column grids, collapsible navigation |
| 🖥️ Desktop | 1025px+ | Full navigation, multi-column grids, hover effects |

**Testing Devices:**
- iPhone SE, 12, 13 Pro
- Samsung Galaxy S20, S21
- iPad Air, Pro
- Desktop 1920x1080, 2560x1440

---

## 🎨 Design Showcase

### Color Palette

```css
Primary Purple:    #8B5CF6  ████
Accent Pink:       #EC4899  ████
Gradient Indigo:   #6366F1  ████
Gradient Teal:     #14B8A6  ████
Dark Background:   #0F172A  ████
Light Text:        #F8FAFC  ████
```

### Mood Colors

```css
Chill:       #14B8A6  ████  (Teal)
Energetic:   #F59E0B  ████  (Orange)
Heartbreak:  #EC4899  ████  (Pink)
Focus:       #8B5CF6  ████  (Purple)
Party:       #EF4444  ████  (Red)
Dreamy:      #6366F1  ████  (Indigo)
```

---

## ✅ Features Implemented

### Core Requirements ✓
- [x] Multi-page website (6 pages)
- [x] Responsive design (mobile, tablet, desktop)
- [x] Semantic HTML5
- [x] Modern CSS3 (Grid, Flexbox, Animations)
- [x] Interactive JavaScript
- [x] Organized file structure
- [x] Clean, commented code
- [x] Live deployment

### Interactive Elements ✓
- [x] Hamburger mobile menu
- [x] Mood card selection
- [x] Dynamic content loading
- [x] Search & filter functionality
- [x] Add/remove from playlist
- [x] Music player controls
- [x] Form validation
- [x] LocalStorage persistence
- [x] Smooth scroll animations
- [x] Hover effects & transitions

### Best Practices ✓
- [x] Semantic HTML tags
- [x] CSS custom properties
- [x] Modular JavaScript
- [x] Mobile-first approach
- [x] Accessibility considerations
- [x] Cross-browser compatibility
- [x] Git version control
- [x] Professional documentation

---

## 🚀 Deployment

This project is deployed on **Netlify** with automatic deployment from the GitHub repository.

### Deploy Your Own

**Option 1: Netlify (Recommended)**
1. Create account at [netlify.com](https://www.netlify.com/)
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub repository
4. Click "Deploy site"
5. Done! Your site is live with a URL like `yoursite.netlify.app`

**Option 2: GitHub Pages**
1. Push code to GitHub
2. Go to Settings → Pages
3. Select main branch as source
4. Site deploys to `yourusername.github.io/tunevibes`

**Option 3: Vercel**
1. Create account at [vercel.com](https://vercel.com/)
2. Import GitHub repository
3. Click "Deploy"
4. Auto-deploys on every push

### Current Deployment

- **Platform**: Netlify
- **URL**: [https://tunevibes-okizman.netlify.app/](https://tunevibes-okizman.netlify.app/)
- **Status**: ✅ Live
- **Auto-Deploy**: Enabled from main branch

---

## 📊 Project Statistics

<table>
<tr>
<td>

**Code Metrics**
- Total Lines: ~2,500+
- HTML Files: 6
- CSS Files: 3 (~1,200 lines)
- JS Files: 4 (~800 lines)
- JSON Files: 1

</td>
<td>

**Content**
- Pages: 6
- Songs: 30
- Moods: 6
- Animations: 15+
- Responsive Breakpoints: 5

</td>
</tr>
</table>

---

## 🎓 Learning Outcomes

This project demonstrates proficiency in:

### HTML5
- Semantic elements (`<nav>`, `<section>`, `<article>`)
- Form elements and validation
- Meta tags for SEO
- Accessibility attributes

### CSS3
- Custom properties (CSS variables)
- Flexbox and Grid layouts
- Keyframe animations
- Media queries
- Pseudo-classes and pseudo-elements
- Backdrop filters and glassmorphism

### JavaScript
- DOM manipulation
- Event listeners
- LocalStorage API
- Array methods (filter, map, find)
- ES6+ features (arrow functions, template literals)
- Modular code organization

### Web Development
- Responsive design principles
- Mobile-first approach
- Progressive enhancement
- Git version control
- Deployment workflows
- Documentation best practices

---

## 🐛 Known Limitations

**Current Limitations:**
- 🎵 Music playback is simulated (no actual audio files)
- 👤 No user authentication (playlists are browser-specific)
- 💾 Data stored in localStorage only (cleared with browser cache)
- 🌐 No backend or database integration

**Why These Choices?**
This is a frontend-focused project demonstrating client-side web development skills. These limitations keep the project simple, deployable, and easy to understand while still showcasing advanced techniques.

---

## 🔮 Future Enhancements

Potential features for future versions:

### Phase 1: Enhanced Functionality
- [ ] Integrate Spotify Web API for real music
- [ ] Actual audio playback with Web Audio API
- [ ] Download playlist as JSON
- [ ] Share playlist links

### Phase 2: User Features
- [ ] User authentication (Firebase Auth)
- [ ] Cloud-synced playlists
- [ ] Social sharing to Twitter/Facebook
- [ ] Follow other users

### Phase 3: Advanced Features
- [ ] AI mood detection from text input
- [ ] Image-based mood analysis
- [ ] Dark/Light mode toggle
- [ ] Playlist collaboration
- [ ] Auto-generated playlist covers

### Phase 4: Platform Growth
- [ ] Mobile app (React Native)
- [ ] Backend API (Node.js + MongoDB)
- [ ] Music recommendations algorithm
- [ ] Artist profiles and bio pages

**Want to contribute?** Check the [Issues](https://github.com/yourusername/tunevibes/issues) page!

---

## 👨‍💻 Author

**Okiki**
- Developer, Designer, Music Enthusiast
- Passionate about creating emotional web experiences

### Connect With Me
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/yourusername)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/yourhandle)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/yourprofile)

---

## 🙏 Acknowledgments

Special thanks to:
- **My Instructor** - For the comprehensive web development curriculum
- **Spotify** - UI/UX inspiration for music platforms
- **Google Fonts** - For beautiful, free typography
- **Netlify** - For seamless deployment and hosting
- **MDN Web Docs** - For excellent documentation
- **The Web Dev Community** - For endless inspiration

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### What This Means:
- ✅ Use commercially
- ✅ Modify and distribute
- ✅ Use privately
- ✅ Include copyright notice

---

## 📞 Support & Contact

**Need help or have questions?**

- 📧 Email: hello@tunevibes.com
- 🐛 Report bugs: [GitHub Issues](https://github.com/yourusername/tunevibes/issues)
- 💡 Feature requests: [GitHub Issues](https://github.com/yourusername/tunevibes/issues)
- 🌐 Website: [tunevibes-okizman.netlify.app](https://tunevibes-okizman.netlify.app/)

---

## ⭐ Show Your Support

If you found this project helpful or interesting:

- ⭐ **Star this repository** on GitHub
- 🍴 **Fork it** and make your own version
- 📣 **Share it** with friends and classmates
- 💬 **Leave feedback** in the issues section

---

<div align="center">

### 🎵 Made with 💜 and lots of ☕ by Okiki

**[⬆ Back to Top](#-tunevibes---music-that-matches-your-emotion)**

---

**© 2025 TuneVibes. All Rights Reserved.**

[![Netlify Status](https://api.netlify.com/api/v1/badges/your-badge-id/deploy-status)](https://app.netlify.com/sites/tunevibes-okizman/deploys)

</div>
```

---
