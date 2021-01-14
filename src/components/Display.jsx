import React from 'react';

const Display = ({tabs, selected}) => {

    // const {tabs, selected} = props; //We can do it this way or the other way if we know exaclty what it will be intaking.




    return (
        <div>
            {
                tabs[selected].content
            }
        </div>
    )
};

export default Display;