import { createContext } from "react";
import { client } from "lib/client";

export const SanityContext = createContext<any>(null)

export default async function SanityProvider({ children }: { children: React.ReactNode }) {
  const data = await client.fetch(`*[_type in ['partner']][0]`);
  return (
    <SanityContext.Provider value={data} >
      {children}
    </SanityContext.Provider>
  );
}