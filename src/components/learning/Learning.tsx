import * as React from 'react';
import { MyContext } from '../Context';
import { useState } from 'react';

type P = {
    setScreen: (screen: 'catalog' | 'creation' | 'learning') => void,
}

const Learning: React.FC<P> = (props) => {
    const [myGuess, setMyGuess] = useState('');

    return (
        <MyContext.Consumer>
            {(context) => {
                const { currentList, currentWord } = context.state;

                if (currentList === null) {

                    return (
                        <div>
                            Please pick a list from the catalog, or create a new list.
                            <button
                                onClick={() => props.setScreen('catalog')}
                            >
                                Pick list
                            </button>
                            <button
                                onClick={() => props.setScreen('creation')}
                            >
                                Create List
                            </button>
                        </div>
                    )
                } else if (currentList.words.length === 0) {
                    return (
                        <div>
                            Which list do you want to use?
                            <button>Same list</button>
                            <button>Another list</button>
                        </div>
                    )
                } else {

                    const listOfCurrentWords = currentList.words.map((word: any) => {
                        return (
                            <li key={word.word}>{word.word}</li>
                        )
                    })

                    return (
                        <div>
                            <ul>
                                {listOfCurrentWords}
                            </ul>
                            <form
                                onSubmit={
                                    (e) => {
                                        e.preventDefault();
                                        return context.guessAttempt(myGuess);
                                    }
                                }
                            >
                                <div>
                                    <span>{currentWord && currentWord.word}</span>
                                    <input 
                                        type="text" 
                                        name="myGuess"
                                        value={myGuess}
                                        onChange={({target: {value}}) => setMyGuess(value)}
                                    />
                                </div>
                                <button>
                                    Guess!
                                </button>
                            </form>
                        </div>
                    )

                }
            }}
        </MyContext.Consumer>
    )
}

export default Learning;