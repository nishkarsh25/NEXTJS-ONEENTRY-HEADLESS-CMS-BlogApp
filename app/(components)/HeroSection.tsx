import Image from 'next/image'
import React from 'react'

const HeroSection = ({pages}:{pages:any}) => {
  const data = pages && pages.find((page:any)=> page.pageUrl === "home")?.attributeValues;
  
  
}

