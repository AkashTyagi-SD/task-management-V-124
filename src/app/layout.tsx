import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Task Management App",
  description: "Manage your daily task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="dark:bg-boxdark-2 dark:text-bodydark">{children}</div>
      </body>
    </html>
  );
}
