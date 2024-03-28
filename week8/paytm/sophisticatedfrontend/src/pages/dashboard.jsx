import { Appbar } from "../components/appbar";
import { Balance } from "../components/balance";
import { Users } from "../components/users";

export function Dashboard() {
    return <div>
        <Appbar></Appbar>
        <Balance value={"10000"}></Balance>
            <Users/>
    </div>
}