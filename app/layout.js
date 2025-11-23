export const metadata = {
  metadataBase: new URL('https://agentic-557569bd.vercel.app'),
  title: {
    default: 'Iceem.tn ? Engineering, Automation & Maintenance',
    template: '%s | Iceem.tn'
  },
  description:
    'Iceem delivers reliable electrical engineering, automation and industrial maintenance solutions. Quality, safety and performance-first.',
  openGraph: {
    title: 'Iceem.tn ? Engineering, Automation & Maintenance',
    description:
      'Reliable engineering and automation services. Designed for safety, performance and business continuity.',
    url: 'https://agentic-557569bd.vercel.app',
    siteName: 'Iceem',
    images: [
      { url: '/og.jpg', width: 1200, height: 630, alt: 'Iceem' }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Iceem.tn ? Engineering, Automation & Maintenance',
    description:
      'Reliable engineering and automation services. Designed for safety, performance and business continuity.',
    images: ['/og.jpg']
  }
};

import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-[Inter] antialiased bg-gradient-to-b from-slate-50 to-white text-slate-800">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:bg-white focus:text-slate-900 focus:px-4 focus:py-2 focus:rounded-md focus:shadow">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
