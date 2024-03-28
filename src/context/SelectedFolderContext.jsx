import { createContext, useState } from "react";

export const SelectedFolderContext = createContext();

export function SelectedFolderProvider({ children }) {
  const [selectedFolder, setSelectedFolder] = useState(null);

  return (
    <SelectedFolderContext.Provider
      value={{ selectedFolder, setSelectedFolder }}
    >
      {children}
    </SelectedFolderContext.Provider>
  );
}
