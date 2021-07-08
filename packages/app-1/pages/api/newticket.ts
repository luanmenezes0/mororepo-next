import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req)
  console.log(req.query);

  res.status(200).json({ name: 'John Doe' });
}
