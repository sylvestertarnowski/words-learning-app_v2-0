import * as React from 'react';
import { useState } from 'react';

type S = {
    title: string,
    words: {
        word: string,
        translation: string,
    }[]
}

const Creation: React.FC = () => {
    const [myTitle, setMyTitle] = useState("");
    const [myWords, setMyWords] = useState<S['words']>([]);
    const [nextWord, setNextWord] = useState("");
    const [nextTranslation, setNextTranslation] = useState("");
    

    return (
        <div>
            <h3>Title</h3>
            <input 
                placeholder="List title"
                value={myTitle}
                onChange={
                    ({ target: { value } }) => setMyTitle(value)
                }
            />
            <h3>Words</h3>
            <ul>
                {myWords && myWords.map((item) => <li key={item.word + item.translation}>
                    {item.word} - {item.translation}
                </li>)}
            </ul>
            <form
                onSubmit={
                    (e) => {
                        e.preventDefault();
                        setMyWords([
                            ...myWords,
                            {
                                word: nextWord,
                                translation: nextTranslation,
                            }
                        ])
                    }
                }
            >
                <input
                    placeholder="Word"
                    value={nextWord}
                    onChange={({ target: { value } }) => setNextWord(value)}
                />
                <input
                    placeholder="Translation"
                    value={nextTranslation}
                    onChange={({ target: { value } }) => setNextTranslation(value)}
                />
                <button>
                    Add
                </button>
            </form>
        </div>
    )
}

export default Creation;