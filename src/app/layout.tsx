import type { Metadata } from "next";
import { Providers } from "./Provider";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
        <div className="dark:bg-boxdark-2 dark:text-bodydark">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
