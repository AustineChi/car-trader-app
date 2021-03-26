import type { NextApiRequest, NextApiResponse } from 'next'
import { openDB } from "../../../openDB";
import { CarModel } from "../../../../models/Car";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const db = await openDB();
    const car = await db.get<CarModel | null>(
        "SELECT * FROM Car where id = ?",
        req.query.id
    );
    res.status(200).json(car)
}
