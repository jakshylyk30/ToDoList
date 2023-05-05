import React, {useEffect, useState} from 'react';
import style from './css/TodoList.module.css'
import {Box, Button, List, TextField} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import ToDoItem from "../ToDoItem/ToDoItem";

const TodoList = () => {
    const [input, setInput] = useState('')
    const [bod, setBod] = useState(false)
    const [list, setList] = useState([])
    const inputChange = ({target}) => setInput(target.value)

    const addList = () => {
        if (!input.trim()){
            alert('Input Pust')
        } else {
            setList(prev => [...prev, {
                id: Date.now(),
                text: input
            }])
            setInput('')
        }
    }

    const addListPress = (e) => {
        if (e.key === 'Enter'){
            if (!input.trim()){
                alert('Input Pust')
            } else {
                setList(prev => [...prev, {
                    id: Date.now(),
                    text: input
                }])
                setInput('')
            }
        }
    }

    const changeBody = () => setBod(!bod)



    useEffect(() => {
        document.body.style.background = bod ? 'blueviolet' : 'white'
    }, [bod])

    return (
        <Box className={style.box}>
            <Box>
                {
                    bod
                    ?
                    <Brightness4Icon sx={{transition: '.6s'}} onClick={changeBody}/>
                    :
                    <Brightness5Icon sx={{transition: '.6s'}} onClick={changeBody}/>
                }
            </Box>
            <TextField sx={{background: 'white'}} value={input} onKeyPress={addListPress} onChange={inputChange} label='ToDoList'/>
            <Button variant="contained" onClick={addList} endIcon={<SendIcon />}>Send</Button>
            <List className={style.ul}>
                {
                    list.map(i => <ToDoItem i={i} setList={setList}/>)
                }
            </List>
        </Box>
    );
};

export default TodoList;