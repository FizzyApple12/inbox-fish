import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* <Button>Click me</Button> */}
      <ThemeToggle />
    </div>
  );
}
