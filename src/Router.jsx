import React from 'react';
import {Route, Switch} from "react-router";
import {CartList, OrderConfirm,OrderHistory,ProductDetail,ProductEdit,ProductList,Reset,SignIn,SignUp} from "./templates";
import Auth from "./Auth"

const Router = () => {
  return (
    <Switch>
      <Route exact path={"/signup"} component={SignUp} />
      <Route exact path={"/signin"} component={SignIn} />
      <Route exact path={"/signin/reset"} component={Reset} />

      <Auth>
        <Route exact path={"(/)?"} component={ProductList} />
        <Route exact path={"/product/:id"} component={ProductDetail} />
        <Route path={"/product/edit(/:id)?"} component={ProductEdit} />
        <Route extct path={"/cart"} component={CartList} />
        <Route extct path={"/order/confirm"} component={OrderConfirm} />
        <Route extct path={"/order/history"} component={OrderHistory} />
      </Auth>
    </Switch>
  );
};

export default Router