import{useEffect, useState} from 'react';
import firebase from '../firebase'
export const useRooms = () => {
    
    const [rooms, setRooms] = useState([])
    useEffect(() => {
      const unsubscribe= firebase.firestore()
            .collection('rooms')
            .onSnapshot((snapshot) => {
                const newRooms = 
                snapshot.docs.map((doc) => {
                   return ({...doc.data()})
                })       
                setRooms(newRooms)
            })
        return ()=> unsubscribe()
    }, [])

    return rooms
}