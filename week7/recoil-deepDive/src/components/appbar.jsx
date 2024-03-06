
import {useRecoilState, useRecoilValue} from "recoil";
import { all, network2 } from "../atoms-selectors/bubble"

export function Create() {
    const [networkCalls ] = useRecoilState(network2);
     const totalValue = useRecoilValue(all);

    return (
        <>
        <button>Network ({networkCalls.network})</button>
        <button>Jobs ({networkCalls.jobs})</button>
        <button>Message ({networkCalls.messaging})</button>
        <button>Notifications ({networkCalls.notifications})</button>
        <br></br>
        <button>Me ({totalValue > 100 ? "99+" : totalValue})</button>

        </>
    )
}
