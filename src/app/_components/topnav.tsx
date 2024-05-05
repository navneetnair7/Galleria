import { SignIn, SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";

function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <div>galleria.</div>
      <div>
        <SignedOut>
            <SignInButton />
        </SignedOut>
        <SignedIn>
            <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}

export default TopNav;