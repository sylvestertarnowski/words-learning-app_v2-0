import * as React from 'react';
import { MyContext } from './Context';
import '../css/NavBar.css';

class NavBar extends React.Component<any, any> {
    render() {
        const { lang, translations } = this.context.state;
        const { catalog, creation, learning, languageLabel } = translations[lang].navBar;
        return (
            <div className="navbar-container">
                <div className="max-width-wrapper">
                <ul className="navbar-navigation-buttons">
                    <li onClick={() => this.props.setScreen('lists')}>
                        {catalog}
                    </li>
                    <li onClick={() => this.props.setScreen('creation')}>
                        {creation}
                    </li>
                    <li onClick={() => this.props.setScreen('learning')}>
                        {learning}
                    </li>
                </ul>
                <label className="navbar-language-dropdown">
                    {languageLabel}:
                <select 
                    onChange={(e) => this.context.setLanguage(e.target.value)}
                >
                    <option value="en">English</option>
                    <option value="pl">Polski</option>
                </select>
                </label>
            </div>
            </div>
        )
    }
}

NavBar.contextType = MyContext;

export default NavBar;