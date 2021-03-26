import type { NextApiRequest, NextApiResponse } from 'next'
import { openDB } from "../../openDB";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const db = await openDB();
  const faq = await db.all("SELECT * FROM FAQ ORDER BY createDate DESC");
  res.status(200).json(faq)
}
