import { au } from "../../utils/firebase";

export default async (req, res) => {
  try {

    const user = au.currentUser
    res.status(200).json({ user: user });
    //res.status(200).json({ user:'',error:false });
  } catch (error) {
      console.log(error)
     res.status(401).json({ error });
  }
};
