import * as React from 'react';
import { MyContext } from '../Context';

interface P {
    setScreen: (screen: 'lists' | 'creation' | 'learning') => void;
}

const Learning: React.FC<P> = (props) => {
    return (
        <MyContext.Consumer>
            {(context) => {
                const { pickedList, pickedWord } = context.state;
                
                if (pickedList === null) {
                    return (
                        <div>
                            Please pick a list for the catalog, or create a new list.
                            <button
                                onClick={() => props.setScreen('lists')}
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
                    const listOfCurrentWords = pickedList.words.map((word: any) => {
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
                                    <span>{pickedWord.word}</span>
                                    <input type="text" placeholder="Your guess" />
                                </div>
                                <button>
                                    Try
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