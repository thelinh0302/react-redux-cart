import { toast } from 'react-toastify';
export const toastSuccess =message=>{
    if(message !== null && typeof message !=='undefined' & message!=='null' ){
        toast.success(message)
    }
}