import { useEffect, useState } from "react";
import { Teacher } from "../../@types/teacher";
import { ApiService } from "../../services/ApiService";

export function useIndex(){
    const [listTeachers, setListTeachers] = useState<Teacher[]>([])

    useEffect(() => {
        ApiService.get('/teachers').then((response)=>{
            setListTeachers(response.data)
        })
    }, [])
    return{
        listTeachers
    }
}