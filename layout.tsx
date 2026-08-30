import type { Metadata } from "next";
import "./globals.css";
import { MotionEnhancer } from "@/components/motion-enhancer";

export const metadata: Metadata = {
  title: "王语柔 | Industrial Designer",
  description: "王语柔的工业设计与硬件产品作品集，涵盖物理 AI 数据采集硬件、消费电子、CMF 与产品体验设计。",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" data-lang="zh">
      <body className="antialiased"><MotionEnhancer />{children}</body>
    </html>
  );
}
