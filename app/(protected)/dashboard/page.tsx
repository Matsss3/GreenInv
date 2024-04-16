"use client";

import { useCurrentUser } from '@/hooks/useCurrentUser';

const Dashboard = () => {
  const user = useCurrentUser();

  return (
    <div>
      {JSON.stringify(user)}
    </div>
  );
};

export default Dashboard;