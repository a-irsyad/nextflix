import Image from "next/image";
import { SignInCard } from "@/components/SignInCard";

const AuthPage = () => {
  return (
    <div className="relative h-full">
      {/* background image */}
      <Image
        className="absolute object-cover"
        src={"/hero.jpg"}
        alt="hero image"
        fill
      />
      <div className="absolute bg-black h-full w-full bg-opacity-100 sm:bg-opacity-50"></div>

      {/* contents */}
      <div className="relative h-full flex flex-col">
        {/* navigation */}
        <nav className="w-full px-12 py-5">
          <Image
            src={"/netflix.png"}
            alt="Netflix logo"
            width={128}
            height={34}
          />
        </nav>
        {/* sign in card */}
        <div className="flex-1 flex justify-center items-center">
          <SignInCard />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
