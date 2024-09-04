const listIcons: getList_IconType = [
    {
        Topic_Id: 'dasd',
        Type: 'dasd',
        Key: 'heart',
        length: 1,
    },
    {
        Topic_Id: 'dasd',
        Type: 'dasd',
        Key: 'like',
        length: 1,
    },
    {
        Topic_Id: 'dasd',
        Type: 'dasd',
        Key: 'star',
        length: 1,
    },

]

export const IconModel = {
    init_Icon: listIcons[0],
    init_List: listIcons
}

export type getList_IconType = {
    Topic_Id: string,
    Type: string,
    Key: 'star' | 'heart' | 'like',
    length: number,
}[]

export type IconType = {
    Topic_Id: string,
    Type: string,
    Key: 'star' | 'heart' | 'like',
    length: number,
}