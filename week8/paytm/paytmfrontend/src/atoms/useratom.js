import { atom } from "recoil";

export const UserAtom = atom({
  key: "userState",
  default: {
    username: "",
    firstname: "",
    lastname: "",
    password: "",
  },
});
