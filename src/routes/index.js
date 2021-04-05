import React, { useContext } from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import Loading from '../components/Loading';

import { Context } from '../context/authenticate';

import LogIn from '../pages/LogIn';
import Home from '../pages/Home';
import CreateNaver from '../pages/CreateNaver';
import UpdateNaver from '../pages/UpdateNaver';

function CustomRoute({ isPrivate, ...rest }) {
  const { loading, authenticate } = useContext(Context);

  if(loading) {
    return (
      <Loading />
    );
  }

  if (isPrivate && !authenticate) {
    return <Redirect to="/" />
  }

  return <Route {...rest} />;
}

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <CustomRoute exact path="/" component={LogIn} />
        <CustomRoute isPrivate exact path="/home" component={Home} />
        <CustomRoute isPrivate exact path="/create-naver" component={CreateNaver} />
        <CustomRoute isPrivate exact path="/update-naver/:id" component={UpdateNaver} />
      </Switch>
    </BrowserRouter>
    
  );
}