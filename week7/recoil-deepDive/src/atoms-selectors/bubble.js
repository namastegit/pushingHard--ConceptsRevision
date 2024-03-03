import { atom, selector } from "recoil"

export const Bubble1 = atom({
    key: "Home",
    default: 0
})
export const Bubble2 = atom({
    key: "My Network",
    default: 102
})
export const Bubble3 = atom({
    key: "Jobs",
    default: 2
})
export const Bubble4 = atom({
    key: "Message",
    default: 8
})
export const Bubble5 = atom({
    key: "Notification",
    default: 12
})

export const Total = selector({
    key: "Total",
    get: ({ get }) => {
      const home = get(Bubble1);
      const network = get(Bubble2);
      const jobs = get(Bubble3);
      const message = get(Bubble4);
      const notification = get(Bubble5);
  
      const finalTotal = home + network + jobs + message + notification;
      return finalTotal;
    }
  });
  