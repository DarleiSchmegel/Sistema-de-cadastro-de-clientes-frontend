import React from 'react';
import { BrowserRouter , Switch, Route, Redirect, RouteProps } from 'react-router-dom';
import { isAuthenticated } from './services/auth';

//import Subscription from './pages/Subscription';
import Presentation from './pages/Presentation'
import Login from './pages/Login';
import Register from './pages/Register';
import Main from './pages/Main';

interface PrivateRouteProps extends RouteProps {
  // tslint:disable-next-line:no-any
  component: any;
  //isSignedIn: boolean;
  isAuth: boolean;
}

const PrivateRoute = (props: PrivateRouteProps) => {
  const { component: Component, isAuth, ...rest } = props;

  return (
      <Route
          {...rest}
          render={(routeProps) =>
            isAuth ? (
                  <Component {...routeProps} />
              ) : (
                      <Redirect
                          to={{
                              pathname: '/login',
                              state: { from: routeProps.location }
                          }}
                      />
                  )
          }
      />
  );
};

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                {/* <Route path="/" exact component={Subscription} /> */}
                <Route exact path="/" component={Presentation} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <PrivateRoute isAuth={isAuthenticated()} path="/main" component={Main} />
                <Route path="*" component={() => <h1>Page not found</h1>} />
            </Switch>
        </BrowserRouter>
    );
}