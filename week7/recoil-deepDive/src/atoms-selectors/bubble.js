import { atom, selector } from "recoil";
import axios from "axios";

export const network2 = atom({
  key: "NETWORK",
  default: selector({
    key: "unique",
    get: async ({ get }) => {
      try {
        const res = await axios.get("https://sum-server.100xdevs.com/notifications");
        return res.data;
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error; // Propagate the error to the component
      }
    },
  }),
});

export const all = selector({
  key: "all",
  get: ({ get }) => {
    const network1 = get(network2).network;
    const jobs1 = get(network2).jobs;
    const message1 = get(network2).messaging;
    const notifications1 = get(network2).notifications;
    const finalallCalls = network1 + jobs1 + message1 + notifications1;
    return finalallCalls;
  },
});
