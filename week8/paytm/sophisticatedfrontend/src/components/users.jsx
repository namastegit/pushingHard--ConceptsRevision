import { useEffect, useState } from "react";
import { Button } from "../components/button";
import axios from "axios";

export const Users = () => {
    const [userS, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios({
                    url: "http://localhost:3000/getallusers"
                });
                setUsers(response.data.msgg);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchData();
    }, []);

    const handleInputChange = async (event) => {
        try {
            const response = await axios({
                url: `http://localhost:3000/filtre?filtre=${event.target.value}`
            });

            setUsers(response.data.users); 
        } catch (error) {
            console.error("Error fetching filtered user data:", error);
        }
    };

    return (
        <>
            <div className="font-bold mt-6 text-lg">
                Users
            </div>
            <div className="my-2">
                <input
                    type="text"
                    placeholder="Search users..."
                    className="w-full px-2 py-1 border rounded border-slate-200"
                    onChange={handleInputChange}
                />
            </div>
            <div>
                {userS.map(user => <User key={user._id} user={user} />)}
            </div>
        </>
    );
};

function User({ user }) {
    return (
        <div className="flex justify-between">
            <div className="flex">
                <div className="rounded-full h-12 w-12 bg-slate-300 flex justify-center mt-1 mr-2">
                    <div className="flex flex-col justify-center h-full text-xl">
                        {user.firstname[0]}
                    </div>
                </div>
                <div className="flex flex-col justify-center h-ful">
                    <div>
                        {user.firstname} {user.lastname}
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center h-ful">
                <Button label={"Send Money"} onClick={() => {}} />
            </div>
        </div>
    );
}
