
// services 

const store = {
    subscribe(listener){
        //..
    },
    getState() {
        return {
            topics: [
                'java',
                'javascript',
                'python'
            ],
            comments: {
                'java': [
                    'java is mother language',
                    'bla bla'
                ]
            }
        }
    }
}

export default store;