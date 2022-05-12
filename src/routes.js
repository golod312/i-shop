
import React from "react";
import { Switch, Route } from "react-router-dom";

import Phones from "./containers/phones/Phones";
import Phone from "./containers/phone/Phone";
import Basket from "./containers/basket/Basket"

export default (

          <Switch>
                    <Route path="/" component={Phones} exact />
                    <Route path="/categories/:id" component={Phones} />
                    {/* список категорий который будет рендерить компонет Phones
                    исходя из необходимых id для этого их необходимо зафетчить
                    в компоненте  Phones */}
                    <Route path="/phones/:id" component={Phone} />
                    <Route path="/basket" component={Basket} />
          </Switch>
)



