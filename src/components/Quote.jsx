import React from 'react';

const Quote = (props) => {
    const { quoteData } = props;
    return (
        <div>
            <p>{quoteData}</p>
        </div>
    );
};

export default Quote;
