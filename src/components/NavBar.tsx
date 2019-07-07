import * as React from 'react';
import { MyContext } from './Context';
import '../css/NavBar.css';

class NavBar extends React.Component<any, any> {
    render() {
        const { lang, translations } = this.context.state;
        const { lists, creation, learning } = translations[lang].navBar;
        return (
            <div className="navbar-container">
                <ul className="navbar-navigation-buttons">
                    <li onClick={() => this.props.setScreen('lists')}>
                        {lists}
                    </li>
                    <li onClick={() => this.props.setScreen('creation')}>
                        {creation}
                    </li>
                    <li onClick={() => this.props.setScreen('learning')}>
                        {learning}
                    </li>
                </ul>

                <select 
                    className="navbar-language-dropdown"
                    onChange={(e) => this.context.setLanguage(e.target.value)}
                >
                    <option value="en">English</option>
                    <option value="pl">Polski</option>
                </select>
            </div>
        )
    }
}

NavBar.contextType = MyContext;

export default NavBar;