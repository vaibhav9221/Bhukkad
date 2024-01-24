import React, { useState, useEffect } from "react";
import { MENU_URL } from "./constants";
const useResturantMenu = (resId) => {
  const [menu, setMenu] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();

    setMenu(json.data);
  };
  return menu;
};

export default useResturantMenu;
