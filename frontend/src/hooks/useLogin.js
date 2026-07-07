import { useAuthContext } from "../context/AuthContext"
import toast from "react-hot-toast"
import { useState } from "react"

const useLogin = () => {
    const [loading, setloading] = useState(false)
    const { setAuthUser } = useAuthContext()
    const login = async (username , password)=>{
        if(!username || !password){
            toast.error("All the Fields are required !")
            return
        }
        setloading(true)
        try {
            const res = await fetch("/api/auth/login" , {
                method : "POST",
                headers : {
                    "content-type" : "application/json"
                },
                body : JSON.stringify({username , password})
            })
            const data = await res.json()
            if(data.error){
                throw new Error(data.error);
            }
            localStorage.setItem("chat-user" , JSON.stringify(data))
            setAuthUser(data)
            
        } catch (error) {
            toast.error(error.message)
            
        }
        finally{
            setloading(false)

        }
    }
    return {loading , login}

  
}

export default useLogin