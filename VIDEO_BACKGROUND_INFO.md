# Video Background Information

## What Is It?

The homepage of this website has a **video background feature** implemented in the hero section (the top section with "KAYLA CLARK" title). This feature displays a looping, muted video slideshow of portfolio photos behind the main content to create an elegant, dynamic visual effect.

## Current Status

**✅ The feature is ACTIVE and working!** 

A 30-second video slideshow has been created using 6 high-quality portfolio photos with a subtle Ken Burns zoom effect and smooth transitions.

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

3. **JavaScript Functionality** (`js/main.js`, lines 293-340)
   - Creates video element dynamically
   - Sets attributes: autoplay, muted, loop, playsinline
   - Implements viewport observer (pauses video when not visible for performance)
   - ✅ **Video sources**: WebM (1.3MB) and MP4 (2.0MB) formats
   - ✅ **Error handling**: Gracefully hides video if loading fails
   - ✅ **Accessibility**: aria-label and container aria-hidden

4. **Video Files** (`/videos/`)
   - `hero-background.webm` - 1.3MB (VP9 codec, modern browsers)
   - `hero-background.mp4` - 2.0MB (H.264 codec, fallback support)

## How It Works

The video background features:

1. **Content**: A slideshow of 6 portfolio photos including:
   - Beauty shots (soft glam, golden hour)
   - Editorial fashion photos
   - Creative direction work

2. **Visual Effect**: 
   - Subtle Ken Burns effect (slow zoom from 1.0x to 1.05x)
   - Smooth crossfade transitions between images
   - 5 seconds per image
   - Total duration: 30 seconds (loops seamlessly)

3. **Performance**:
   - Optimized file sizes (1.3-2.0MB)
   - Pauses when scrolled out of view
   - Multiple format support for all browsers
   - Graceful error handling

4. **Accessibility**:
   - Hidden from screen readers (aria-hidden on container)
   - Labeled for context (aria-label on video)
   - Respects prefers-reduced-motion (browser default)
   - Semi-transparent (30% opacity) ensures text readability

## Updating the Video

To change or update the video content:

### Option 1: Replace Existing Video Files

Simply replace the video files in the `/videos/` directory:
- `videos/hero-background.webm`
- `videos/hero-background.mp4`

Keep the same filenames and the video will automatically update.

**Recommended specifications:**
- **Resolution**: 1920x1080 (Full HD) or 1280x720 (HD)
- **Duration**: 10-30 seconds (will loop)
- **File size**: Keep under 3MB per file for good performance
- **Frame rate**: 24-30 fps
- **Compression**: High compression is fine (video displays at 30% opacity)

### Option 2: Create a New Video from Different Images
### Option 2: Create a New Video from Different Images

You can recreate the video using ffmpeg (as was done for the current video):

1. Select your images
2. Use ffmpeg to create a slideshow with Ken Burns effect
3. Export to both WebM and MP4 formats
4. Replace the files in `/videos/`

(See the original creation script in git history for reference)

### Option 3: Use a Different Video Source

If you want to use different source paths:

1. Update `js/main.js` around line 308-313:
   ```javascript
   sourceWebM.src = 'your-new-path/your-video.webm';
   sourceMP4.src = 'your-new-path/your-video.mp4';
   ```

2. Ensure the video files are accessible from the website root

## Disabling the Video Background

If you want to temporarily disable the video background without removing files:

**Option 1: CSS** - Add to your CSS:
```css
.video-background {
    display: none !important;
}
```

**Option 2: JavaScript** - Comment out the initialization in `main.js` (line 13):
```javascript
// initVideoBackground();  // Commented out to disable video
```

## Removing the Feature Completely

To permanently remove the video background:

1. Delete the `/videos/` directory
2. Remove or comment out `initVideoBackground()` call in `main.js` (line 13)
3. Optionally remove the `initVideoBackground()` function (lines 293-340)
4. Optionally remove the HTML div (lines 109-111 in `index.html`)
5. Optionally remove the CSS (lines 731-746 in `styles.css`)

## Performance Considerations

The current implementation includes several optimizations:

- **Viewport Observer**: Video pauses when hero section is not visible
- **Compressed Formats**: WebM provides excellent compression
- **Optimized Resolution**: 1080p provides quality without excessive file size
- **Error Handling**: Gracefully degrades if video fails to load
- **Mobile-Friendly**: Uses `playsinline` attribute for iOS compatibility

## Browser Compatibility

- ✅ Chrome/Edge (WebM VP9)
- ✅ Firefox (WebM VP9)
- ✅ Safari (MP4 H.264 fallback)
- ✅ Mobile browsers (iOS, Android)
- ✅ Older browsers (MP4 fallback)

## Accessibility

- Video container has `aria-hidden="true"` (hidden from screen readers)
- Video element has descriptive `aria-label`
- Respects user's `prefers-reduced-motion` setting (browser default)
- 30% opacity ensures text remains readable
- Muted (no audio disruption)

---

**Current Status**: ✅ **ACTIVE** - Video background is working and displays a subtle slideshow of portfolio photos.

For questions or issues, refer to the git commit history for implementation details.
