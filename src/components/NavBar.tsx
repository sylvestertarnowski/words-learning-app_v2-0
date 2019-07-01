import * as React from 'react';
import { MyContext } from './Context';

class NavBar extends React.Component {
    render() {
        return (
            <div>
                <MyContext.Consumer>
                    {(context) => {
                        return (
                            context.state.lists
                        )
                    }}
                </MyContext.Consumer>
            </div>
        )
    }
}

export default NavBar;