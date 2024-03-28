import {Client} from "pg";

const client = new Client({
    connectionString:"postgresql://betweenthree21:20RpAkTeHhSL@ep-quiet-sound-a5t9x33d.us-east-2.aws.neon.tech/TESTS?sslmode=require"
})



async function createusersTable() {
    await client.connect()
    const result = await client.query(`
    CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    )
    `)
console.log(result);
}

createusersTable();