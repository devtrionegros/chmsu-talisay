import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";
interface RequirementsStoreState {
  requirementsList: any[]; // Change 'any' to the actual type of your clearance items
  setRequirementsList: (newList: any[]) => void; // Change 'any' to the actual type
}

interface ClearanceStoreState {
  clearanceList: any[]; // Change 'any' to the actual type of your clearance items
  setClearanceList: (newList: any[]) => void; // Change 'any' to the actual type
}

const useStoreClearance = create<ClearanceStoreState>((set) => ({
  clearanceList: [],
  setClearanceList: (newList) => set({ clearanceList: newList }),
}));

const useStoreRequirements = create<RequirementsStoreState>((set) => ({
  requirementsList: [],
  setRequirementsList: (newList) => set({ requirementsList: newList }),
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("storeRequirements", useStoreRequirements);
  mountStoreDevtool("storeClearance", useStoreClearance);
}
export { useStoreRequirements, useStoreClearance };
