import { atom } from "recoil";
import { BoardResponse } from "../types";

export const boardsState = atom<BoardResponse[]>({
  key: "boardsState",
  default: [],
});
