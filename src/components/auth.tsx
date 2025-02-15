import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export const Auth = () => {
  return (
    <div>
      <SignedOut>
        <SignInButton>
          <Button className="group relative inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-8 text-lg font-semibold text-white transition-all duration-200 ease-out hover:from-purple-500 hover:to-blue-500 hover:shadow-lg hover:shadow-purple-500/30">
            Sign In
            <ArrowRight className="ml-2 h-4 w-4 transition-all duration-300 group-hover:ml-3 group-hover:scale-110" />
          </Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton appearance={{
          elements: {
            userButtonAvatarBox: "h-10 w-10",
            userButtonPopoverCard: "rounded-xl shadow-lg"
          }
        }} />
      </SignedIn>
    </div>
  );
};