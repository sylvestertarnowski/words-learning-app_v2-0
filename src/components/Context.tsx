import * as React from 'react';
import translations from './translations.js';
import wordsListsSeed from './wordsListsSeed.js';

const MyContext = React.createContext({} as any);

type CurrentList = {
    title: string,
    words: CurrentWord[],
}

type CurrentWord = {
    word: string;
    translation: string;
}

type SubmitMsg = 'Correct!' | 'Wrong!' | null;

class MyProvider extends React.Component {
    readonly state = {
        lang: 'en',
        translations: {
            ...translations,
        },
        ...wordsListsSeed,
        currentList: null as CurrentList | null,
        currentWord: null as CurrentWord | null,
        submitMsg: null as SubmitMsg,
        prevTranslation: "" as string,
    }

    setLanguage = (lang: 'en' | 'pl') => {
        this.setState({
            lang: lang,
        })
    }

    setCurrentList = (title: string) => {
        const { lists, currentList } = this.state;

        if (currentList && title === currentList.title) {
            return;
        } else {
            for (let i = 0; i < lists.length; i++) {
                if (lists[i].title === title) {
                    this.setState({
                        currentList: lists[i],
                    }, this.setCurrentWord)
                    return;
                }
            }
        }
    }

    setCurrentWord = () => {
        const { currentList } = this.state;
        if (currentList) {
            const { words } = currentList;
            const randomWord = words[Math.floor(Math.random()*words.length)]
            this.setState({
                currentWord: randomWord,
            })
        }
    }

    removeGuessedWord = (myGuess: string, callback: any) => {
        const { currentList } = this.state;
        if (currentList) {
            const { words } = currentList;
            const filteredList = words.filter((word: CurrentWord) => {
                return word.translation !== myGuess;
            })
            this.setState({
                currentList: {
                    ...currentList,
                    words: filteredList,
                }
            })
        } 

    }

    guessAttempt = (myGuess: string) => {
        const { currentWord } = this.state;
        if (currentWord) {
        const { translation } = currentWord;
            if (myGuess === translation) {
                this.removeGuessedWord(myGuess, this.setState({
                    submitMsg: 'Correct!',
                    prevTranslation: translation,
                }, this.setCurrentWord))
            } else {
                this.setState({
                    submitMsg: 'Wrong!',
                    prevTranslation: translation,
                }, this.setCurrentWord)
            }
        }
    }

    render() {
        return (
            <MyContext.Provider
                value={{
                    state: this.state,
                    setLanguage: this.setLanguage,
                    setCurrentList: this.setCurrentList,
                    guessAttempt: this.guessAttempt,
                }}
            >
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export { MyProvider, MyContext }