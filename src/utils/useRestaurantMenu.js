import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestuarntMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(MENU_API + resId);
    const json = await response.json();
    setResInfo(json.data);
  };
  return resInfo;
};

export default useRestuarntMenu;
