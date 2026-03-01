import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `${site.name} — ${site.city}`,
  description: "Premium grooming: fades, haircuts and beard services. Book online.",
};

export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <Header />
        <div className="min-h-[70vh]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}