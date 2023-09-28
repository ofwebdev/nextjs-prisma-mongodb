import { authOptions } from "./api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <h1 className="text-2xl">
        Hello {session && <span>{session.user!.name}</span>}
      </h1>
    </main>
  );
}
