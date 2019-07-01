import * as React from 'react';

const MyContext = React.createContext({} as any);

class MyProvider extends React.Component {
    readonly state = {
        lists: "new list"
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