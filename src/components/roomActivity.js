import React from 'react';

export const RoomActivity = () => {

    return (
        <div className="info__roomstatus">
            <>
                <div className="info__title">Room activity</div>
                <ul>
                    <li>Room 202 checked by Van <span className="info__roomstatus--timeago">1 mins ago</span></li>
                    <li>Room 202 cleaned by Kim <span className="info__roomstatus--timeago">23 mins ago</span></li>
                    <li>Room 203 cleaned by Kim <span className="info__roomstatus--timeago">44 mins ago</span></li>
                    <li>Room 204 cleaned by Kim <span className="info__roomstatus--timeago">44 mins ago</span></li>
                    <li>Room 205 cleaned by Kim <span className="info__roomstatus--timeago">55 mins ago</span></li>
                </ul>
            </>
        </div>

    )
}