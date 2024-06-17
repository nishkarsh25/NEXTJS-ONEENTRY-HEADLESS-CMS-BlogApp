import Image from 'next/image'
import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button';

const Article = ({blog}:{blog:any}) => {
  
  
  const title = blog?.attributeValues?.blogtitle?.value?.header;
  const thumbnail = blog?.attributeValues?.blogthumbnail?.value?.downloadLink;
  console.log(title)
 
}

