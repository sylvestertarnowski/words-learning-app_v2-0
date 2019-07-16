import * as React from 'react';
import { MyContext } from '../Context';
import ListItem from './ListItem';

class Lists extends React.Component {
    readonly state = {
    }

    render() {
        const titlesOfLists = this.context.state.lists.map((item: {title: string}) => <ListItem key={item.title}
            title={item.title} />)
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