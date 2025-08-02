# 🚀 Deployment Guide - VowTrove Website

This guide will help you deploy your VowTrove website to GitHub Pages for free hosting.

## 📋 Prerequisites

- GitHub account
- Basic knowledge of Git (optional)
- Your website files ready

## 🎯 Quick Start (5 minutes)

### Option 1: GitHub Web Interface (Easiest)

1. **Create Repository**
   - Go to [GitHub.com](https://github.com)
   - Click "+" → "New repository"
   - Name: `vowtrove-website`
   - Make it **Public** (required for GitHub Pages)
   - Click "Create repository"

2. **Upload Files**
   - In your new repository, click "uploading an existing file"
   - Drag and drop these files:
     - `index.html`
     - `styles.css`
     - `script.js`
     - `README.md`
   - Add commit message: "Initial website upload"
   - Click "Commit changes"

3. **Enable GitHub Pages**
   - Go to "Settings" tab
   - Scroll to "GitHub Pages" section
   - Source: "Deploy from a branch"
   - Branch: "main", Folder: "/ (root)"
   - Click "Save"
   - Wait 2-5 minutes for deployment

4. **Your site is live!**
   - Visit: `https://yourusername.github.io/vowtrove-website`

### Option 2: Git Commands (Advanced)

```bash
# 1. Initialize git repository
git init

# 2. Add all files
git add .

# 3. Commit changes
git commit -m "Initial website upload"

# 4. Create repository on GitHub (via web interface)
# Then add remote:
git remote add origin https://github.com/yourusername/vowtrove-website.git

# 5. Push to GitHub
git push -u origin main

# 6. Enable GitHub Pages (via web interface)
# Settings → GitHub Pages → Deploy from main branch
```

## 🔧 Customization Steps

### 1. Update Website Information

Edit `index.html` to customize:
- **Company name**: Replace "VowTrove" with your brand
- **Contact info**: Update email, location, GitHub links
- **App descriptions**: Modify app names and descriptions
- **Social media**: Update social links in footer

### 2. Add Your APK Files

1. **Create app folders** in the `apps/` directory
2. **Upload APK files** to respective folders
3. **Update download links** in `index.html`:

```html
<!-- Replace # with actual APK file path -->
<a href="apps/your-app/app-release.apk" class="btn btn-download">
    <i class="fab fa-google-play"></i>
    Download APK
</a>
```

### 3. Customize Colors

Edit `styles.css` to change the color scheme:
```css
/* Primary color */
.nav-logo h2 { color: #6366f1; }

/* Secondary color */
.highlight { color: #fbbf24; }

/* Success color */
.btn-download { background: #10b981; }
```

### 4. Add Custom Domain (Optional)

1. **Purchase domain** (e.g., `vowtrove.com`)
2. **Add CNAME file** to your repository:
   ```
   vowtrove.com
   ```
3. **Configure DNS** with your domain provider
4. **Update GitHub Pages** settings with custom domain

## 📱 Testing Your Website

### Local Testing
```bash
# Start local server
python -m http.server 8000

# Visit http://localhost:8000
```

### Mobile Testing
- Test on different devices
- Check responsive design
- Verify download links work

## 🔍 SEO Optimization

### 1. Update Meta Tags
Edit the `<head>` section in `index.html`:
```html
<meta name="description" content="Your custom description">
<meta property="og:url" content="https://yourusername.github.io/vowtrove-website">
```

### 2. Add Google Analytics
Add this before `</head>`:
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

## 🚨 Troubleshooting

### Common Issues

1. **Site not loading**
   - Check repository is public
   - Verify GitHub Pages is enabled
   - Wait 5-10 minutes for deployment

2. **Images not showing**
   - Check file paths are correct
   - Ensure images are uploaded to repository

3. **Download links not working**
   - Verify APK files are uploaded
   - Check file paths in HTML
   - Test with actual APK files

4. **Mobile menu not working**
   - Check JavaScript file is loaded
   - Verify CSS classes are correct

### Performance Tips

1. **Optimize images** before uploading
2. **Minimize CSS/JS** for faster loading
3. **Use CDN** for external resources
4. **Enable compression** on your server

## 📊 Analytics Setup

### Google Analytics
1. Create Google Analytics account
2. Get tracking ID
3. Add tracking code to `index.html`

### GitHub Pages Analytics
- Go to repository Settings
- Scroll to "GitHub Pages" section
- Enable "Google Analytics"

## 🔄 Updates and Maintenance

### Adding New Apps
1. Upload APK to `apps/` folder
2. Add app card to `index.html`
3. Update download links
4. Commit and push changes

### Updating Content
1. Edit files locally
2. Test changes
3. Commit and push to GitHub
4. Changes deploy automatically

## 📞 Support

If you need help:
- **GitHub Pages**: [Documentation](https://pages.github.com/)
- **HTML/CSS**: [MDN Web Docs](https://developer.mozilla.org/)
- **Git**: [GitHub Guides](https://guides.github.com/)

## 🎉 Success!

Your VowTrove website is now live and ready to showcase your mobile applications!

**Next steps:**
- Add real APK files
- Customize branding
- Set up analytics
- Share your website!

---

**VowTrove** - Empowering users with innovative digital solutions! 🚀 