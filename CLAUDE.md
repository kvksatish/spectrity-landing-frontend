# Spectrity Landing Page Frontend

## Project Overview
This is the landing page frontend for Spectrity, built with Next.js 15, TypeScript, and Tailwind CSS.

## Tech Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Linting**: ESLint
- **Package Manager**: npm

## Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## MCP Servers Configured
- **memory**: For persistent memory across sessions
- **contex7**: For context management
- **taskmaster**: For task management and tracking

## Project Structure
```
/
├── app/              # Next.js App Router directory
│   ├── layout.tsx    # Root layout
│   ├── page.tsx      # Home page
│   └── globals.css   # Global styles
├── public/           # Static assets
├── components/       # React components (to be created)
└── lib/             # Utility functions (to be created)
```

## Environment Variables
For contex7 MCP server, set:
- `CONTEX7_API_KEY`: Your Contex7 API key

## Notes
- Using Next.js App Router for modern React features
- Tailwind CSS is pre-configured
- TypeScript strict mode is enabled