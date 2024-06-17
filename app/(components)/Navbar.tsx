import Link from 'next/link'
import React from 'react'
import ContactButton from './ContactButton'
import { defineOneEntry } from 'oneentry';

const { Pages } = defineOneEntry(process.env.API_URL!, {token:process.env.API_TOKEN, langCode:"en_US"});

const Navbar = async() => {

    const pages = await Pages.getPages('en_US')
    

  
}


