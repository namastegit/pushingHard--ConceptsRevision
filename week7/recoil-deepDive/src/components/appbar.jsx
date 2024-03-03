import { useRecoilValue } from "recoil"
import { Bubble1, Bubble2, Bubble3, Bubble4, Bubble5, Total  } from "../atoms-selectors/bubble";

export function CreateAppBar() {
    const HomeRatom = useRecoilValue(Bubble1);
    const NetworkRatom = useRecoilValue(Bubble2);
    const JobsRatom = useRecoilValue(Bubble3);
    const MessageRatom = useRecoilValue(Bubble4);
    const NotificationRatom = useRecoilValue(Bubble5);
    const totalvalue  = useRecoilValue(Total);
    return (
        <>
        <button>Home ({HomeRatom })</button><br/>
        <button>My Network ({NetworkRatom})</button><br/>
        <button>Jobs ({JobsRatom < 100 ? "99+" : JobsRatom })</button><br/>
        <button>Message ({MessageRatom})</button><br/>
        <button>Notifications ({NotificationRatom})</button><br/>
        <button>Me ({totalvalue})</button>

        </>

    )
}