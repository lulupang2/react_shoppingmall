import React from 'react';
import { useSelector } from 'react-redux';

function BoardResult() {
    const { inputData } = useSelector(state => state.BoardCreate)

    return (
        <div>
            결과: <input type="text" value={inputData.content} readOnly/>
        </div>
    )
}

export default BoardResult;