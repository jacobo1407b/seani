import { auth } from "../../utils/firebase";

export default async (req, res) => {
  try {
     await auth.signOut()
     return res.status(200).json({ logout:true })
  } catch (error) {
    return res.status(401).json({ error,logout:false });
  }
};