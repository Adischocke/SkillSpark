import "./globals.css";

export const metadata = {
  title: "SkillSpark",
  description: "Daily 5-min skills: Video → Example → Practice Game"
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
