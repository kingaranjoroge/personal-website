# Next.js Portfolio - Modern Single Page Application

A modern, responsive portfolio website built with Next.js 14+, TypeScript, Tailwind CSS, and shadcn/ui components.

## ✨ Features

- **Single Page Application** - All sections on one smooth-scrolling page
- **Dark/Light Theme** - Toggle between themes with persistent preference
- **Fully Responsive** - Mobile-first design that works on all devices
- **Modern UI Components** - Built with shadcn/ui for accessible, beautiful components
- **Smooth Animations** - Framer Motion animations for engaging user experience
- **Contact Form** - Functional contact form integrated with existing backend API
- **SEO Optimized** - Server-side rendering for better search engine visibility

## 🎨 Sections

1. **Hero** - Eye-catching introduction with your name and skills
2. **About** - Personal information and skill progress bars
3. **Services** - Showcase of your development services
4. **Portfolio** - Display of your projects with links
5. **Contact** - Contact information and functional form

## 🚀 Getting Started

### Prerequisites

- Node.js >= 20.9.0 (Current version: 20.8.0 needs update)
- npm or yarn

### Update Node.js First (Required)

Your current Node.js version (20.8.0) needs to be updated to >= 20.9.0:

**Option 1: Using Node Version Manager (nvm)**
```bash
nvm install 20.9.0
nvm use 20.9.0
```

**Option 2: Download from nodejs.org**
Visit [nodejs.org](https://nodejs.org) and download the latest LTS version

### Installation

1. Navigate to the project directory:
```bash
cd nextjs-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result

## 📁 Project Structure

```
nextjs-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with theme provider
│   │   ├── page.tsx            # Main page with all sections
│   │   └── globals.css         # Global styles and theme variables
│   ├── components/
│   │   ├── navigation.tsx      # Side navigation with smooth scrolling
│   │   ├── theme-provider.tsx  # Theme context provider
│   │   ├── theme-toggle.tsx    # Light/dark mode toggle button
│   │   ├── sections/
│   │   │   ├── hero-section.tsx
│   │   │   ├── about-section.tsx
│   │   │   ├── services-section.tsx
│   │   │   ├── portfolio-section.tsx
│   │   │   └── contact-section.tsx
│   │   └── ui/                 # shadcn/ui components
│   └── lib/
│       └── utils.ts            # Utility functions
├── public/                     # Static assets
└── package.json
```

## 🎯 Key Technologies

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible component library
- **Framer Motion** - Animation library
- **next-themes** - Theme management
- **React Icons** - Icon library
- **Axios** - HTTP client for API calls
- **React Toastify** - Toast notifications

## 🔧 Customization

### Updating Personal Information

Edit the constants in each section component in `src/components/sections/`

### Updating Projects

Edit the `projects` array in `src/components/sections/portfolio-section.tsx`

### Theme Colors

Edit theme colors in `src/app/globals.css` under the `:root` and `.dark` sections.

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy automatically

## 🔄 Migration from Old Portfolio

All functionality from your previous React portfolio has been preserved:

✅ All page sections (Home, About, Services, Portfolio, Contact)  
✅ Contact form with backend integration  
✅ Responsive navigation  
✅ Social media links  
✅ Skill progress bars  
✅ Project showcases

**New Features:**
- Dark/light theme toggle
- Smoother animations
- Better mobile experience
- Modern UI components
- Improved performance with SSR
- Better SEO

## 👤 Author

**Brian Njoroge**
- Website: [kingaranjoroge.netlify.app](https://kingaranjoroge.netlify.app/)
- GitHub: [@kingaranjoroge](https://github.com/kingaranjoroge)
- Email: briankingara4@gmail.com
