import type { Metadata } from "next";
import "./globals.css";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";

export const metadata: Metadata = {
    title: "Travel",
    description: "Travel app UI/UX for camping",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <Navbar />
            <main className="relative overflow-hidden">{children}</main>
            <Footer />
        </html>
    );
}
