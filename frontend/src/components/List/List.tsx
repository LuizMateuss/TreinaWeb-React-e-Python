import { Button } from "@mui/material";
import { useState } from "react";
import { Teacher } from "../../@types/teacher";
import { FormatterService } from "../../services/FormatterService";
import { Description, EmptyList, Informations, ItemList, ListsStyled, Name, Picture, Value } from "./List.style";

interface ListProps{
    teachers: Teacher[],
}

const List = (props: ListProps) => {
    return (
        <div>
            {props.teachers.length > 0 ? (
                <ListsStyled>
                    {props.teachers.map(teacher => (
                    <ItemList key={teacher.id}>
                        <Picture src={teacher.picture}></Picture>
                        <Informations>
                            <Name>{teacher.name}</Name>
                            <Value>{FormatterService.monetaryValue(teacher.value_hour)} por hora</Value>
                            <Description>{FormatterService.limitText(teacher.description, 20)}</Description>
                            <Button sx={{width: '70%'}}>Marcar Aula com {teacher.name}</Button>
                        </Informations>
                    </ItemList>
                    ))}
                </ListsStyled>
            ) : (
                <EmptyList>Nenhum item encontrado</EmptyList>
            )}
        </div>
    )
}

export default List;

/*
o metodo toLocaleString pode ser usado para colocar padronização de moedas e valores monetários
*/