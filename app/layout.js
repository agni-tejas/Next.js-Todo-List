import "@/app/_styles/globals.css";
import { Rubik } from "next/font/google";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata = {
  title: "To-Do List",
  description: "Daily To-Do List for personalized goals",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${rubik.className} antialiased flex justify-center items-center min-h-screen bg-backgroundColor text-textColor`}
      >
        {children}
      </body>
    </html>
  );
}
