"use client";

import { createContext, useContext } from "react";
import type { Session } from "next-auth";

const SessionContext = createContext<Session | null>(null);

export const useSessionContext = () => useContext(SessionContext);

interface SessionProviderProps {
  session: Session | null;
  children: React.ReactNode;
}

export const SessionProvider = ({ session, children }: SessionProviderProps) => {
  return <SessionContext.Provider value={session}>{children}</SessionContext.Provider>;
};
