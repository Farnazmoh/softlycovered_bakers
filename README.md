# Artisan Bakery Website

A premium bakery website built with Next.js 15, TypeScript, and Tailwind CSS. Ready for deployment on Vercel.

## Features

- 🎨 **Premium Design** - Warm color scheme with brown, cream, and gold accents
- 📱 **Responsive Layout** - Optimized for all devices
- ⚡ **Fast Performance** - Built with Next.js 15 and App Router
- 🎯 **SEO Optimized** - Meta tags and semantic HTML
- 💅 **Tailwind CSS** - Utility-first styling with custom theme

## Sections

- **Hero/Landing** - Eye-catching introduction with call-to-action
- **Featured Products** - Showcase your best bakery items
- **About Us** - Share your bakery's story
- **Menu Gallery** - Display full product categories
- **Contact** - Location, hours, and contact information

## Getting Started

### Prerequisites

- Node.js 18+ (installed via nvm)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment to Vercel

### Quick Deploy

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Click "Deploy"

### Using Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Colors

Edit the color theme in `tailwind.config.ts`:

```typescript
colors: {
  cream: { /* your cream shades */ },
  brown: { /* your brown shades */ },
  gold: { /* your gold shades */ }
}
```

### Content

Edit the main content in `app/page.tsx`:
- Update bakery name, description, and products
- Add your own images (place in `/public` folder)
- Modify sections to match your needs

### Fonts

Update fonts in `tailwind.config.ts`:

```typescript
fontFamily: {
  serif: ['Your Serif Font', 'serif'],
  sans: ['Your Sans Font', 'sans-serif'],
}
```

## Project Structure

```
bakeryapp/
├── app/
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── public/               # Static assets
├── .github/
│   └── copilot-instructions.md
├── next.config.ts        # Next.js configuration
├── tailwind.config.ts    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies
```

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## Performance

- ✅ Server-side rendering
- ✅ Automatic code splitting
- ✅ Optimized images (when using Next.js Image component)
- ✅ Fast page loads

## Support

For issues or questions, visit the [Next.js documentation](https://nextjs.org/docs).

## License

MIT License - feel free to use for your bakery!
