import { auth, signOut } from '@/auth';

const Dashboard = async () => {
  const session = await auth();

  const sessionString = JSON.stringify(session);
  const sessionObject = JSON.parse(sessionString);
  return (
    <div>
      <h1>{sessionObject.user.name}</h1>
      <h2>{sessionObject.user.email}</h2>
      <hr></hr>
      {sessionString}
      <form action={async () => {
        "use server";

        await signOut();
      }}>
        <button type="submit">Sign Out</button>
      </form>
    </div>
  );
};

export default Dashboard;