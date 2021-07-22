import PropTypes from 'prop-types'
import { useEffect } from 'react'
import {auth } from 'utils/firebase';
import {useDispatch} from 'react-redux';
import {accionUser} from 'redux/accion';
import Router from 'next/router'
export  function useUser({ redirectTo, redirectIfFound} = {}) {
  const dispatch = useDispatch();
  const user = auth.currentUser
  const finished = Boolean({user})
  const hasUser = Boolean(user)

  useEffect(() => {
    dispatch(accionUser(user))
    if (!redirectTo || !finished) return
    if ((redirectTo && !redirectIfFound && !hasUser) ||(redirectIfFound && hasUser)) {
      Router.push(redirectTo)
    }else{
      Router.push('/')
    }
  }, [redirectTo, redirectIfFound, finished, hasUser])
  
  return user
}

useUser.propTypes={
  redirectTo: PropTypes.string,
  redirectIfFound: PropTypes.bool,
  setloader: PropTypes.func
}