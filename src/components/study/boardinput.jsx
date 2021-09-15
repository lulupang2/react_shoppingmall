import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { BoardCreateSave } from './boardcreate';

function BoardInput() {
    const [content, setContent] = useState('')
    const dispatch = useDispatch();

    const onSave = () => {
        dispatch(BoardCreateSave(content))
        setContent('')
    }

    const handleContent = (e) => {
        setContent(e.target.value)
    }

    return (
        <div>
            <div>
                내용: <input type="text" name="content" value={content} onChange={handleContent} />
                <button onClick={onSave}>input</button>
            </div>
        </div>
    );
}

export default BoardInput;
