import { useContext } from "react";
import { SelectedFolderContext } from "../context/SelectedFolderContext";

export function useSelectedFolder() {
  const context = useContext(SelectedFolderContext);

  if (context === undefined) {
    throw new Error(
      "useSelectedFolder dovrebbe essere usato in un 'SelectedFolderProvider'"
    );
  }

  return context;
}
