export default class Message{
    constructor(){
        this.id=0
        this.message={
        "Anushil":[{id: this.id++,
        message: "Hi2",
        receiver: "Anurima"
        },{id: this.id++,
        message: "hello2",
        receiver: "Anurima"
        },{id: this.id++,
        message: "Ssup2",
        receiver: "Anurima"
        }],
        "Anurima":[{
        id: this.id++,
        message: "Hi1",
        receiver: "Anushil"
        },{id: this.id++,
        message: "Hello1",
        receiver: "Anushil"
        },{id: this.id++,
        message: "Hi1",
        receiver: "Anushil"}]
        }
    }
    getMessages = (user,receiver) => {
        return [...(this.message[user].filter(message => message["receiver"]==receiver)),
        ...(this.message[receiver].filter(message => message["receiver"]==user))]
    }
    addMessage = (user,receiver,message) => {
        this.message[user]=[...this.message[user],{id:this.id++,message:message,receiver:receiver}]
    }
}