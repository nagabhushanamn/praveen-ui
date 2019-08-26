
import React from 'react';

const Summary = (props) => {
    const {value} = props;
    return (
        <div className="alert alert-info">
            Total Actions : <span className="badge badge-danger">{value}</span>
        </div>
    );
};

export default Summary;
