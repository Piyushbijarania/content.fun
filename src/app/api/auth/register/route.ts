import { NextRequest, NextResponse } from "next/server";
import { prisma } from '@/lib/prisma';
import { hashPassword } from '@/lib/hash';

export async function POST (req: NextRequest) {
    const body = await req.json();
    const { email, password, role } = body;

    if (!email || !password || !role) {
        return NextResponse.json( 
            { error: 'Missing required fields' },
            { status: 400 }
        );
        
    }

    if (role !== 'USER' && role !== 'CREATOR') {
        return NextResponse.json(
            { error: 'Invalid role'},
            { status: 400 }
        );
    }

    const existingUser = await prisma.user.findUnique({
        where: { email },
    });

    if (existingUser) {
        return NextResponse.json(
            { error: 'Email already registered' },
            { status: 409 }
        );
    }

    const hashedPassword = await hashPassword(password);

    const newUser = await prisma.user.create({
        data: {
            email,
            hashedPassword,
            role,
        },
    });

    return NextResponse.json( 
        { 
            message: 'User created successfully',
            user: {
                id: newUser.id,
                email: newUser.email,
                role: newUser.role,
            },
        },
        { status: 201 }

    );
}