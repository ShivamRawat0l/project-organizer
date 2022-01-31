import React, { useState, useEffect } from "react";
import RootStoreProvider from "./modal/index.ts";
import RootNavigation from "./navigation/RootNavigator.tsx";

export default function App() {
  return <RootNavigation />;
}
