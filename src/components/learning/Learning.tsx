import * as React from 'react';
import { MyContext } from '../Context';

interface P {
    setScreen: (screen: 'lists' | 'creation' | 'learning') => void;
}

const Learning: React.FC<P> = (props) => {
    return (
        <MyContext.Consumer>
            {(context) => {
                const { pickedList } = context.state;
                
                if (pickedList === null) {
                    return (
                        <div>
                            Please pick a list!
                            <button
                                onClick={() => props.setScreen('lists')}
                            >Pick list</button>
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
                        </div>
                    )
                }
            }}
        </MyContext.Consumer>
    )
}

export default Learning;