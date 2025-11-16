# Garden Street Commons - Landing Page

A responsive "coming soon" landing page for Garden Street Commons, a neighborhood retail development in the Arts District.

## Overview

This landing page announces the upcoming launch of Garden Street Commons in June 2026. The design features a clean, minimalist aesthetic with a dark green color scheme and elegant typography.

## Features

- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Semantic HTML5**: Clean, accessible markup following best practices
- **Custom Typography**: Utilizes Tribun ADF and Avenir Next LT Pro fonts
- **Smooth Animations**: Subtle hover effects and page load transitions
- **Performance Optimized**: Fast loading with minimal dependencies
- **Accessibility**: Keyboard navigation support and reduced motion preferences
- **Email Integration**: CTA button opens email client with pre-filled message

## Design Elements

### Color Palette
- **Primary Green**: `#1d3e36` - Deep forest green background
- **White**: `#ffffff` - Text and logo
- **Cream**: `#ddd5c7` - CTA button background

### Typography
- **Headings**: Tribun ADF Extra Bold (serif)
- **Body/Subheadings**: Avenir Next LT Pro Bold (sans-serif)

### Layout Components
1. **Instagram Icon** (top right) - Social media link
2. **GSC Logo** (centered) - Brand identity
3. **Main Heading** - "GARDEN STREET COMMONS"
4. **Subheading** - "NEIGHBORHOOD RETAIL IN THE ARTS DISTRICT"
5. **Coming Soon Badge** - "COMING JUNE 2026"
6. **CTA Button** - "EMAIL FOR MORE INFO"

## File Structure

```
garden-street-commons/
├── index.html              # Main HTML file
├── css/
│   └── styles.css         # All styles and responsive design
├── js/
│   └── main.js            # Interactive functionality
├── Assets/
│   ├── Fonts/
│   │   ├── TribunADFStd-ExtraBold.otf
│   │   └── Avenir Next LT Pro Bold.otf
│   └── Images/
│       ├── GSC.png        # Logo file
│       └── LandingPage.pdf # Design reference
└── README.md              # This file
```

## Setup Instructions

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for testing)

### Quick Start

1. **Clone or download the repository**
   ```bash
   git clone <repository-url>
   cd garden-street-commons
   ```

2. **Open the landing page**

   **Option A**: Direct file opening
   - Simply double-click `index.html` to open in your default browser

   **Option B**: Using a local server (recommended)
   ```bash
   # Using Python 3
   python -m http.server 8000

   # Using Python 2
   python -m SimpleHTTPServer 8000

   # Using Node.js (with http-server installed globally)
   npx http-server
   ```

   Then navigate to `http://localhost:8000` in your browser

3. **That's it!** The page is ready to view.

### Deployment

This is a static website and can be deployed to any web hosting service:

- **GitHub Pages**: Push to a GitHub repository and enable GitHub Pages
- **Netlify**: Drag and drop the folder or connect your Git repository
- **Vercel**: Connect your repository for automatic deployments
- **Traditional Hosting**: Upload files via FTP to your web server

## Customization

### Changing the Email Address

Edit `js/main.js` and update the email variable:

```javascript
const email = 'your-email@example.com';
```

### Updating Instagram Link

Edit `index.html` and change the href attribute:

```html
<a href="https://instagram.com/your-handle" ...>
```

### Modifying Colors

Edit `css/styles.css` and update the CSS custom properties:

```css
:root {
    --color-primary-green: #1d3e36;
    --color-button-bg: #ddd5c7;
    /* Add your custom colors */
}
```

### Changing Launch Date

Edit `index.html` and update the badge text:

```html
<div class="coming-soon-badge">
    <span>COMING</span>
    <span>YOUR DATE HERE</span>
</div>
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Responsive Breakpoints

- **Desktop**: 1440px and above
- **Laptop**: 1024px - 1439px
- **Tablet**: 768px - 1023px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## Performance

- **Load Time**: < 1 second on standard broadband
- **Page Weight**: < 500KB including all assets
- **No External Dependencies**: All resources self-hosted

## Accessibility Features

- Semantic HTML5 elements
- ARIA labels for icon links
- Keyboard navigation support
- Focus indicators for interactive elements
- Reduced motion support for users with motion sensitivities
- High contrast text for readability
- Scalable vector graphics (SVG) for icons

## Technical Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with custom properties and Grid/Flexbox
- **Vanilla JavaScript**: No frameworks or libraries required
- **Custom Fonts**: OTF font files included

## Development Notes

### Font Loading
Fonts use `font-display: swap` to ensure text remains visible during webfont load.

### Image Optimization
The GSC logo is filtered to white using CSS `filter` property, maintaining a single image source.

### Animations
All animations respect the user's `prefers-reduced-motion` setting for accessibility.

## License

All rights reserved - Garden Street Commons

## Contact

For questions about Garden Street Commons:
- Email: info@gardenstreetcommons.com

## Credits

- **Design**: Based on LandingPage.pdf specifications
- **Fonts**: Tribun ADF, Avenir Next LT Pro
- **Development**: Built with HTML5, CSS3, and vanilla JavaScript

---

**Coming Soon: June 2026**
