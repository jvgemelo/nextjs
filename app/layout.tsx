import { montserrat } from './ui/invoices/fonts';
import './ui/global.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        Esto es parte del layout.
           {children}
           <footer className='py-10 flex justify-center items-center'> Hecho con amor por la gente de Vercel</footer>
      </body>
    </html>
  );
}
