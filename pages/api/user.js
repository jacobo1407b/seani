import { db } from "../../utils/firebase";
import { collection } from "../../utils/variables";
export default async (req, res) => {
  try {
    const data = await db
      .collection(collection)
      .where("user", "==", req.body.uid)
      .get();
      const infoUser = data?.docs[0]?.data() || null
    res.status(200).json({ error: false, data: infoUser });
  } catch (err) {
    console.log(err);
    res.status(401).json({ err, error: true });
  }
};
