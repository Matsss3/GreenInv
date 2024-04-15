import { getVerifTokenByEmail } from "@/data/verification-token";
import { getResetTokenByEmail } from "@/data/reset-token";
import { v4 as uuidv4 } from "uuid";

import { db } from '@/lib/db';

export const generateVerificationToken = async (email: string) => {
  const token = uuidv4();
  const expires_at = new Date(new Date().getTime() + 3600 * 1000);

  const existingToken = await getVerifTokenByEmail(email);

  if (existingToken) {
    await db.verificationToken.delete({
      where: {
        id: existingToken.id
      }
    });
  }

  const verificationToken = await db.verificationToken.create({
    data: {
      email,
      token,
      expires_at
    }
  });

  return verificationToken;
};

export const generateResetToken = async (email: string) => {
  const token = uuidv4();
  const expires_at = new Date(new Date().getTime() + 3600 * 1000);

  const existingToken = await getResetTokenByEmail(email);

  if (existingToken) {
    await db.passResetToken.delete({
      where: {
        id: existingToken.id
      }
    });
  }

  const resetToken = await db.passResetToken.create({
    data: {
      email,
      token,
      expires_at
    }
  });

  return resetToken;
};