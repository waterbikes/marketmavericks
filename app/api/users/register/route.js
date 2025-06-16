import { connectToDB } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    await connectToDB();

    const { name, email, password } = await req.json();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new Response("User already exists", { status: 400 });
    }


    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword, // save the hash, not plain password
    });

    await newUser.save();

    return new Response("User registered successfully", { status: 200 });

  } catch (err) {
    console.error("Registration error:", err);
    return new Response("Server error", { status: 500 });
  }
}
