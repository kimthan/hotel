import React from 'react';
import { CheckRoom } from './checkRoom';
import { RoomActivity } from './roomActivity';
import { Statistics } from './statistics';

export const Info = () => {
    return (
        <div className="info">
            <CheckRoom />
            <RoomActivity />
            <Statistics />
        </div>
    )
}