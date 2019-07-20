import * as React from 'react';
import translations from './translations.js';
import wordsListsSeed from './wordsListsSeed.js';

const MyContext = React.createContext({} as any);

interface PickedList {
    title: string,
    words: PickedWord[],
}

interface PickedWord {
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
        pickedList: null as PickedList | null,
        pickedWord: null as PickedWord | null,
    }

    setLanguage = (lang: 'en' | 'pl') => {
        this.setState({
            lang: lang,
        })
    }

    setPickedList = (title: string) => {
        const { lists, pickedList } = this.state;

        if (pickedList && title === pickedList.title) {
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