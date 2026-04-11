import "./globals.css";

export const metadata = {
  title: "Ryedummy | Company Profile",
  description: "Static company profile satu halaman untuk Ryedummy.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
