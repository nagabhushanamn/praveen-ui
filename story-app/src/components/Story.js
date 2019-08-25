import React, { Component } from 'react';

class Story extends Component {
    handleTrashClick(e) {
        e.preventDefault();
        const { value, onDelete } = this.props;
        const { id } = value;
        if (onDelete)
            onDelete({ id })

    }
    handleEditClick(e) {
        e.preventDefault();
        const { value, onEdit } = this.props;
        const { id } = value;
        if (onEdit)
            onEdit({ id })

    }
    render() {
        const { value } = this.props;
        const { author, body } = value;
        return (
            <div className="alert alert-info">
                &mdash;<span>{author}</span>
                <hr />
                <div>{body}</div>
                <hr />
                <a href="/" onClick={e => this.handleTrashClick(e)}><i className="fa fa-trash"></i></a>
                &nbsp;&nbsp;
                <a href="/" onClick={e => this.handleEditClick(e)}><i className="fa fa-edit"></i></a>
            </div>
        );
    }
}

export default Story;