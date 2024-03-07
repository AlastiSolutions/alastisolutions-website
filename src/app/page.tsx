import ThemeSwitch from "@/components/ThemeSwitch";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ThemeSwitch />
      <h1>Coming Soon...</h1>
    </main>
  );
}
