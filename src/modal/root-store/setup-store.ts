import { RootStore } from "./root-store";
import { onSnapshot } from "mobx-state-tree";
import { saveStorage, loadStorage } from "../../utils/storage";

const KEY_STORAGE_ROOT = "root";

export async function setupRootStore() {
  let rootStore;
  let data;
  try {
    data = (await loadStorage(KEY_STORAGE_ROOT)) || {};
    rootStore = RootStore.create(data);
  } catch {
    rootStore = RootStore.create({});
  }
  onSnapshot(rootStore, async (snapshot) => {
    const filteredSnapShot = { ...(snapshot as object) };
    await saveStorage(KEY_STORAGE_ROOT, filteredSnapShot);
  });
  return rootStore;
}
