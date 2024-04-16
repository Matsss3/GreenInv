import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { Navbar } from "./_components/navbar";

const ProtectedLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <div className="h-full bg-sky-100">
        <Navbar/>
        {children}
      </div>
    </SessionProvider>
  );
}

export default ProtectedLayout;