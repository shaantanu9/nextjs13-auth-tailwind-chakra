"use client";
import { Button } from "@chakra-ui/react";
import { signIn, signOut, useSession } from "next-auth/react";
export default function Component({ children }) {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <Button onClick={signOut}>Sign out</Button>
        {children}
      </>
    );
  }
  return <button onClick={signIn}>Sign in</button>;
}
