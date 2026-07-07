import conversationModel from "../models/conversation.model.js";
import messageModel from "../models/message.model.js";
import { getReceiverSocketId, io } from "../socket/socket.js";

export const sendMessage = async (req , res)=>{
    try {
        const { message } = req.body
        const receiverId = req.params.id;
        const senderId = req.user._id;
        let conversation = await conversationModel.findOne({
            participants : {$all : [senderId , receiverId]}

        })
        if (!conversation){
            conversation = await conversationModel.create({
                participants : [senderId , receiverId]
            })
        }
        const newMessage = await messageModel.create({
            senderId : senderId,
            receiverId : receiverId,
            message : message
        })
        if(newMessage){
            conversation.messages.push(newMessage._id);
            await conversation.save()
        }
        // SOCKET IO WILL BE IMPLEMENTED HERE
        const receiverSocketId = getReceiverSocketId(receiverId);
		if (receiverSocketId) {
			// io.to(<socket_id>).emit() used to send events to specific client
			io.to(receiverSocketId).emit("newMessage", newMessage);
		}
        res.status(201).json(newMessage)



        
    } catch (error) {
        console.log("error in sendMessage" , error.message)
        return res.status(500).json({error : "Internal Server Error"});
        
    }
}
export const getMessage = async (req , res)=>{
    try {
        const userToChatId = req.params.id;
        const senderId = req.user._id;
        const conversation = await conversationModel.findOne({
            participants : { $all : [senderId , userToChatId]}
        }).populate("messages")
        if (!conversation){
            return res.status(200).json([])
        }
        const messages = conversation.messages
        res.status(200).json(messages);

        
    } catch (error) {
        console.log("Error in getMessage Controller" , error.message)
        res.status(500).json( { error : "Internal Server error"})
        
    }

}