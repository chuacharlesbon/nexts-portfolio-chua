import dbConnect from "../../../../../mongoose";
import Inquiry from "@/schema/InquiryModel";

export async function POST(
    req: Request,
) {
    try {
        const body = await req.json();
        const { name, email, message } = body;

        if (!name || !email || !message) {
            return new Response(JSON.stringify({ message: `Something went wrong. ERR: Invalid form data.` }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        } else {
            // Connect to MongoDB
            await dbConnect();

            /* find all the data in our database */
            const result = await Inquiry.create({
                name: name,
                email: email,
                message: message,
            });
            return new Response(JSON.stringify({
                message: "Inquiry has been submitted.",
                data: result
            }), {
                status: 200,
                headers: {
                    'Content-Type': 'application/json',
                }
            });
        }
    } catch (error) {
        return new Response(JSON.stringify({ message: `Something went wrong. ERR: ${error}` }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}