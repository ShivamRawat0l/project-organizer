import { createContext, useContext } from "react";
import { RootStoreType } from "./root-store-types";

const RootStoreContext = createContext({
  rootStore: null,
});
export const RootStoreProvider = RootStoreContext.Provider;
export const useStores = (): RootStoreType => useContext(RootStoreContext);
