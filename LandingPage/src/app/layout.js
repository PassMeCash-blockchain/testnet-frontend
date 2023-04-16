import "./globals.css";

export const metadata = {
  title: "Pass Me Cash",
  description: "Access cash at hand speedily via your crypto or cash order.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
