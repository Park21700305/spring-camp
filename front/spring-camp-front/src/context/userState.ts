import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { User } from "../types";

const { persistAtom } = recoilPersist({
  key: "userState",
  storage: sessionStorage,
});

export const userState = atom<User | null>({
  key: 'userState',
  default: null,
  effects_UNSTABLE: [persistAtom],
});
