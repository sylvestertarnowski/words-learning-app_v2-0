import * as React from 'react';
import { MyContext } from '../Context';

type S = {
    [key: string]: any,
}

class Lists extends React.Component {
    readonly state = {
    } as S;

    componentDidMount() {
        this.setState({
            ...this.context.state[this.context.state.lang]
        })
    }

    render() {
        const lists = Object.keys(this.state);
        const titlesOfLists = lists.map(item => <li key={item}>
            Title: {item}
        </li>)

        return (
            <div>
                <ul>
                    {titlesOfLists}
                </ul>
            </div>
        )
    }
}

Lists.contextType = MyContext;

export default Lists;