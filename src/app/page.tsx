import ThemeSwitch from "@/components/ThemeSwitch";
import NavBar from "@/components/nav/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center gap-4">
        <ThemeSwitch />
        <NavBar />
      </div>
      <h1>Coming Soon...</h1>
    </main>
  );
}
