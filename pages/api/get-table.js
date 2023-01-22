// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import client from "@/src/db-client";
export default async (req, res) => {
    client.connect();

    // console.log("create table if not exists");
    const result = await client.query(
        "select * from test"
    );
    
    console.log('here', result[0]);

    await client.clean();

    res.status(200).json({ result: result[0] });
};