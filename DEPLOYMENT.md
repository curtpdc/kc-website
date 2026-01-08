# Quick Deployment Guide

## Azure Static Web Apps Deployment

This project includes an automated GitHub Actions workflow for deploying to Azure Static Web Apps.

### Setup Instructions

1. **Create Azure Static Web App**
   - Go to [Azure Portal](https://portal.azure.com)
   - Create a new Static Web App resource
   - During creation, link it to this GitHub repository
   - Azure will automatically generate a deployment token

2. **Configure GitHub Secret**
   - The deployment token is automatically added as a repository secret named `AZURE_STATIC_WEB_APPS_API_TOKEN`
   - If you need to add it manually:
     - Go to your repository Settings > Secrets and variables > Actions
     - Add a new secret named `AZURE_STATIC_WEB_APPS_API_TOKEN`
     - Paste the deployment token from Azure

3. **Automatic Deployment**
   - The workflow automatically triggers on:
     - Push to `main` or `master` branch
     - Pull requests (creates preview environments)
   - View deployment status in the "Actions" tab of your repository

4. **Workflow Configuration**
   - Workflow file: `.github/workflows/azure-static-web-apps.yml`
   - App location: `/` (root directory)
   - No build step required (static HTML site)
   - Output location: `/` (serves files directly)

### Custom Domain (Optional)
After deployment, you can configure a custom domain:
- In Azure Portal, go to your Static Web App
- Navigate to "Custom domains"
- Follow the instructions to add your domain

## Pre-Deployment Checklist

### 1. Update Configuration Files

#### sitemap.xml
- [ ] Replace `https://kaylaclark.com` with your actual domain
- [ ] Update `<lastmod>` dates to current date

#### manifest.json
- [ ] Update `start_url` if deploying to subdirectory
- [ ] Verify theme colors match branding

### 2. Add Icon Assets

Create the following icon files in `/images/icons/`:
- [ ] icon-16x16.png
- [ ] icon-32x32.png
- [ ] icon-72x72.png
- [ ] icon-96x96.png
- [ ] icon-128x128.png
- [ ] icon-144x144.png
- [ ] icon-152x152.png
- [ ] icon-192x192.png
- [ ] icon-384x384.png
- [ ] icon-512x512.png
- [ ] apple-touch-icon.png (180x180)

**Tip:** Use [Favicon Generator](https://realfavicongenerator.net/) to create all sizes at once.

### 3. HTTPS Setup
- [ ] Obtain SSL/TLS certificate
- [ ] Configure HTTPS redirect
- [ ] Verify Service Worker works over HTTPS

### 4. Server Configuration

Add security headers (nginx example):
```nginx
add_header X-Content-Type-Options "nosniff" always;
add_header X-Frame-Options "DENY" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
```

### 5. Testing After Deployment
- [ ] Test PWA installation (Chrome mobile)
- [ ] Verify Service Worker registration (DevTools > Application)
- [ ] Check all pages load correctly
- [ ] Test social media sharing
- [ ] Run Lighthouse audit (aim for 90+ scores)
- [ ] Verify robots.txt is accessible: `yourdomain.com/robots.txt`
- [ ] Verify sitemap is accessible: `yourdomain.com/sitemap.xml`

### 6. SEO Setup
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Test rich results: [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Verify Open Graph tags: [OpenGraph.xyz](https://www.opengraph.xyz/)
- [ ] Test Twitter Cards: [Twitter Card Validator](https://cards-dev.twitter.com/validator)

## Optional Enhancements

### Analytics
Add Google Analytics or similar (before closing `</head>`):
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Contact Form Backend
The contact form currently uses client-side JavaScript. For production:
- Use [Formspree](https://formspree.io/)
- Use [Netlify Forms](https://www.netlify.com/products/forms/)
- Implement custom backend API
- Use email service (SendGrid, Mailgun, etc.)

## Common Issues

### Service Worker Not Working
- Ensure you're using HTTPS
- Check browser console for errors
- Clear browser cache
- Verify `sw.js` is accessible

### Icons Not Showing
- Create icon files (see `/images/icons/README.md`)
- Verify file paths in `manifest.json`
- Check file permissions
- Clear browser cache

### CSP Blocking Resources
If Content Security Policy blocks resources:
- Check browser console for CSP violations
- Update CSP in HTML meta tags or server headers
- Ensure all external resources are allowed

## Performance Tips

1. **Image Optimization**
   - Compress images (use TinyPNG, Squoosh, or ImageOptim)
   - Consider WebP format with JPEG fallback
   - Target < 200KB per image

2. **Caching**
   - Service Worker handles client-side caching
   - Configure server-side caching for static assets
   - Set cache headers: `Cache-Control: public, max-age=31536000`

3. **CDN** (Optional)
   - Consider Cloudflare for global CDN
   - Improves load times worldwide
   - Provides additional security

## Monitoring

After deployment, monitor:
- Page load times (Google Analytics)
- Core Web Vitals (Search Console)
- Error logs (server logs + browser console)
- Service Worker update success rate
- User feedback on PWA installation

## Maintenance Schedule

### Weekly
- Check analytics for errors
- Monitor Core Web Vitals

### Monthly
- Update sitemap dates for changed pages
- Review security headers
- Check for broken links

### Quarterly
- Update Service Worker cache version
- Review and optimize images
- Run full Lighthouse audit
- Test all functionality

---

**Need Help?** See `UPGRADES.md` for detailed documentation on each upgrade.
