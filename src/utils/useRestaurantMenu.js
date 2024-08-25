import React, { useEffect, useState } from 'react'
import { RES_MENU_URL } from './constants';

function useRestaurantMenu(id) {
    const [resInfo, setResInfo] = useState(null);
    useEffect (()=>{
        fetchData();
    }, []);

    const fetchData = async() =>{
        const data  = await fetch(RES_MENU_URL+ id);
        const json = await data.json();
        setResInfo(json.data);
    };

    return resInfo;
};
export default useRestaurantMenu;
