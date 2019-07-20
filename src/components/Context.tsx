import * as React from 'react';
import translations from './translations.js';
import wordsListsSeed from './wordsListsSeed.js';

const MyContext = React.createContext({} as any);

type CurrentList = {
    title: string,
    words: {word: string, translation: string,}[],
}

type CurrentWord = {
    word: string;
    translation: string;
}

class MyProvider extends React.Component {
    readonly state = {
        lang: 'en',
        translations: {
            ...translations,
        },
        ...wordsListsSeed,
        currentList: null as CurrentList | null,
        currentWord: null as CurrentWord | null,
    }

    setLanguage = (lang: 'en' | 'pl') => {
        this.setState({
            lang: lang,
        })
    }

    setPickedList = (title: string) => {
        const { lists, currentList } = this.state;

        if (currentList && title === currentList.title) {
            return;
        } else {
            for (let i = 0; i < lists.length; i++) {
                if (lists[i].title === title) {
                    this.setState({
                        pickedList: lists[i],
                    })
                    return;
                }
            }
        }
    }

    setPickedWord = () => {
        const { currentList } = this.state;
        if (currentList) {
            const { words } = currentList;
            const randomWord = words[Math.floor(Math.random()*words.length)]
            this.setState({
                currentWord: randomWord,
            })
        }

    }

    render() {
        return (
            <MyContext.Provider
                value={{
                    state: this.state,
                    setLanguage: this.setLanguage,
                    setPickedList: this.setPickedList,
                }}
            >
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export { MyProvider, MyContext }