import { createContext, useEffect, useState, useContext } from "react";
import { useAuthContext } from "./AuthContext";
import { io } from "socket.io-client";

const SocketContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useSocketContext = () => {
    return useContext(SocketContext);
}

// eslint-disable-next-line react/prop-types
export const SocketContextProvider = ({ children }) => {

    const [socket, setSocket] = useState(null);
    // eslint-disable-next-line no-unused-vars
    const [onlineUsers, setOnlineUsers] = useState([]);

    const { authUser } = useAuthContext();

    useEffect(() => {
        if (authUser) {
            // eslint-disable-next-line no-undef
            const socket = io(process.env.REACT_APP_SERVER_URL, {
            // const socket = io('http://localhost:5000', {
                query: {
                    userId: authUser._id
                }
            });

            setSocket(socket);

            socket.on('getOnlineUsers', (users) => {
                setOnlineUsers(users);
            });

            return () => socket.close();
        } else {
            // if (socket) {
            //     socket.close();
            //     setSocket(null);
            // }
            setSocket(null);
        }
    }, [authUser]);

    return <SocketContext.Provider value={{socket, onlineUsers}}>
            {children}
        </SocketContext.Provider>
    
}