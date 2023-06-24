import { createContext, useState } from "react";

export const AppContext = createContext<any>(null)

export default function AppProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState({})
  return (
    <AppContext.Provider value={{ data, setData }}>
      {children}
    </AppContext.Provider>
  );
}