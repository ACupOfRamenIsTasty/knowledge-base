import type { Metadata } from "next"; // For defining static metadata (App router)
import { Open_Sans } from "next/font/google"; // Application font
import "./globals.css";

// Configure font
const openSans = Open_Sans({
  variable: "--font-open-sans",
})

// Default metadata
export const metadata: Metadata = {
  title: "Knowledge Base",
  description: "The single source of truth for all knowledge for your organization. Please add what you learned before you leave.",
};

// Root layout wraps every page in the app (similar to index.html)
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${openSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}