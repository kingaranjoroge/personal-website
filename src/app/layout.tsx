import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";

const manrope = Manrope({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-manrope",
});

const cormorantGaramond = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Brian Njoroge | Premium Full-Stack Web Developer",
  description:
    "A refined portfolio website for Brian Njoroge, a full-stack developer building premium websites, product experiences, and modern web applications.",
  keywords: [
    "Brian Njoroge",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "Web Design",
    "Product Development",
  ],
  openGraph: {
    title: "Brian Njoroge | Premium Full-Stack Web Developer",
    description:
      "Premium web experiences for ambitious brands and organizations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${manrope.variable} ${cormorantGaramond.variable} min-h-screen antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
