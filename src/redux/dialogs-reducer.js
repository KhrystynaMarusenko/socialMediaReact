const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Dmytro'},
        {id: 2, name: 'Roma'},
        {id: 3, name: 'Alina'},
        {id: 4, name: 'Misha'},
        {id: 5, name: 'Oksana'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hi'},
        {id: 3, message: 'Hi'},
        {id: 4, message: 'Hi'},
        {id: 5, message: 'Hi'}
    ],
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type){
        case SEND_MESSAGE:
            let body = action.newMessage;
            return {
                ...state,
                messages : [...state.messages,  {id: 6, message: body}]
            }
        default:
            return  state;
    }

}
export  const sendMessageCreator = (newMessage) => {
    return {
        type: SEND_MESSAGE,
        newMessage
    }
}

export default dialogsReducer