"use client";

import {
  SignIn,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadThing";

function TopNav() {
  const router = useRouter();       // Works only on the client side thats why we use "use client"

  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <div>galleria.</div>
      <div className="flex flex-row">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={() => {
              router.refresh();
            }}
          />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}

export default TopNav;
