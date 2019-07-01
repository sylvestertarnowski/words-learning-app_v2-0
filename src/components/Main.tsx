import * as React from 'react';
import NavBar from './NavBar';
import Lists from './lists/Lists';

class Main extends React.Component {
    render() {
        return (
            <div className="main-container">
                <NavBar />
                <Lists />
            </div>
        )
    }
}

export default Main;