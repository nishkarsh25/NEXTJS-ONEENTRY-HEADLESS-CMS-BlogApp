"use client"
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { FormDialog } from './FormDialog';


const ContactButton = () => {
    const [open, setOpen] = useState(false);

    const openHandler = () => {
        setOpen(true);
    }
    
}

