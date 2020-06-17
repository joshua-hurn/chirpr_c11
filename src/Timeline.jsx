import React from 'react';

const Timeline = props => {
    return props.chirps.map(chirp => {
        return (
            <>
                <h3>{chirp.name}</h3>
                <p>{chirp.message}</p>
            </>
        )
    })
}

export default Timeline