import React from 'react';
import style from '../TodoList/css/TodoList.module.css'
import {Button, ListItem, Typography} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const ToDoItem = ({i, setList}) => {

    const deleted = (id) => {
        setList(prev => prev.filter(i => i.id !== id))
    }

    return (
        <ListItem className={style.li}>
            <Typography>{i.text}</Typography>
            <Button variant="contained" onClick={() => deleted(i.id)} startIcon={<DeleteIcon />}>Delete</Button>
        </ListItem>
    );
};

export default ToDoItem;