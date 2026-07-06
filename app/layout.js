import './globals.css';
import Link from 'next/link'; // පිටු අතර මාරු වෙන්න මේක ඕනේ කරනවා

export const metadata = {
  title: 'SK SOLUTION',
  description: 'Modern Web Development Agency',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-900 text-slate-100 antialiased">
        
        {/* Navigation Bar එක */}
        <nav className="flex items-center justify-between px-8 py-5 border-b border-slate-800 bg-slate-950/50 backdrop-blur-md sticky top-0">
          <div className="text-xl font-bold text-amber-500 tracking-wider">
            SK SOLUTION
          </div>
          <div className="flex gap-6 text-sm font-medium text-slate-300">
            <Link href="/" className="hover:text-amber-500 transition-colors">Home</Link>
            <Link href="/about" className="hover:text-amber-500 transition-colors">About</Link>
            <Link href="/contact" className="hover:text-amber-500 transition-colors">Contact</Link>
          </div>
        </nav>

        {/* පිටුවේ අන්තර්ගතය පෙනෙන තැන */}
        {children}

      </body>
    </html>
  );
}