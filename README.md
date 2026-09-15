# Utkarsh Singh - AI/ML Developer Portfolio

A premium, modern, highly interactive personal portfolio website built with React, Vite, Tailwind CSS, and Three.js.

## Features

- **Hero Section**: 3D animated sphere with typing text animation
- **About Section**: Profile card with statistics and journey timeline
- **Skills Section**: Categorized skill cards with hover effects
- **Projects Section**: Interactive project cards with expandable modals
- **Experience Section**: Timeline of academic and project experience
- **Education Section**: Educational background with relevant coursework
- **GitHub Section**: Repository cards with GitHub integration
- **Contact Section**: Contact form with validation
- **AI Chat Assistant**: Floating AI chatbot for portfolio queries
- **Developer Terminal**: Interactive terminal to explore the portfolio
- **Workflow Section**: Development process visualization
- **Custom Cursor**: Subtle custom cursor for desktop
- **Responsive Design**: Fully responsive across all devices
- **Dark Theme**: Modern dark futuristic design with glassmorphism
- **Animations**: Smooth animations using Framer Motion
- **3D Elements**: Interactive 3D components using Three.js

## Tech Stack

- **Framework**: React + Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: Three.js / React Three Fiber
- **Icons**: Lucide React
- **Fonts**: Inter, Space Grotesk

## Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will automatically detect the Vite configuration
4. Deploy

### Deploy to Netlify

1. Run `npm run build`
2. Upload the `dist` folder to Netlify
3. Or connect your GitHub repository for automatic deployments

### Deploy to GitHub Pages

1. Install `gh-pages`:

```bash
npm install -D gh-pages
```

2. Add deploy script to `package.json`:

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Deploy:

```bash
npm run deploy
```

## Customization

### Update Personal Information

Edit the data files in `src/data/`:

- `profile.js` - Personal information, social links, statistics
- `skills.js` - Technical skills and categories
- `projects.js` - Project details and descriptions

### Update Education Details

Edit `src/components/Education/index.jsx` to add your university, CGPA, and graduation year.

### Add Resume

Place your resume PDF in the `public` folder as `resume.pdf` or update the path in `src/data/profile.js`.

### Customize Colors

Edit the color configuration in `tailwind.config.js`:

```javascript
colors: {
  background: '#0a0a0f',
  card: '#12121a',
  border: '#1e1e2e',
  primary: '#6366f1',
  secondary: '#8b5cf6',
  accent: '#06b6d4',
}
```

## Project Structure

```
src/
├── components/
│   ├── Navbar/          # Navigation bar with smooth scrolling
│   ├── Hero/            # Hero section with 3D animation
│   ├── About/           # About section with stats
│   ├── Skills/          # Skills section with categories
│   ├── Projects/        # Projects section with modals
│   ├── Experience/      # Experience timeline
│   ├── Education/       # Education section
│   ├── Github/          # GitHub repository cards
│   ├── Contact/         # Contact form
│   ├── Footer/          # Footer component
│   ├── AIChat/          # AI chat assistant
│   ├── Terminal/        # Developer terminal
│   ├── Workflow/        # Development workflow
│   ├── Background/      # 3D background animation
│   └── Cursor/          # Custom cursor
├── data/
│   ├── profile.js       # Personal information
│   ├── skills.js        # Skills data
│   └── projects.js      # Projects data
├── assets/              # Static assets
├── App.jsx              # Main app component
├── main.jsx             # Entry point
└── index.css            # Global styles
```

## Performance Optimization

- Lazy loading of heavy components
- Optimized 3D animations
- Efficient re-renders with React
- Code splitting with Vite
- Optimized images and fonts

## Accessibility

- Semantic HTML
- Keyboard navigation
- ARIA labels
- Focus states
- Reduced motion support
- Sufficient color contrast

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal use.

## Author

**Utkarsh Singh**
- GitHub: [@meutkarshsingh](https://github.com/meutkarshsingh)
- LinkedIn: [utkarsh-singh](https://www.linkedin.com/in/utkarsh-singh)
- Email: [meutkarsh2004singh@gmail.com](mailto:meutkarsh2004singh@gmail.com)
