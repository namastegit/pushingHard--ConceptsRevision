import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function insertUser(username:string, password:string, firstname:string,lastname:string) {
 const res = await prisma.user.create({
    data:{
        username,
        firstname,
        lastname,
        password
    }
 })
 console.log(res);
}

insertUser("akshay@gmail.com","123","Akshay","Kumar")