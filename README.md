# MCN Website

A modern, responsive website for a Multi-Channel Network (MCN) that helps content creators grow their audience and monetize their content across multiple platforms.

## Features

- **Modern Design**: Clean, professional SaaS-style design with gradient accents
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Scroll-based animations and hover effects
- **Contact Form**: Ready-to-use contact form for creator inquiries
- **Sections**:
  - Hero with call-to-action
  - About/Features
  - Services
  - Creator showcase
  - Contact form
  - Footer with links

## Tech Stack

- HTML5
- CSS3 (with CSS Variables for theming)
- Vanilla JavaScript
- Google Fonts (Inter)

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/carltonqu/mcn-website.git
   ```

2. Open `index.html` in your browser or serve with a local server:
   ```bash
   cd mcn-website
   python -m http.server 8000
   ```

3. Visit `http://localhost:8000` in your browser.

## Project Structure

```
mcn-website/
├── index.html      # Main HTML file
├── styles.css      # Stylesheet with CSS variables
├── script.js       # JavaScript for interactions
└── README.md       # Project documentation
```

## Customization

### Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary: #6366f1;
    --secondary: #8b5cf6;
    --dark: #0f172a;
    /* ... */
}
```

### Content
Update the HTML content in `index.html` to match your MCN's branding and creator information.

## License

MIT License
