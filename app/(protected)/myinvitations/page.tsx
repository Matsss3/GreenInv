"use client";

import { useCurrentUser } from '@/hooks/useCurrentUser';

const MyInvitations = () => {
  const user = useCurrentUser();

  return (
    <div>
      {JSON.stringify(user)}
    </div>
  );
};

export default MyInvitations;