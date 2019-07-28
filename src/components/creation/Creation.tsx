import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { MyContext } from '../Context';

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
    let inputWord = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setNextWord("");
        setNextTranslation("");
        inputWord.current && inputWord.current.focus();
    }, [myWords])

    return (
        <MyContext.Consumer>
            {(context) => {
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
                                ref={inputWord}
                                type="text"
                                placeholder="Word"
                                value={nextWord}
                                onChange={({ target: { value } }) => setNextWord(value)}
                            />
                            <input
                                type="text"
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
            }}
        </MyContext.Consumer>
    )
}

export default Creation;