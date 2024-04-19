import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { Navbar } from "./_components/navbar";

const ProtectedLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <div className="h-full bg-sky-100">
        <Navbar/>
        <div className="flex h-[80vh] flex-col items-center justify-center">
          {children}
        </div>
      </div>
    </SessionProvider>
  );
}

export default ProtectedLayout;