import { db } from "../../../utils/firebase";
import {collection} from '../../../utils/variables'
export default async (req, res) => {
    const {id,arre} = req.body
  try {
    await db.doc(`${collection}/${id}`).update({ lengua: arre });
    return res.status(200).json({ success: true, error: false });
  } catch (error) {
    return res.status(401).json({ err, error: true });
  }
};
