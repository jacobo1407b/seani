import React from 'react'
import MenuBar from '../components/Menu/Menu';
import {useDispatch} from 'react-redux';
import {accionUser} from '../redux/accion'
const Layout = ({children,user,alumno}) => {
    const dispatch = useDispatch();
    dispatch(accionUser(user))
    return (
        <div>
            {user?(<MenuBar user={user} alumno={alumno}/>):null}
            {children}
        </div>
    )
}

export default Layout
