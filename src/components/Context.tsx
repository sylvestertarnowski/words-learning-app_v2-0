import * as React from 'react';
import translations from './translations.js';

const MyContext = React.createContext({} as any);

class MyProvider extends React.Component {
    readonly state = {
        lang: 'en',
        translations: {
            ...translations,
        },
        en: [
            {
                title: "List 1"
            },
            {
                title: "List 2"
            },
            {
                title: "List 3"
            },
        ],
        pl: [
            {
                title: "List 1"
            },
            {
                title: "List 2"
            },
            {
                title: "List 3"
            },
        ],
    }

    setLanguage = (lang: 'en' | 'pl') => {
        this.setState({
            lang: lang,
        })
    }

    render() {
        return (
            <MyContext.Provider
                value={{
                    state: this.state,
                    setLanguage: this.setLanguage,
                }}
            >
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export { MyProvider, MyContext }