import * as React from 'react';
import { MyContext } from '../Context';
import ListItem from './ListItem';


type S = {
    loading: boolean,
    lang: 'pl' | 'en',
    en: { title: string }[],
    pl: { title: string }[],
    titlesOfLists: string | JSX.Element[],
}

class Lists extends React.Component {
    readonly state = {
        loading: true,
        titlesOfLists: 'Loading...',
    } as S;



    componentDidMount() {
        const { lang, pl, en } = this.context.state;
        this.setState({
            lang: lang,
            en: en,
            pl: pl,
        }, this.getTitles)
    }

    getTitles = () => {
        const titlesOfLists = this.state[this.state.lang].map(item => <ListItem key={item.title}
            title={item.title} />)
        this.setState({
            titlesOfLists: titlesOfLists,
        })
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.titlesOfLists}
                </ul>
            </div>
        )
    }
}

Lists.contextType = MyContext;

export default Lists;