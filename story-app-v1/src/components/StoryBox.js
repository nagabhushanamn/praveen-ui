import React, { Component } from 'react';
import Story from './Story';
import StoryForm from './StoryForm';

class StoryBox extends Component {
    state = {
        stories: [
            {
                id: 1,
                author: 'Nag',
                body: 'title-1'
            },
            {
                id: 2,
                author: 'Praveen',
                body: 'title-2'
            }
        ],

        story: {
            id: 0,
            author: '',
            body: ''
        },

        isEditing: false

    }

    handleChange(e) {
        const { id, value } = e;
        console.log(id)
        let { story } = this.state;
        story = { ...story, [id]: value } // copy
        this.setState({ story })
    }

    deleteStory(e) {
        const { id } = e;
        let { stories } = this.state;
        stories = stories.filter(story => story.id !== id)
        this.setState({ stories });
    }
    editStory(e) {
        const { id } = e;
        let { stories } = this.state;
        let story = stories.find(story => story.id === id)
        this.setState({ story, isEditing: true });
    }
    saveOrUpdate() {
        const { story, isEditing } = this.state;
        let newList = [];
        if (isEditing) {
            const { stories } = this.state;
            newList = stories.map((sto, idx) => {
                if (sto.id === story.id) {
                    return { ...story }
                } else {
                    return sto;
                }
            })
        } else {
            let nextId = Math.floor(Math.random() * 1000);
            story.id = nextId;
            let { stories } = this.state;
            newList = [story, ...stories]

        }
        this.setState({ stories: newList }, () => {
            let story = {
                id: 0,
                author: '',
                body: ''
            }
            this.setState({ story, isEditing: false })
        })
    }
    renderStories() {
        const { stories } = this.state;
        return stories.map((story, idx) => {
            return <Story
                key={idx} value={story}
                onDelete={e => this.deleteStory(e)}
                onEdit={e => this.editStory(e)} />
        })
    }
    render() {
        const { story } = this.state;
        return (
            <div className="card card-body">
                <StoryForm
                    onSubmit={e => this.saveOrUpdate(e)}
                    onChange={e => this.handleChange(e)}
                    story={story}
                />
                <hr />
                {this.renderStories()}
            </div>
        );
    }
}

export default StoryBox;