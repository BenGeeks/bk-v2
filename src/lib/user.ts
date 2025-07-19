import { getServerSession } from 'next-auth';
import { authOptions } from './auth-options';
import type { Session } from 'next-auth';
import { User } from '@/types/user.types';

export async function getUser(): Promise<User | null> {
   const session: Session | null = await getServerSession(authOptions);
   return (session?.user as User) ?? null;
}
