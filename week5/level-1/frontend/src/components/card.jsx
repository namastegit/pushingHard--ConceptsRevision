import { useEffect, useState } from "react";

export function UserCard() {
    const [onecard, setOnecard] = useState([]);
    const [allcards, setAllcards] = useState([]);
    const [cardid, setCardid] = useState(1);

    useEffect(() => {
        fetch(`http://localhost:3000/getone?id=${cardid}`)
            .then((res) => res.json())
            .then((data) => {
                setOnecard(data.users);
            });
    }, [cardid]);

    useEffect(() => {
        fetch("http://localhost:3000/getall")
            .then((res) => res.json())
            .then((data) => {
                setAllcards(data.users);
            });
    }, []);

    return (
        <>
            {allcards.map((card) => (
                <button key={card.id} onClick={() => setCardid(card.id)}>
                    Card {card.id}
                </button>
                
            ))}
            <div>
                <h1>{onecard.username}</h1>
                <br>
                </br>
                <h3>{onecard.description}</h3>
                <br>
                </br>
                <h2>Interests</h2><br>
                </br>
                <h3>{onecard.interest1}</h3>
                <br></br>
                <h3>{onecard.interest2}</h3>
                <br></br>
                <h3>{onecard.interest3}</h3>
                <br></br>
                <button>{onecard.link1}</button>  <button>{onecard.link2}</button>
            </div>
        </>
    );
}
