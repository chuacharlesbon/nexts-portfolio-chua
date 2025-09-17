import dbConnect from "../../../../mongoose";
import Pet from "@/schema/PetModel";

export async function GET(
    req: Request,
) {
    try {
        await dbConnect();

        /* find all the data in our database */
        const result = await Pet.find({});

        const data = "Connected to mongoose";
        return new Response(JSON.stringify({
            message: data,
            data: result
        }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            }
        });
    } catch (error) {
        return new Response(JSON.stringify({ message: `Something went wrong. ERR: ${error}` }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}

export async function POST(
    req: Request,
) {
    try {
        await dbConnect();

        /* find all the data in our database */
        const result = await Pet.create({
            name: "_system",
            owner_name: "_system",
            species: "_system",
            age: 1,
            poddy_trained: false,
            diet: ["_system"],
            image_url: "_system",
            likes: ["_system"],
            dislikes: ["_system"],
        });

        const data = "Connected to mongoose";
        return new Response(JSON.stringify({
            message: data,
            data: result
        }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            }
        });
    } catch (error) {
        return new Response(JSON.stringify({ message: `Something went wrong. ERR: ${error}` }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}