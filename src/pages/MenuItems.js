import React from 'react';
import {Menu} from "antd";
import {mathOperations} from "../utils/mathOperations";

const MenuItems = ({handleMenuClick}) =>{
    const {divide, add, multiple, minus} = mathOperations;
    return (
        <Menu onClick={handleMenuClick}
                  items={[
                      {
                          label: add,
                            key: add,
                      },
                      {
                            label: minus,
                            key: minus,
                      },
                      {
                            label: divide,
                            key: divide,
                      },
                      {
                            label: multiple,
                            key: multiple,
                      },
                    ]}
        />);
};

export default MenuItems;