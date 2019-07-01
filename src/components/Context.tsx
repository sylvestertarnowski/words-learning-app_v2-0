import * as React from 'react';

const MyContext = React.createContext({} as any);

class MyProvider extends React.Component {
    readonly state = {
        lang: 'en',
        en: {
            "list 1": {
                title: "List 1"
            },
            "list 2": {
                title: "List 2"
            },
            "list 3": {
                title: "List 3"
            },
        },
        pl: {
            "list 1": {
                title: "List 1"
            },
            "list 2": {
                title: "List 2"
            },
            "list 3": {
                title: "List 3"
            },
        },
    }

    render() {
        return (
            <MyContext.Provider
                value={{
                    state: this.state,
                }}
            >
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export { MyProvider, MyContext }