import type { Metadata } from "next";

import "./globals.css";
import Site from "@/components/Site";

export const metadata: Metadata = {
  title: "Aviral Verma — Full Stack Developer | Java DSA",
  description: "Portfolio of Aviral Verma, a B.Tech Computer Science & Engineering student building full-stack web applications and Java applications.",
  openGraph: { title: "Aviral Verma — Full Stack Developer", description: "Full Stack Developer | Java DSA | Problem Solver", type: "website" }
};

export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body className="noise">{children}</body></html>; }
