// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { openDB } from "../../openDB";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const db = await openDB();
  const cars = await db.all('SELECT * FROM Car');
  res.status(200).json(cars)
}
