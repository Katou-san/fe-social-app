const get_Mess_Init = {
    Message_Id: '',
    Message_Topic: '',
    User_Id: '',
    Content: '',
    Files: '',
    Type: 0,
    Post_Time: '',
}
const create_Mess = {
    Message_Topic: '',
    Content: '',
    Files: null,
    Type: 0,
}

const update_Mess = {
    Content: '',
}

export const messageModel = {
    init_list: [get_Mess_Init],
    init_item: get_Mess_Init,
    init_create: create_Mess,
    init_update: update_Mess
}


export type createMess_Type = {
    Message_Topic: string,
    Content: string,
    Files: File | File[] | null,
    Type: number,
}