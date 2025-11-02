# Portfolio Sample Project

A modern, fully responsive portfolio website built with Next.js 14+, TypeScript, Tailwind CSS, and Framer Motion.

**Author:** Shazad Arshad  
**Note:** This is a sample project showcasing modern web development practices.

## 🚀 Features

- **Modern Design**: Ultra-modern glassmorphism design with 2025 design trends
- **Dark/Light Mode**: Toggleable theme with localStorage persistence
- **Fully Responsive**: Works seamlessly on all device sizes
- **Smooth Animations**: Powered by Framer Motion for delightful micro-interactions
- **Typewriter Effect**: Dynamic role display with animated text
- **Particle Effects**: Interactive particle background animations
- **SEO Optimized**: Complete metadata and Open Graph tags
- **Accessible**: Semantic HTML and ARIA labels throughout
- **Performance**: Optimized images with Next.js Image component and lazy loading

## 📋 Sections

1. **Hero Section**: Full-screen section with animated gradient background, typewriter effect, and CTAs
2. **About Section**: Profile information with bio, skill tags, and achievements
3. **Skills Section**: Animated grid showcasing technical skills with progress indicators
4. **Projects Section**: Grid layout with project cards and modal popups
5. **Testimonials**: Carousel slider with client feedback
6. **Contact Section**: Functional contact form with validation and toast notifications
7. **Footer**: Minimal footer with social links and scroll-to-top button

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Poppins (via @next/font/google)
- **Notifications**: React Hot Toast

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/shazadarshad/portfolio-sample-project.git
cd portfolio-sample-project
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
portfolio-sample/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Hero.tsx            # Hero section with typewriter
│   ├── About.tsx            # About section
│   ├── Skills.tsx           # Skills section
│   ├── Projects.tsx         # Projects section
│   ├── Testimonials.tsx     # Testimonials carousel
│   ├── Contact.tsx         # Contact form
│   ├── Footer.tsx           # Footer component
│   ├── ThemeToggle.tsx      # Dark mode toggle
│   ├── ThemeProvider.tsx    # Theme context provider
│   ├── Preloader.tsx        # Preloader animation
│   ├── Typewriter.tsx       # Typewriter effect component
│   ├── Particles.tsx        # Particle background effect
│   ├── SocialLinks.tsx     # Social media links
│   └── StatusIndicator.tsx # Status indicator component
├── utils/
│   ├── constants.ts         # Project constants and data
│   └── helpers.ts           # Helper functions
├── lib/
│   └── animations.ts       # Framer Motion animation variants
└── public/                 # Static assets
```

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:

- `neon-blue`: #00FFFF
- `neon-purple`: #9A4DFF
- `dark-base`: #0E0E10
- `dark-gray`: #1A1A1A

### Content

Update project information in `utils/constants.ts`:

- `projects`: Array of project objects
- `skills`: Array of skill objects
- `testimonials`: Array of testimonial objects
- `socialLinks`: Social media links

### Images

Replace placeholder images with your own:

- Project images in `utils/constants.ts`
- Testimonial images in `utils/constants.ts`

## ✨ Key Features Explained

### Glassmorphism Effect

Implemented using Tailwind's `backdrop-blur-xl` with semi-transparent backgrounds for a modern glass-like appearance.

### Typewriter Animation

Dynamic text animation that cycles through different roles/titles with a typing effect.

### Particle Background

Canvas-based particle system that creates an interactive, animated background effect.

### Smooth Scroll

All anchor links use smooth scroll behavior for seamless navigation between sections.

### Dark Mode

Theme is persisted in localStorage and respects system preferences on first visit.

### Responsive Design

Optimized for all screen sizes with mobile-first approach and progressive enhancement.

## 📝 License

This is a sample project created by Shazad Arshad for educational and portfolio purposes.

## 👤 Author

**Shazad Arshad**

- GitHub: [@shazadarshad](https://github.com/shazadarshad)
- Instagram: [@shazad.ar](https://instagram.com/shazad.ar)
- Brand Instagram: [@zenvadigitals](https://instagram.com/zenvadigitals)
- Portfolio: [portfolio-sample-project-one.vercel.app](https://portfolio-sample-project-one.vercel.app)

---

**Note:** This is a sample/demo project showcasing modern web development techniques and design patterns. Feel free to use it as inspiration or a starting point for your own portfolio.
