import Image from "next/image";
import AuthBG from "@/assets/img/auth-bg.svg";
import ModeToggle from "@/components/mode-toggle";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative grid h-screen w-full grid-cols-2 overflow-hidden">
      <div className="absolute top-5 right-5 z-1">
        <ModeToggle />
      </div>
      <div className="col-span-1 w-full relative">
        <Image
          src={AuthBG}
          alt="auth-bg-image"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="col-span-1 h-screen w-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}
