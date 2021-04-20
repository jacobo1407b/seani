import { db } from "../../utils/firebase";
import { collection } from "../../utils/variables";
export default async (req, res) => {
  const { uid } = req.body;
  try {
    const time = await db.doc(`${collection}/${uid}`).update({
      activeLengua: false,
      activeMat: false,
      activeLogic: false,
      activeExam1: false,
      time: 0,
    });
    res.status(201).json({ error: false, time });
  } catch (error) {
    res.status(401).json({ error });
  }
};
