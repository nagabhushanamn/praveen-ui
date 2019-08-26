import React, { Component } from 'react';

class StoryForm extends Component {

    handleSubmit(e) {
        e.preventDefault();
        const { onSubmit } = this.props;
        if (onSubmit) {
            onSubmit({})
        }
    }

    handleChange(e) {
        let { target } = e;
        let { id, value } = target
        const { onChange } = this.props;
        if (onChange)
            onChange({ id, value })
    }
    
    render() {
        const { story } = this.props;
        const { author, body } = story;
        return (
            <div className="card card-body">
                <form onSubmit={e => this.handleSubmit(e)}>
                    <div className="form-group">
                        <label>Author</label>
                        <input
                            value={author}
                            className="form-control"
                            onChange={e => this.handleChange(e)}
                            id="author"
                        />
                    </div>
                    <div className="form-group">
                        <label>Body</label>
                        <textarea
                            value={body}
                            className="form-control"
                            onChange={e => this.handleChange(e)}
                            id="body"
                        >
                        </textarea>
                        {body.length <= 5 ? 'body must be <=5 char' : ''}
                    </div>
                    <button>submit</button>
                </form>
            </div>
        );
    }
}

export default StoryForm;