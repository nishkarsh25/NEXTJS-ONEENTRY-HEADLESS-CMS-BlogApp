import Image from 'next/image'
import { defineOneEntry } from 'oneentry';
import React from 'react'


const { Products } = defineOneEntry(process.env.API_URL!, {token:process.env.API_TOKEN, langCode:"en_US"});

const SingleArticle = async ({params}:any) => {
    const blogId = params.id;
    const value = await Products.getProductById(blogId, 'en_US');
 
    const title = value?.attributeValues?.blogtitle?.value?.header;
    const thumbnail = value?.attributeValues?.blogthumbnail?.value?.downloadLink;
    const blogContent =  value?.attributeValues?.blogcontent?.value?.htmlValue;

    
}

