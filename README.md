# My Portfolio Website

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Site-blueviolet?style=for-the-badge)](https://poushali.vercel.app/)
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![EmailJS](https://img.shields.io/badge/EmailJS-DD4B39?style=for-the-badge&logo=gmail&logoColor=white)](https://www.emailjs.com/)


A modern, animated portfolio website showcasing projects, skills, and experiences in AI and Machine Learning development. Built with React and featuring smooth animations, glassmorphism effects, and responsive design.

## Features

- **Smooth Scroll Progress Indicator** - Visual feedback as users navigate through sections
- **Animated Typewriter Effects** - Dynamic text animations for engaging content
- **Glassmorphism Design** - Modern UI with backdrop blur and gradient effects
- **Responsive Layout** - Optimized for desktop and mobile devices
- **Interactive Contact Form** - Integrated with EmailJS for direct communication
- **Project Showcase** - Featured projects with live demos and GitHub links
- **Dynamic Skills Filter** - Categorized skill display with interactive filtering
- **Experience Timeline** - Visual presentation of achievements and activities

## Tech Stack

- **React** - UI library
- **Vite** - Build tool and development server
- **EmailJS** - Email service integration
- **CSS3** - Advanced styling with animations and gradients

## Project Structure

```
src/
├── assets/              # Images and static files
├── Components/          
│   ├── elements/        # Data files for projects, skills, experiences
│   ├── about.jsx        # About section component
│   ├── contact.jsx      # Contact form with EmailJS
│   ├── experiences.jsx  # Experience cards display
│   ├── intro.jsx        # Landing/hero section
│   ├── projects.jsx     # Featured projects showcase
│   ├── skills.jsx       # Skills grid with filtering
│   └── Typewriter.jsx   # Typewriter animation component
├── Css/                 # Component-specific stylesheets
│   ├── about.css
│   ├── contact.css
│   ├── experiences.css
│   ├── intro.css
│   ├── projects.css
│   └── skills.css
├── App.css              # Global styles and scroll progress
├── App.jsx              # Main app component
└── main.jsx             # Entry point
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Poushali-02/portfolio
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with your EmailJS credentials:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Start the development server:
```bash
npm run dev
```

## Configuration

### EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template with the following variables:
   - `{{from_name}}` - Sender's name
   - `{{reply_to}}` - Sender's email
   - `{{message}}` - Message content
4. Copy your Service ID, Template ID, and Public Key to the `.env` file

### Customizing Content

#### Projects
Edit `src/Components/elements/allProjects.js`:
```javascript
{
  title: "Project Name",
  description: "Project description",
  technologies: ["Tech1", "Tech2"],
  link: "https://live-demo-url.com",
  github: "https://github.com/username/repo"
}
```

#### Skills
Edit `src/Components/elements/skills.js`:
```javascript
{
  category: "Tech",
  subCategory: "language",
  skillname: "Python",
  requirement: ["Backend", "ML"],
  level: "Intermediate",
  score: 70
}
```

#### Experiences
Edit `src/Components/elements/all_experiences.jsx`:
```javascript
{
  title: "Experience Title",
  description: "Description text or JSX",
  images: [imageImport1, imageImport2],
  type: "Activity" // or "Achievement", "Open Source"
}
```

## Key Features Explained

### Scroll Progress Indicator
A fixed vertical bar on the right side that fills as the user scrolls, providing visual feedback of page position.

### Animation System
Components use CSS keyframe animations with staggered delays for smooth entrance effects:
- Fade up animations
- Scale transformations
- Opacity transitions

### Glassmorphism Cards
Cards feature:
- Backdrop blur effects
- Radial gradients
- Hover animations with conic gradient borders
- Shadow depth on hover

### Skills Filtering
Dynamic filtering system allows users to view skills by category (All, Backend, Machine Learning, Frontend, etc.).

## Responsive Design

The portfolio adapts to different screen sizes:
- **Desktop** (>900px): Multi-column layouts, larger text
- **Mobile** (<900px): Single column, optimized touch targets

## Performance Optimizations

- Lazy loading of animations
- Optimized image assets
- Minimal re-renders with React hooks
- CSS transforms for smooth animations
- Backdrop filter for performance-friendly blur effects

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Building for Production

```bash
npm run build
```

The optimized build will be in the `dist/` directory, ready for deployment.

## Deployment

This project has been deployed to:
- **Vercel** - `vercel deploy`

## Customization Tips

1. **Colors**: Adjust gradient colors in CSS files for a different theme
2. **Fonts**: Change font families in CSS (currently uses Merriweather and Poppins)
3. **Animations**: Modify animation delays and durations in CSS keyframes
4. **Layout**: Adjust grid columns and spacing in respective CSS files

## License

This project is open source and available under the MIT License.

## Contact

For questions or collaboration opportunities, reach out through the contact form on the website or:
- Email: poushalibhattacharyya02@gmail.com
- LinkedIn: [poushali020106](https://linkedin.com/in/poushali020106)
- GitHub: [Poushali-02](https://github.com/Poushali-02)

## Acknowledgments

- EmailJS for email integration
- React team for the amazing framework
- Vite for blazing fast development experience