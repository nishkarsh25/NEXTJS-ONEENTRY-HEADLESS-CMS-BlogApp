import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle, 
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function FormDialog({ open, setOpen }: { open: boolean, setOpen: any }) {

    const submitHandler = async (formData:FormData) => {
        try {
            const name = formData.get('name') as string;
            const email = formData.get('email') as string;
            const number = formData.get('number') as string;
            if(!name || !email || !number) throw new Error('All fiels are required');
            
            // api call ayega

            const response = await fetch('http://localhost:3000/api/contactus', {
                method:'POST',
                headers:{
                    'Content-Type':"application/json"
                },
                body:JSON.stringify({name, email, number})
            });
            if(!response.ok){
                throw new Error('Failed to submit form')
            }
            const resData = await response.json();
            console.log(resData);
        } catch (error) {
            throw new Error("Failed!")
        }
        setOpen(false);
    }

    
}
