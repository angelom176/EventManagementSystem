import Link from "next/link";
import LogoutButton from "./components/LogoutButton";
import { getSession } from "@/lib/auth";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "EventHub",
  description: "Discover, create and manage events",
};

export default async function RootLayout({ children }) {
  const session = await getSession();
  const role = session?.role;

  return (
    <html lang="en" className="h-full">
      <body
        className={`${montserrat.className} min-h-full flex flex-col bg-[#0b132b] text-white`}
      >
        <header className="bg-[#1c2541] shadow-md">
          <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

            <Link
              href="/"
              className="text-[#ff9f1c] font-bold text-xl tracking-wide"
            >
              EventHub
            </Link>

            <div className="flex items-center gap-6 text-sm font-medium text-white">

              {role === "attendee" && (
                <Link
                  href="/events"
                  className="hover:text-[#ff9f1c] transition-colors"
                >
                  Events
                </Link>
              )}

              {session && (
                <Link
                  href="/dashboard"
                  className="hover:text-[#ff9f1c] transition-colors"
                >
                  Dashboard
                </Link>
              )}

              {role === "attendee" && (
                <Link
                  href="/bookings"
                  className="hover:text-[#ff9f1c] transition-colors"
                >
                  My Bookings
                </Link>
              )}

              {(role === "organiser" || role === "admin") && (
                <Link
                  href="/events"
                  className="hover:text-[#ff9f1c] transition-colors"
                >
                  Manage Events
                </Link>
              )}

              {role === "admin" && (
                <Link
                  href="/admin"
                  className="hover:text-[#ff9f1c] transition-colors"
                >
                  Admin
                </Link>
              )}

              {session && (
                <span className="text-xs uppercase tracking-widest bg-white/10 px-3 py-1 rounded">
                  {role}
                </span>
              )}

              {!session ? (
                <>
                  <Link
                    href="/login"
                    className="hover:text-[#ff9f1c] transition-colors"
                  >
                    Login
                  </Link>

                  <Link
                    href="/register"
                    className="bg-[#ff9f1c] text-[#0b132b] px-4 py-2 rounded-md hover:bg-[#ffbf69] transition-colors"
                  >
                    Register
                  </Link>
                </>
              ) : (
                <LogoutButton />
              )}

            </div>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}