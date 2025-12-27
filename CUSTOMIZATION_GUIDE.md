# Quick Customization Guide

## 🎨 Customizing Your Portfolio

### 1. Change Personal Information

**Name & Title** - Edit `src/components/sections/hero-section.tsx`:
```tsx
<h1>Your Name Here</h1>
<h3>Your Title Here</h3>
```

**About Section** - Edit `src/components/sections/about-section.tsx`:
- Update bio text
- Modify `personalInfo` array for contact details
- Update `skills` array with your skill levels

### 2. Update Projects

Edit `src/components/sections/portfolio-section.tsx`:

```tsx
const projects = [
  {
    title: 'Your Project Name',
    description: 'Project description here',
    url: 'https://your-project-url.com',
    tags: ['React', 'Node.js', 'MongoDB']
  },
  // Add more projects...
]
```

### 3. Modify Services

Edit `src/components/sections/services-section.tsx`:

```tsx
const services = [
  {
    icon: FaYourIcon,  // Import from react-icons
    title: 'Service Name',
    description: 'Service description...'
  },
  // Add more services...
]
```

### 4. Update Contact Information

Edit `src/components/sections/contact-section.tsx`:
- Change location, email, phone number
- Modify form fields if needed
- Update backend API URLs if using different endpoints

### 5. Change Social Links

Edit `src/components/navigation.tsx`:

```tsx
const socialLinks = [
  { name: 'Twitter', icon: FaTwitter, href: 'your-twitter-url' },
  // Update URLs for all social links
]
```

### 6. Customize Theme Colors

Edit `src/app/globals.css`:

**Light Theme Colors** (under `:root`):
```css
:root {
  --primary: oklch(0.205 0 0);      /* Main color */
  --secondary: oklch(0.97 0 0);     /* Secondary color */
  --accent: oklch(0.97 0 0);        /* Accent color */
  /* ...modify other colors */
}
```

**Dark Theme Colors** (under `.dark`):
```css
.dark {
  --primary: oklch(0.922 0 0);      /* Main color */
  --secondary: oklch(0.269 0 0);    /* Secondary color */
  /* ...modify other colors */
}
```

### 7. Change Fonts

Edit `src/app/layout.tsx`:

```tsx
import { YourFont } from "next/font/google";

const yourFont = YourFont({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-your-font",
});
```

### 8. Add More Sections

1. Create new section file in `src/components/sections/`
2. Import and add to `src/app/page.tsx`:

```tsx
import { YourSection } from "@/components/sections/your-section";

// In the main component:
<YourSection />
```

3. Add navigation link in `src/components/navigation.tsx`:

```tsx
const navItems = [
  // ...existing items
  { name: 'Your Section', icon: FaIcon, href: '#your-section' },
]
```

### 9. Modify Animations

Edit animation settings in section files:

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}    // Start state
  whileInView={{ opacity: 1, y: 0 }}  // End state
  transition={{ duration: 0.5 }}      // Animation speed
>
```

### 10. Change Backend API

Edit `src/components/sections/contact-section.tsx`:

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  // Change these URLs to your API endpoints
  await axios.post('YOUR_EMAIL_API_URL', formData)
  await axios.post('YOUR_USERS_API_URL', formData)
}
```

## 🎯 Common Customizations

### Remove a Section

1. Comment out or delete the import in `src/app/page.tsx`
2. Comment out the component in the main render
3. Remove nav link from `src/components/navigation.tsx`

### Change Section Order

In `src/app/page.tsx`, reorder the components:

```tsx
<main className="lg:ml-64">
  <HeroSection />
  <PortfolioSection />  // Moved up
  <AboutSection />      // Moved down
  <ServicesSection />
  <ContactSection />
</main>
```

### Add Images/Photos

1. Add images to `public/` folder
2. Import in component:

```tsx
import Image from 'next/image'

<Image 
  src="/your-image.jpg" 
  alt="Description"
  width={500}
  height={500}
/>
```

### Change Navigation Style

Edit `src/components/navigation.tsx`:
- Modify widths, colors, positioning
- Change from fixed to sticky
- Adjust mobile breakpoints

### Add Meta Tags for SEO

Edit `src/app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  title: "Your Name - Your Title",
  description: "Your custom description",
  keywords: ["keyword1", "keyword2"],
  openGraph: {
    title: "Your Name",
    description: "Description",
    images: ["/og-image.jpg"],
  },
}
```

## 🔧 Advanced Customization

### Add Environment Variables

1. Create `.env.local`:
```
NEXT_PUBLIC_API_URL=your-api-url
NEXT_PUBLIC_ANALYTICS_ID=your-id
```

2. Use in components:
```tsx
const apiUrl = process.env.NEXT_PUBLIC_API_URL
```

### Add Google Analytics

1. Install package:
```bash
npm install @next/third-parties
```

2. Add to layout.tsx

### Add Custom Domain

1. Deploy to Vercel/Netlify
2. Add custom domain in platform settings
3. Update DNS records

## 📝 Quick Tips

- Test changes in development mode: `npm run dev`
- Build before deploying: `npm run build`
- Check for errors: `npm run lint`
- All colors use OKLCH format for better color consistency
- Use the theme toggle to test both light and dark modes
- Mobile menu opens from left side - test on mobile devices
- Contact form requires backend API to be running

## 🚀 Performance Tips

- Optimize images with Next.js Image component
- Keep dependencies updated
- Use code splitting for large sections
- Enable caching in production
- Consider adding loading states for API calls

## 🎨 Design Resources

**Icons:**
- React Icons: https://react-icons.github.io/react-icons/
- Lucide Icons: https://lucide.dev/

**Colors:**
- shadcn/ui themes: https://ui.shadcn.com/themes
- Color converter: https://oklch.com/

**Fonts:**
- Google Fonts: https://fonts.google.com/

**Components:**
- shadcn/ui: https://ui.shadcn.com/
- Add more with: `npx shadcn@latest add [component]`

## ⚡ Need Help?

- Next.js Docs: https://nextjs.org/docs
- Tailwind Docs: https://tailwindcss.com/docs
- shadcn/ui Docs: https://ui.shadcn.com/docs
- Framer Motion: https://www.framer.com/motion/

Happy customizing! 🎉
