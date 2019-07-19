import * as React from 'react';
import { MyContext } from '../Context';

const Learning: React.FC = () => {
    return (
        <MyContext.Consumer>
            {(context) => {
                const { pickedList } = context.state;
                
                if (pickedList === null) {
                    return (
                        <div>
                            Please pick a list!
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