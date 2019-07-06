import * as React from 'react';
import { MyContext } from './Context';

class NavBar extends React.Component<any, any> {


    render() {
        return (
            <div>
                <MyContext.Consumer>
                    {(context) => {
                        return (
                            <div>
                                <ul>
                                    <li onClick={() => this.props.setScreen('lists')}>Lists</li>
                                    <li onClick={() => this.props.setScreen('creation')}>Creation</li>
                                    <li onClick={() => this.props.setScreen('learning')}>Learning</li>
                                </ul>

                                <select>
                                    <option>English</option>
                                    <option>Polski</option>
                                </select>
                            </div>
                        )
                    }}
                </MyContext.Consumer>
            </div>
        )
    }
}

export default NavBar;