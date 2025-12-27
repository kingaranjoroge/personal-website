import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: 'All fields are required.' },
        { status: 400 }
      );
    }

    // Connect to database
    await connectDB();

    // Create user
    const user = await User.create({
      name,
      email,
      subject,
      message,
    });

    console.log('User stored:', user);

    return NextResponse.json(
      { message: 'User details stored successfully.', user },
      { status: 200 }
    );
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { message: 'Failed to store user details.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Connect to database
    await connectDB();

    // Retrieve users, sorted by descending ID
    const users = await User.find({}, {}, { sort: { id: -1 } });

    return NextResponse.json(
      { users },
      { status: 200 }
    );
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { message: 'Failed to retrieve users.' },
      { status: 500 }
    );
  }
}
