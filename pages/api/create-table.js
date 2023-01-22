// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import client from "@/src/db-client";
export default async (req, res) => {
    client.connect()

    // console.log("create table if not exists");
    const result = await client.query(
        "create table if not exists test (id serial, col1 text, primary key(id))"
    );
    await client.clean()
    await client.end()
    
    res.status(200).json({result: result[0]})
}
