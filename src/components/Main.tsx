import * as React from 'react';
import NavBar from './NavBar';
import Catalog from './lists/Catalog';
import Creation from './creation/Creation';
import Learning from './learning/Learning';

type S = {
    currentScreen: 'catalog' | 'creation' | 'learning';
}

class Main extends React.Component {
    readonly state = {
        currentScreen: 'catalog',
    } as S;
    
    setScreen = (screen: S["currentScreen"]) => {
        this.setState({
            currentScreen: screen,
        })
    }

    readonly screens = {
        catalog: <Catalog />,
        creation: <Creation />,
        learning: <Learning setScreen={this.setScreen} />,
    }

    render() {
        const currentScreen = this.screens[this.state.currentScreen];

        return (
            <div className="main-container">
                <NavBar setScreen={this.setScreen} />
                {currentScreen}
            </div>
        )
    }
}

export default Main;