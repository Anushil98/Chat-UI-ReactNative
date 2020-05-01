export default class Message{
    constructor(){
        this.id=0
        this.message={
        "Anushil":[],
        "Anurima":[]
        }
    }
    getMessages = (user,receiver) => {
        return [...[...(this.message[user].filter(message => message["receiver"]==receiver)),
        ...(this.message[receiver].filter(message => message["receiver"]==user))].sort((message1,message2)=>(message1.id-message2.id))]
    }
    addMessage = (user,receiver,message) => {
        this.message[user]=[...this.message[user],{id:this.id++,message:message,receiver:receiver}]
    }
}