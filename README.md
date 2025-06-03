# Portfolio Website

A clean, minimalist portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features smooth animations, responsive design, and modern web development practices.

## Features

- **Clean Design**: Minimalist approach with focus on content
- **Responsive**: Works perfectly on all devices
- **Smooth Animations**: Using Framer Motion for delightful interactions
- **Fast Performance**: Built with Next.js for optimal performance
- **TypeScript**: Type-safe development
- **Modern Stack**: Latest web technologies

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Heroicons
- **Deployment**: Vercel (recommended)

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to `http://localhost:3000`

## Project Structure

```
src/
├── app/                 # App Router (Next.js 13+)
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   ├── globals.css     # Global styles
│   └── api/            # API routes
├── components/         # React components
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── ProjectsSection.tsx
│   ├── WorkExperienceSection.tsx
│   ├── WritingsSection.tsx
│   └── ContactSection.tsx
├── lib/                # Utility functions
│   └── utils.ts
└── hooks/              # Custom React hooks
```

## Customization

### Personal Information
Update the following sections in the components:

1. **HeroSection.tsx**: Your name and introduction
2. **ProjectsSection.tsx**: Your projects and work
3. **WorkExperienceSection.tsx**: Your work experience
4. **WritingsSection.tsx**: Your blog posts or articles
5. **ContactSection.tsx**: Your contact information

### Styling
- Colors: Edit `tailwind.config.js` to change the color scheme
- Fonts: Update `layout.tsx` to change fonts
- Layout: Modify components to adjust spacing and layout

### Content
- Replace placeholder projects with your actual work
- Add your real contact information
- Update social media links
- Add your actual blog posts or articles

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Railway

## Performance Features

- **Image Optimization**: Next.js automatic image optimization
- **Font Optimization**: Google Fonts optimization
- **Code Splitting**: Automatic code splitting
- **SEO Optimized**: Meta tags and Open Graph
- **Accessibility**: WCAG compliant

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the [MIT License](LICENSE).
