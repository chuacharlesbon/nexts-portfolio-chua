export async function GET(
    req: Request,
) {
    try {
        const data = "Connected ping";
        return new Response(JSON.stringify({ message: data }), {
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