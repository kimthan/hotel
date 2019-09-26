import React from 'react';
import {useRooms} from './useRooms'
export const Statistics = () => {

    const rooms = useRooms()

    const totalRoom = status =>{
        
        const totalRooms = rooms.filter(room => {
            return room.status === status
        }).length

        return totalRooms
    }


    return (
        <div className="info__statistics">
            <div className="info__title">Room statistics</div>
            <div className="info__statistics__container">
                <div className="info__statistics__today">
                    <div className="info__statistics__today__title">today</div>
                    <ul>
                        <li>check out: {totalRoom('checkout')}</li>
                        <li>stay over: {totalRoom('stayover')}</li>
                        <li>rooms to be cleaned: {totalRoom('checkout') + totalRoom('stayover') }</li>
                    </ul>
                </div>
                <div className="info__statistics__current">
                    <div className="info__statistics__current__title">current</div>
                    <ul>
                        <li>Do not disturb: 4 rooms</li>
                        <li>Done: 10 of 33 rooms</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}