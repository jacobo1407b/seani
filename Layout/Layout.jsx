import React ,{useEffect}from 'react'
import MenuBar from '../components/Menu/Menu';
import {useDispatch,useSelector} from 'react-redux';
import {accionUser,accionAlumno} from '../redux/accion'
const Layout = ({children,user,alumno}) => {
    const dispatch = useDispatch();
    dispatch(accionUser(user))
    dispatch(accionAlumno(alumno))
    const user2 = useSelector(state => state.user)
    return (
        <div>
            {user2?(<MenuBar/>):null}
            {children}
        </div>
    )
}

export default Layout
