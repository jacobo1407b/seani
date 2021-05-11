import { db } from "../../../utils/firebase";
import { collection } from "../../../utils/variables";
export default async (req, res) => {
  const { id } = req.body;
  try {
    await db.doc(`${collection}/${id}`).update({
      activeLengua: false,
      activeMat: false,
      activeLogic: false,
      activeExam1: false,
      time: 0,
    });
    return res.status(200).json({ success: true, error: false });
  } catch (error) {
    return res.status(401).json({ err, error: true });
  }
};
