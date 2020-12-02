import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...props }) => {

  function tokenCheck() {
    if (localStorage.getItem('jwt')) {
      return true;
    } else {
      return false;
    }
  }

  React.useEffect(() => {
    if (!tokenCheck()) {
      props.handleLoginPopupClick();
    }
  })

    return (
        <Route>
            {
                () => tokenCheck() ? <Component {...props} /> : <Redirect to="/" />
            }
        </Route>
    )
};

export default ProtectedRoute;
