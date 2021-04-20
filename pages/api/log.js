import { auth } from "../../utils/firebase";




export default async (req, res) => {

  try {
    const login = await auth
    .signInWithEmailAndPassword(req.body.email, req.body.password)
    //res.cookie('user',login)
    res.status(200).json({ success:true,error:false,response:login })
  } catch (error) {
    console.log(error)
    res.status(401).json({ error,error:true, message:error.message});
  }
};
