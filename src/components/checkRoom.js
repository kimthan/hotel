import React from 'react';
import {useRooms} from './useRooms'

export const CheckRoom = () => {
    const rooms = useRooms()

    const filteredList = rooms.filter(room => {
        return room.status === 'clean'
    })

    const roomList = filteredList.map(room => {
        return(
            <div className="info__checkroom__room" key={room.id}>{room.id}</div>
        )
    })

    return (
       
        <div className="info__checkroom">
            <div>
                <div className="info__title">Room ready to be checked</div>
                <div className="info__checkroom__container">
                   {roomList}
                    
                </div>
            </div>
        </div>

    )
}