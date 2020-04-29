export default class Message{
    constructor(){
        this.id=0
        this.message={
        "user1":[{id: this.id++,
        message: "Hi2",
        receiver: "user2"
        },{id: this.id++,
        message: "hello2",
        receiver: "user2"
        },{id: this.id++,
        message: "Ssup2",
        receiver: "user2"
        }],
        "user2":[{
        id: this.id++,
        message: "Hi1",
        receiver: "user1"
        },{id: this.id++,
        message: "Hello1",
        receiver: "user1"
        },{id: this.id++,
        message: "Hi1",
        receiver: "user1"}]
        }
    }
    getMessages = (user,receiver) => {
        return [...(this.message[user].filter(message => message[receiver]==receiver)),
        ...(this.message[receiver].filter(message => message[receiver]==user))]
    }
    addMessage = (user,receiver,message) => {
        this.message[user].push({
        id:this.id++,
        message:this.message,
        receiver:receiver
        })
    }

}