import { createContext, useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const API_KEY = import.meta.env.VITE_APP_API_KEY;
  const [loading, setLoading] = useState(false);

  const value = {
    loading,
    setLoading,
    API_KEY,
  };

  return <AppContext.Provider value={value}> {children} </AppContext.Provider>;
}
