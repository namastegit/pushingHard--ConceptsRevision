const  { Client } = require ('pg');
// Async function to fetch user data from the database given an email
async function getUser(email) {
    const client = new Client({
        connectionString:"postgresql://betweenthree21:20RpAkTeHhSL@ep-quiet-sound-a5t9x33d.us-east-2.aws.neon.tech/TESTS?sslmode=require"
    });
    

  try {
    await client.connect(); // Ensure client connection is established
    const query = 'SELECT * FROM users WHERE email = $1';
    const values = [email];
    const result = await client.query(query, values);
    
    if (result.rows.length > 0) {
      console.log('User found:', result.rows[0]); // Output user data
      return result.rows[0]; // Return the user data
    } else {
      console.log('No user found with the given email.');
      return null; // Return null if no user was found
    }
  } catch (err) {
    console.error('Error during fetching user:', err);
    throw err; // Rethrow or handle error appropriately
  } finally {
    await client.end(); // Close the client connection
  }
}

// Example usage
getUser('user3@example.com').catch(console.error);