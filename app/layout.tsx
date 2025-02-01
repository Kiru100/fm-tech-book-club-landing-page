import type { Metadata } from "next";
import { Inter, Martian_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
	variable: "--font-inter",
  	subsets: ["latin"],
});

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tech Book Club",
  description: "Join the ultimate tech book club.",
};

export default function RootLayout({
  	children,
}: Readonly<{
  	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${martianMono.variable} ${inter.variable} antialiased`} >
				{children}
			</body>
		</html>
	);
}
