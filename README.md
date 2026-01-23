# NProfile

A modern, responsive portfolio website for DevOps Engineers, built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

- 🌙 **Dark/Light Mode** - Theme toggle with persistence
- 📱 **Fully Responsive** - Optimized for all screen sizes
- ⚡ **Fast Performance** - Built with Vite for optimal speed
- 🎨 **Smooth Animations** - Framer Motion for delightful interactions
- ✉️ **Contact Form** - EmailJS integration for direct contact
- ♿ **Accessible** - WCAG compliant with keyboard navigation
- 🎯 **Scrollspy Navigation** - Active section highlighting

## Tech Stack

- **Framework:** React 18.3
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS 3.4
- **Animations:** Framer Motion 11.15
- **Email:** EmailJS 4.4

## Prerequisites

- Node.js 18+
- npm or yarn or pnpm

## Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd NProfile

# Install dependencies
npm install
```

## Environment Variables

Create a `.env` file in the root directory:

```env
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
```

### Setting up EmailJS

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a new email service
3. Create an email template with variables: `{{user_name}}`, `{{user_email}}`, `{{message}}`
4. Add your credentials to `.env`

## Development

```bash
# Start dev server (http://localhost:3000)
npm run dev

# Run linter
npm run lint

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
NProfile/
├── public/                 # Static assets
│   └── terminal.svg       # Favicon
├── src/
│   ├── assets/            # Images & CV
│   │   ├── cv/
│   │   └── images/
│   ├── components/
│   │   ├── layout/        # Header, Footer
│   │   ├── sections/      # Page sections
│   │   └── ui/            # Reusable UI components
│   ├── contexts/          # React contexts
│   ├── hooks/             # Custom hooks
│   ├── lib/               # Utilities & constants
│   └── styles/            # Global styles
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Customization

### Personal Information

Edit `src/lib/constants.js`:

```javascript
export const NAV_SECTIONS = [...];
export const SOCIAL_LINKS = [...];
export const SKILL_CATEGORIES = [...];
export const CONTACT_EMAIL = 'your@email.com';
```

### Resume

Place your CV PDF at: `src/assets/cv/your-name.pdf`

Update the import in `src/lib/constants.js`:
```javascript
import cvFile from '../assets/cv/your-name.pdf';
export const RESUME_URL = cvFile;
```

### Projects

Edit `src/components/sections/Projects.jsx` to update your project data.

### Experience

Edit `src/components/sections/Experience.jsx` to update your work history.

### Education

Edit `src/components/sections/Education.jsx` to update your education.

## Deployment

### Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Build command
npm run build

# Publish directory
dist
```

### GitHub Pages

```bash
# Build
npm run build

# Deploy dist folder to gh-pages branch
```

## License

MIT

## Author

**Nil Nguyen** - [GitHub](https://github.com/nilnguyen2k)
