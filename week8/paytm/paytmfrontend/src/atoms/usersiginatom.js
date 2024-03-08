import { atom } from "recoil";

export const UsersigninAtom = atom({
  key: "usersiginState",
  default: {
    username: "",
    password: "",
  },
});
