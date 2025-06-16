
import { connectToDB } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    await connectToDB();
    const { email, password } = await req.json();

    const user = await User.findOne({ email });
    if (!user) {
      return new Response("User not found", { status: 401 });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return new Response("Invalid credentials", { status: 401 });
    }

    return new Response(JSON.stringify({ message: "Login successful", user }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    return new Response("Login error", { status: 500 });
  }
}
