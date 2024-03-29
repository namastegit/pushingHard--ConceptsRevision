const  { Client } = require ('pg');

const client = new Client({
    connectionString: "postgresql://betweenthree21:20RpAkTeHhSL@ep-quiet-sound-a5t9x33d.us-east-2.aws.neon.tech/TESTS?sslmode=require"
});

async function dropUsersTable() {
    try {
        await client.connect();
        const result = await client.query(`
            DROP TABLE IF EXISTS users;
        `);
        console.log("Table dropped successfully");
    } catch (error) {
        console.error("Error dropping table:", error);
    } finally {
        await client.end();
    }
}

dropUsersTable();
