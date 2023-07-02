import React from "react";
import Products from "./components/Products/Products.js";
import { Route, Switch } from  "react-router-dom";

const Routes = ({productItems}) => {
    return(
        <div>
            <Switch>
                <Route path="/" exact/>
                    <Products productItems={productItems}/>
            </Switch>
        </div>
    );
};

export default Routes;