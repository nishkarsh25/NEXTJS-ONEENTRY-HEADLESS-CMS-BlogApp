import Link from 'next/link';
import { defineOneEntry } from 'oneentry';
import React from 'react'


const { Menus } = defineOneEntry(process.env.API_URL!, {token:process.env.API_TOKEN, langCode:"en_US"});

const Footer = async () => {
    const value = await Menus.getMenusByMarker('footer');

    const menus:any = value.pages;
 
    

}

