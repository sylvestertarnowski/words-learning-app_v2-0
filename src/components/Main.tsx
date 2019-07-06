import * as React from 'react';
import NavBar from './NavBar';
import Lists from './lists/Lists';
import Creation from './creation/Creation';
import Learning from './learning/Learning';

type S = {
    currentScreen: 'lists' | 'creation' | 'learning';
}

class Main extends React.Component {
    readonly state = {
        currentScreen: "lists",
    } as S;

    readonly screens = {
        lists: <Lists />,
        creation: <Creation />,
        learning: <Learning />,
    }

    changeScreen = (screen: S["currentScreen"]) => {
        this.setState({
            currentScreen: screen,
        })
    }

    render() {
        const currentScreen = this.screens[this.state.currentScreen];

        return (
            <div className="main-container">
                <NavBar />
                {currentScreen}
            </div>
        )
    }
}

export default Main;