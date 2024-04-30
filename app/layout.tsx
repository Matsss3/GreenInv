import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["600"]
});

export const metadata: Metadata = {
  title: "Green Invitations",
  description: "Crea invitaciones personalizables a tu casamiento!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-white w-full border-b-2 lg:pb-12 mx-auto lg:px-[10rem] px-4 md:py-8 flex items-center justify-between py-4 fixed top-0">
          <Link href="/" className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl">
            GreenInv
          </Link>
          <nav className="hidden gap-12 lg:flex">
            <LoginButton>
              <Button size="lg" variant="outline">Log In</Button>
            </LoginButton>
            <Link href="/auth/register">
              <Button size="lg">Sign Up</Button>
            </Link>
          </nav>
        </header>
        <main className="h-full pt-10 md:pt-20 lg:pt-[10rem] mx-auto px-8 md:px-[10rem] bg-[#FAF1E4]">
          {children}
        </main>
      </body>
    </html>
  );
}
