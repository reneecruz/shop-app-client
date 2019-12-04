import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Pages from './Pages';

export const Routes = () => {
    return(
    <Switch>
        <Route exact path="/" component={Pages.Home} />
        <Route path="/login" component={Pages.Login} />
        <Route path="/signup" component={Pages.Signup} />

        <Route
          path="/items/:id"
          render={(routerProps) => <Pages.ShowItem {...routerProps} />}
        />
        <Route path="/account" component={Pages.Account} />
        <Route path="/cart" component={Pages.Cart} />

    </Switch>

    )
    
}