import "../styles/globals.css";
import Providers from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <h1 style={{ padding: 20 }}>My Store</h1>
        <Providers />
        {children}
      </body>
    </html>
  );
}
