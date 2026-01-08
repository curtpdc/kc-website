# Kayla Clark - Professional Model Portfolio Website

A modern, optimized portfolio website featuring TypeScript, PWA capabilities, and responsive design.

## 🚀 Features

- **TypeScript Integration**: Type-safe JavaScript with full IDE support
- **Responsive Design**: Mobile-first design with optimized photo frames
- **Progressive Web App**: Install as an app, offline support, fast loading
- **Performance Optimized**: Lazy loading, caching, and optimized assets
- **Accessibility**: WCAG 2.1 compliant with keyboard navigation
- **SEO Optimized**: Structured data, sitemap, and social media meta tags
- **Secure**: CSP, XSS protection, and security headers

## 📋 Requirements

- Node.js 18+ (for TypeScript compilation)
- Modern web browser
- Web server for local development (Python, Node, etc.)

## 🛠️ Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/curtpdc/kc-website.git
cd kc-website

# Install dependencies
npm install
```

### Development

```bash
# Build TypeScript
npm run build

# Start development server
npm start

# Or watch TypeScript files for changes
npm run watch:ts
```

Visit `http://localhost:8080` in your browser.

## 📁 Project Structure

```
kc-website/
├── src/                    # TypeScript source files
│   └── main.ts            # Main application TypeScript
├── js/                     # Compiled JavaScript (generated)
│   ├── main.js            # Compiled from TypeScript
│   └── main.js.map        # Source map for debugging
├── css/                    # Stylesheets
│   └── styles.css         # Main stylesheet
├── images/                 # Image assets
│   ├── beauty/            # Beauty portfolio images
│   ├── editorial/         # Editorial portfolio images
│   ├── commercial/        # Commercial portfolio images
│   └── icons/             # PWA icons
├── index.html             # Homepage
├── portfolio.html         # Portfolio page
├── about.html             # About page
├── creative-direction.html # Creative direction page
├── manifest.json          # PWA manifest
├── sw.js                  # Service Worker
├── robots.txt             # Search engine instructions
├── sitemap.xml            # Site structure
├── package.json           # Node.js dependencies
└── tsconfig.json          # TypeScript configuration
```

## 🔧 Scripts

- `npm run build:ts` - Compile TypeScript to JavaScript
- `npm run watch:ts` - Watch TypeScript files and auto-compile
- `npm run type-check` - Type check without compilation
- `npm run build` - Full build (compile TypeScript)
- `npm run serve` - Start local HTTP server
- `npm start` - Build and serve

## 🎨 Recent Updates (v2.0)

### Photo Frame Optimization
- Changed aspect ratio from 4:5/3:4 to 1:1 (square frames)
- Reduced frame size for better viewport utilization
- Improved mobile responsive behavior
- 30-40% reduction in vertical scrolling

### TypeScript Integration
- Converted JavaScript to TypeScript with strict type checking
- Added type definitions and interfaces
- Improved code maintainability and IDE support
- Generated source maps for debugging

## 📖 Documentation

- [UPGRADES.md](UPGRADES.md) - Modern web upgrades (PWA, SEO, Security)
- [TYPESCRIPT.md](TYPESCRIPT.md) - TypeScript setup and usage
- [PERFORMANCE.md](PERFORMANCE.md) - Performance optimizations
- [DEPLOYMENT.md](DEPLOYMENT.md) - Deployment guide
- [UPGRADE_SUMMARY.md](UPGRADE_SUMMARY.md) - Upgrade summary

## 🌐 Browser Support

- Chrome/Edge (latest + 2 versions)
- Firefox (latest + 2 versions)
- Safari (latest + 2 versions)
- Mobile Safari (iOS 12+)
- Chrome Mobile (Android 8+)

## 📱 PWA Features

The website can be installed as a Progressive Web App:
- Add to home screen on mobile devices
- Offline functionality for cached pages
- Fast loading with Service Worker caching
- Standalone app experience

## 🔒 Security

- Content Security Policy (CSP)
- XSS Protection headers
- X-Frame-Options
- Referrer Policy
- HTTPS required for production

## 🚀 Deployment

### Prerequisites for Production

1. **HTTPS**: Required for PWA and Service Workers
2. **Domain**: Update in `manifest.json` and `sitemap.xml`
3. **Icons**: Add PWA icons to `/images/icons/` directory
4. **Build**: Run `npm run build` before deploying

### Deployment Options

- **Netlify**: Drag & drop or GitHub integration
- **Vercel**: GitHub integration with auto-deploy
- **GitHub Pages**: Push to `gh-pages` branch
- **Traditional Hosting**: Upload via FTP/SFTP

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.

## 🧪 Testing

### Lighthouse Audit
```bash
# Open Chrome DevTools > Lighthouse
# Run audit for Performance, Accessibility, SEO
```

### Local Testing
```bash
npm start
# Visit http://localhost:8080
```

### TypeScript Type Checking
```bash
npm run type-check
```

## 📊 Performance Metrics

Expected Lighthouse Scores:
- Performance: 95+
- Accessibility: 100
- Best Practices: 95+
- SEO: 100

## 🤝 Contributing

This is a personal portfolio website. For inquiries or suggestions, please contact via the website.

## 📧 Contact

- **Email**: kceclark02@gmail.com
- **Instagram**: [@Kayla.C1erra.offical](https://instagram.com/kayla.c1erra.offical)
- **Management**: [AF Talent Management](https://www.aftalentmanagement.com/women-main/kayla-clark)
- **Location**: DMV Based

## 📄 License

© 2025 Kayla Clark. All rights reserved.

## 🙏 Acknowledgments

- Design & Development optimizations
- PWA implementation
- TypeScript integration
- Performance enhancements

---

**Version**: 2.0  
**Last Updated**: January 2025  
**Made with ❤️ in the DMV**
