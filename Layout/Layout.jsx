import React from 'react'
import MenuBar from 'components/Menu/Menu';
import {auth } from 'utils/firebase';
import {getInitial} from 'utils/api'
import {useSelector,useDispatch} from 'react-redux';
import {accionUser,accionAlumno} from 'redux/accion';

const Layout = ({children}) => {
    const dispatch = useDispatch();
    const user2 = useSelector(state => state.user?.uid)

    auth.onAuthStateChanged(async(currentUser)=>{
        if(currentUser){
            const {data} = await getInitial(currentUser.uid);
            dispatch(accionUser(currentUser))
            dispatch(accionAlumno({data}))
        }else{
            dispatch(accionUser(null))
        }  
    })
    
    return (
        <div>
            
            {user2?(<MenuBar/>):null}
            {children}
        </div>
    )
}

export default Layout
