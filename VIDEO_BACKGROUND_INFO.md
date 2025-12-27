# Video Background Information

## What Is It?

The homepage of this website has a **video background feature** implemented in the hero section (the top section with "KAYLA CLARK" title). This feature is designed to display a looping, muted video behind the main content to create an elegant, dynamic visual effect.

## Current Status

**The feature is fully coded but not active** because no video file has been provided.

### What's Implemented:

1. **HTML Structure** (`index.html`, lines 109-111)
   ```html
   <div class="video-background" aria-hidden="true">
       <!-- Video will be added via JavaScript for better performance -->
   </div>
   ```

2. **CSS Styling** (`css/styles.css`, lines 731-746)
   - Video positioned absolutely to fill the hero section
   - Semi-transparent overlay (opacity: 0.3)
   - Object-fit: cover (fills space while maintaining aspect ratio)

3. **JavaScript Functionality** (`js/main.js`, lines 292-327)
   - Creates video element dynamically
   - Sets attributes: autoplay, muted, loop, playsinline
   - Implements viewport observer (pauses video when not visible for performance)
   - **Missing**: No video source URL specified

## How It Would Work (If a Video Was Added)

When a video file is provided, the hero section would display:
- A looping background video at 30% opacity
- Muted audio (for autoplay compatibility)
- Plays automatically when the page loads
- Pauses when scrolled out of view (performance optimization)
- Creates an elegant, cinematic effect behind the text

## How to Activate This Feature

To make the video background work, you need to:

### 1. Add Video Files

Create optimized video files in multiple formats for browser compatibility:
- **WebM** format (best for Chrome, Firefox, Opera)
- **MP4** format (best for Safari, IE, older browsers)

Recommended specifications:
- **Resolution**: 1920x1080 (Full HD) or 1280x720 (HD)
- **Duration**: 10-30 seconds (will loop)
- **File size**: Keep under 5MB for good performance
- **Frame rate**: 24-30 fps
- **Compression**: High compression, lower quality is fine (it will be semi-transparent)

### 2. Place Video Files

Put video files in a `/videos/` directory:
```
/videos/
  hero-background.mp4
  hero-background.webm
```

### 3. Update JavaScript

Modify `js/main.js`, around line 305, to add video sources:

```javascript
// Replace this section:
video.setAttribute('playsinline', '');
videoContainer.appendChild(video);

// With this:
video.setAttribute('playsinline', '');

// Add video sources
const sourceWebM = document.createElement('source');
sourceWebM.src = 'videos/hero-background.webm';
sourceWebM.type = 'video/webm';

const sourceMP4 = document.createElement('source');
sourceMP4.src = 'videos/hero-background.mp4';
sourceMP4.type = 'video/mp4';

video.appendChild(sourceWebM);
video.appendChild(sourceMP4);
videoContainer.appendChild(video);
```

### 4. Optimize Video Content

For best results, the video should:
- Feature subtle, elegant motion (not too distracting)
- Have good contrast for text readability when semi-transparent
- Be relevant to modeling/creative direction (e.g., fashion, studio scenes)
- Loop seamlessly (first and last frames should match)

## Alternative: Remove the Feature

If you decide not to use a video background, you can:

1. Remove the HTML div (lines 109-111 in `index.html`)
2. Remove or comment out the `initVideoBackground()` call (line 13 in `main.js`)
3. Keep the CSS (it won't hurt anything)

## Performance Considerations

Video backgrounds can impact performance:
- **Mobile**: Consider disabling on mobile devices (screen size check)
- **Low bandwidth**: Provide a fallback static image
- **Accessibility**: Keep `aria-hidden="true"` so screen readers ignore it

## Examples of Video Background Use

Many professional portfolios and creative sites use this technique:
- Model portfolios (runway footage, photoshoot b-roll)
- Creative agencies (abstract motion, brand elements)
- Photography websites (camera movements, studio scenes)

## Technical Notes

- The video is properly configured for autoplay (muted + playsinline)
- Viewport observer pauses video when not visible (saves battery/bandwidth)
- Semi-transparent overlay ensures text remains readable
- ARIA hidden attribute ensures accessibility compliance
- Positioned in z-index layer below hero content

## Questions?

- **"Why isn't anything showing?"** - No video file has been provided yet
- **"Do I need this?"** - No, it's optional. The site works fine without it
- **"Will it slow down my site?"** - Only if the video file is too large. Keep it under 5MB
- **"Can I use a YouTube video?"** - Not recommended. Better to host your own file for performance

---

**Summary**: The video background is a professional feature that's ready to use once you provide video files. It's completely optional and can be activated or removed based on your preference.
