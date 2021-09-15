const _SAVE = 'DATA_SAVE';

export const BoardCreateSave = (saveData) => (
    console.log('saveData : ', saveData),
    {
        type: _SAVE,
        inputData: {
            saveData
        },
    })

const initialState = {
    inputData: {
        content: ''
    }
}

export default function BoardCreate(state = initialState, action) {
    switch (action.type) {
        case _SAVE:
            return Object.assign({}, state, {
                inputData: {
                    content: action.inputData.content
                }
            })
        default:
            return state;
    }
}