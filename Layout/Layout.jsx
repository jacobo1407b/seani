import React from 'react'
import MenuBar from '../components/Menu/Menu';
import {auth } from '../utils/firebase';
import {getInitial} from '../utils/api'
import {useDispatch,useSelector} from 'react-redux';
import {accionUser,accionAlumno} from '../redux/accion'
const Layout = ({children}) => {
    const dispatch = useDispatch();

    auth.onAuthStateChanged(async(currentUser)=>{
        if(currentUser){
            dispatch(accionUser(currentUser))
            const {data} = await getInitial(currentUser.uid)
            //console.log(alumno.data)
            dispatch(accionAlumno({data}))
        }else{
            dispatch(accionUser(null))
        }  
    })
    const user2 = useSelector(state => state.user?.uid)
    return (
        <div>
            {user2?(<MenuBar/>):null}
            {children}
        </div>
    )
}

export default Layout
