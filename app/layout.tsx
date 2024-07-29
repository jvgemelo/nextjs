import { montserrat } from "./ui/invoices/fonts";
import "./ui/global.css";
import Chakra from "./providers/ChakraProvider"; // Ajusta la ruta según la estructura de tu proyecto

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <Chakra>{children}</Chakra>
        <footer className="py-10 flex justify-center items-center">
          Hecho con amor por la gente de Siali
        </footer>
      </body>
    </html>
  );
}
