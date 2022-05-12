import React from "react";
import Sidebar from "../../components/sideBar/Sidebar";








//exact проверяет полный  URL это для тех route которые могут совпадать
// это касается например "/" который будет во всех путях
const Layout = ({ children }) => {
          //layout это стейтлес компонент во внутрь которого мы можем передать какие то 
          // компоненты и эти компоненты будут рендерится на месте children
          // то есть это просто обертка  
          return <div className="view-container">
                    <div className="container">
                              <div className="row">
                                        <div className="col-md-3">
                                                  <Sidebar />
                                        </div>
                                        <div className="col-md-9">
                                                  {children}
                                        </div>
                              </div>
                    </div>

          </div>
}

export default Layout