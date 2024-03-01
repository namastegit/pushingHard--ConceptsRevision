//commit
import {atom, selector} from "recoil";

export const countAtom = atom({
    key:  "countAtom",
    default: 0
});

export const isEven = selector({
    key: "isEven",
    get: (props) => {
        const even = props.get(countAtom);
        return even % 2;
    }
});
