import React from "react";
import BasketCard from "../basketCard/BasketCard";
import Categories from "../categories/Categories";
import Search from "../search/Search";

const Sidebar = () => {
          return <div >
                    <BasketCard />
                    <Search />
                    <Categories />
          </div>
}

export default Sidebar