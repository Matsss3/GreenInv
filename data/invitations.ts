import { db } from "@/lib/db";

export const getInvitationsByUserId = async (userId: string | undefined) => {
  try {
    const invitations = await db.userInv.findMany({
      where: {
        userId
      }
    });

    return invitations;
  } catch (error) {
    return null;
  }
};