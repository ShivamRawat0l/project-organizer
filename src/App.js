import React, { useState, useEffect } from "react";
import { RootStoreProvider } from "./modal/index.ts";
import RootNavigation from "./navigation/RootNavigator.tsx";
import { setupRootStore } from "./modal/root-store/setup-store.ts";
export default function App() {
  const [rootStore, setRootStore] = useState({});
  useEffect(() => {
    setupRootStore().then((rootStore) => {
      setRootStore(rootStore);
    });
  }, []);
  return (
    <RootStoreProvider value={{ rootStore }}>
      <RootNavigation />
    </RootStoreProvider>
  );
}
