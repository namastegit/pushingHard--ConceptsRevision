import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        await prisma.user.create({
            data: {
                username: body.username,
                password: body.password
            }
        });
        return NextResponse.json({ message: 'User created successfully' }); 
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ message: 'Error occurred while creating user' });
    }
}
