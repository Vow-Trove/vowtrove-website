# VowTrove - Your Digital Companion

A modern, responsive website showcasing VowTrove's mobile applications with beautiful UI design and smooth animations.

## 🌟 Features

- **Modern Design**: Clean, professional design with gradient backgrounds and smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Elements**: Smooth scrolling, hover effects, and mobile navigation
- **App Showcase**: Dedicated section to display and download your mobile applications
- **Contact Form**: Functional contact form with validation
- **Performance Optimized**: Fast loading with optimized CSS and JavaScript

## 📱 App Showcased

- **VowTrove** - Your ultimate digital companion with advanced features and intuitive design

## 🚀 Getting Started

### Prerequisites

- A GitHub account
- Basic knowledge of Git (optional)

### Installation

1. **Clone or Download** this repository to your local machine
2. **Open** `index.html` in your web browser to view the website locally

### Local Development

To run the website locally:

```bash
# Navigate to the project directory
cd vowtrove-website

# Open index.html in your browser
# Or use a local server (recommended)
python -m http.server 8000
# Then visit http://localhost:8000
```

## 🌐 Hosting on GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository (e.g., `vowtrove-website`)
5. Make it **Public** (required for GitHub Pages)
6. Click "Create repository"

### Step 2: Upload Your Files

#### Option A: Using GitHub Web Interface
1. In your new repository, click "uploading an existing file"
2. Drag and drop all files from this project:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
3. Add a commit message like "Initial website upload"
4. Click "Commit changes"

#### Option B: Using Git Commands
```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial website upload"

# Add remote repository (replace with your GitHub repo URL)
git remote add origin https://github.com/yourusername/vowtrove-website.git

# Push to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "GitHub Pages" section
4. Under "Source", select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Click "Save"
7. Wait a few minutes for your site to be published

Your website will be available at: `https://yourusername.github.io/vowtrove-website`

## 📁 File Structure

```
vowtrove-website/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md          # This file
```

## 🎨 Customization

### Adding Your VowTrove App

1. **Update App Information**: Edit the app details in `index.html` (lines 150-200)
2. **Add APK Download**: Replace the `#` link in download button with actual APK file URL
3. **Custom Icon**: Change the Font Awesome icon in the app section

### Changing Colors

The website uses a modern color scheme:
- Primary: `#6366f1` (Indigo)
- Secondary: `#fbbf24` (Yellow)
- Success: `#10b981` (Green)
- Background: `#f9fafb` (Light Gray)

To change colors, edit the CSS variables in `styles.css`.

### Adding More Sections

The website is modular and easy to extend. You can add new sections by:
1. Adding HTML structure in `index.html`
2. Adding corresponding CSS styles in `styles.css`
3. Adding JavaScript functionality in `script.js`

## 📱 Mobile Responsiveness

The website is fully responsive and includes:
- Mobile navigation menu
- Responsive grid layouts
- Touch-friendly buttons
- Optimized typography for mobile devices

## 🔧 Technical Details

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript**: Vanilla JS with ES6+ features
- **Fonts**: Inter (Google Fonts)
- **Icons**: Font Awesome 6
- **Animations**: CSS transitions and JavaScript animations

## 📞 Contact Information

Update the contact information in the HTML file:
- Email: `hello@vowtrove.com`
- Location: `San Francisco, CA`
- GitHub: `github.com/vowtrove`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Commit and push
5. Create a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you need help with:
- **GitHub Pages setup**: Check [GitHub Pages documentation](https://pages.github.com/)
- **Customization**: Edit the HTML, CSS, and JavaScript files
- **APK hosting**: Consider using GitHub Releases or external hosting services

## 🎯 Next Steps

After hosting your website:

1. **Add Real APK Files**: Upload your actual APK files and update the download links
2. **Custom Domain**: Set up a custom domain for your GitHub Pages site
3. **Analytics**: Add Google Analytics to track visitors
4. **SEO**: Optimize meta tags and descriptions
5. **Social Media**: Add Open Graph tags for better social sharing

---

**VowTrove** - Empowering users with innovative digital solutions! 🚀 