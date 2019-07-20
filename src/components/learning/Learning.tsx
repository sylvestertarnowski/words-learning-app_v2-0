import * as React from 'react';
import { MyContext } from '../Context';

interface P {
    setScreen: (screen: 'catalog' | 'creation' | 'learning') => void;
}

const Learning: React.FC<P> = (props) => {
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
                            <form>
                                <div>
                                    <span>{currentWord && currentWord.word}</span>
                                    <input type="text" placeholder="Your guess" />
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