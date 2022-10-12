import { useState } from "react";
import { Teacher } from "../../@types/teacher";

export function useIndex(){
    const [listTeachers, setListTeachers] = useState<Teacher[]>([
        {
            id: 1,
            name: "Luiz Mateus",
            picture: "https://github.com/luizmateuss.png",
            description: "Aula de música e violão",
            value_hour: 95.36
        },
        {
            id: 2,
            name: "Professor 2",
            picture: "https://github.com/luizmateuss.png",
            description: "Descrição professor 2",
            value_hour: 200
        },
        {
            id: 3,
            name: "Professor 3",
            picture: "https://github.com/luizmateuss.png",
            description: "Descrição professor 3",
            value_hour: 300
        },
        {
            id: 2,
            name: "Professor 2",
            picture: "https://github.com/luizmateuss.png",
            description: "Descrição professor 2",
            value_hour: 200
        }
    ])
    return{
        listTeachers
    }
}