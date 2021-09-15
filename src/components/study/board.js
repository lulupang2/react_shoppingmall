import React from 'react';

import BoardInput from './boardinput'
import BoardResult from './boardresult'

function BoardContainer() {

    return (
        <div>
            <div>
                <BoardInput />
            </div>

            <div>
                <BoardResult />
            </div>
        </div>
    )
}

export default BoardContainer;