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
         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div style={styles.card}>
            {allcards.map((card) => (
                <button key={card.id} onClick={() => setCardid(card.id)} style={styles.cardbuttons}>
                    Card {card.id}
                </button>
                
            ))}
            <div>
                <h1 style={styles.name}>{onecard.username}</h1>
                <br>
                </br>
                <h3 style={styles.interestItem}>{onecard.description}</h3>
                <br>
                </br>
                <h2>Interests</h2><br>
                </br>
                <h3 style={styles.interestItem}>{onecard.interest1}</h3>
                <br></br>
                <h3 style={styles.interestItem}>{onecard.interest2}</h3>
                <br></br>
                <h3 style={styles.interestItem}>{onecard.interest3}</h3>
                <br></br>
                <button style={styles.socialLinks}>Link 1</button>  <button style={styles.socialLinks}>Link 2</button>
            </div>
            </div>
            </div>
        </>
    );
}
const styles = {
    card: {
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '20px',
      margin: '20px',
      maxWidth: '400px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#f8f9fa'
    },
 name: {
      fontSize: '30px',
      marginBottom: '10px',
      color: '#111',
    },
    socialLinks: {
        textDecoration: 'none',
        color: '#fff', // Text color
        padding: '10px 15px', // Padding for the button
        borderRadius: '5px', // Border radius for rounded corners
        backgroundColor: '#007BFF', // Background color for the button
        display: 'inline-block', // Display as inline-block to be side by side
        margin: '10px', // Margin between buttons
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Box shadow for a subtle lift
      },
      interestItem: {
        fontSize: '14px',
        marginBottom: '5px',
        color: '#555',
      },
      cardbuttons: {
        textDecoration: 'none',
        color: '#111', // Text color
        padding: '10px 15px', // Padding for the button
        borderRadius: '5px', // Border radius for rounded corners
        backgroundColor: '	#00A36C', // Background color for the button
        display: 'inline-block', // Display as inline-block to be side by side
        margin: '10px', // Margin between buttons
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Box shadow for a subtle lift
      }
}