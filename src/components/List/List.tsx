import { Button } from "@mui/material";
import { Teacher } from "../../@types/teacher";
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
                            <Value>{teacher.value_hour.toLocaleString('pt-BR', {minimumFractionDigits: 2, style: 'currency', currency: 'BRL'})} por hora</Value>
                            <Description>{teacher.description}</Description>
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