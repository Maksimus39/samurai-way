export type PostType = {
    id: number
    post: string
    likes: number
}
export type DialogItemArrayType = {
    id: number
    name: string
}
export type MessageArrayType = {
    id: number
    message: string
}
export type ProfilePageType = {
    postArray: PostType[],

}
export type MessagesPageType = {
    messageArray: MessageArrayType[],
    dialogItemArray: DialogItemArrayType[],
}
export type RootState = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
}


export let state: RootState = {
    profilePage: {
        postArray: [
            {id: 1, post: "Post-1", likes: 20},
            {id: 2, post: "Post-2", likes: 40},
        ],
    },
    messagesPage: {
        messageArray: [
            {id: 1, message: "Сынок, всегда помни: упорство и честность приведут к успеху."},
            {id: 2, message: "Дорогая, верь в себя и никогда не бойся мечтать."},
            {id: 3, message: "Мама, папа, спасибо за поддержку и веру в меня."},
            {id: 4, message: "Брат, помоги мне, пожалуйста, с домашним заданием по математике."}
        ],
        dialogItemArray: [
            {id: 1, name: "Maksim"},
            {id: 2, name: "Larisa"},
            {id: 3, name: "Andrey"},
            {id: 4, name: "Bogdan"}
        ],
    }
}