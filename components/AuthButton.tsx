"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const AuthButton = () => {
  return (
    <>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton>
          <button className="btn-signin">Sign In</button>
        </SignInButton>
      </SignedOut>
    </>
  );
};
export default AuthButton;
