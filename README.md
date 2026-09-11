# VINITHTHA NAGESWARAN - Digital Portfolio

A modern, responsive digital portfolio website built with HTML, CSS, and JavaScript.

## Project Structure

```
├── index.html       # Main HTML file
├── style.css        # CSS stylesheet
├── script.js        # JavaScript functionality
├── photo.jpg        # Profile photo (add your image)
└── README.md        # This file
```

## Files Included

### index.html
The main HTML structure containing:
- Navigation bar with smooth scrolling links
- Hero section with introduction
- About/Professional Profile section
- Skills & Technologies section
- Projects showcase
- Education & Activities timeline
- Contact information
- Footer

### style.css
Complete styling for the portfolio including:
- CSS custom properties (variables) for consistent theming
- Responsive grid layouts
- Animations (fadeUp, float, pulse)
- Mobile-responsive design (breakpoint at 800px)
- Modern design elements (cards, badges, timeline)

### script.js
JavaScript functionality for:
- Intersection Observer API for scroll reveal animations
- Smooth animations when sections come into view

## Setup Instructions

1. **Extract the zip file** to your desired location

2. **Add your photo**
   - Replace `photo.jpg` with your own profile image
   - Keep the same filename or update the reference in `index.html`
   - Recommended size: 300x370px (adjust in CSS if different)

3. **Update content**
   - Open `index.html` in a text editor
   - Update all personal information:
     - Name, title, and description in hero section
     - Professional profile
     - Skills (add/remove as needed)
     - Projects
     - Education and activities
     - Contact information

4. **Open in browser**
   - Double-click `index.html` or right-click → Open with Browser
   - Or use a local server for better development experience

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization

### Colors
Edit the CSS variables in `style.css` (`:root` section):
- `--navy`: Primary dark color
- `--blue`: Primary blue color
- `--cyan`: Accent color
- Change these values to match your branding

### Fonts
The portfolio uses `Inter` font family via system fonts. To use custom fonts:
- Add a `<link>` tag in the `<head>` of `index.html`
- Or update the `font-family` property in the `body` rule

### Layout
- Responsive grid layouts adapt to screen size
- Mobile breakpoint: 800px
- Modify `@media` query at the bottom of `style.css` for different breakpoints

## Performance Tips

1. Optimize your profile photo:
   - Use JPG or WebP format
   - Keep file size under 200KB
   - Consider using image compression tools

2. Consider using a web server:
   - Better performance
   - More accurate testing
   - Recommended for deployment

## Deployment

To deploy your portfolio:

1. **GitHub Pages** (free)
   - Push files to a GitHub repository
   - Enable Pages in repository settings

2. **Netlify** (free)
   - Connect your Git repository
   - Auto-deploy on push

3. **Traditional Hosting**
   - Upload files via FTP
   - Works with any web hosting provider

## License

This portfolio template is free to use and modify for personal use.

## Support

For issues or customization help:
- Ensure all files are in the same directory
- Check browser console for JavaScript errors (F12)
- Verify image path is correct
- Test on different browsers and devices

---

Built with HTML, CSS, and JavaScript
Last updated: 2026
