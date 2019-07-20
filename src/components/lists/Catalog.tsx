import * as React from 'react';
import { MyContext } from '../Context';
import CatalogItem from './CatalogItem';

class Catalog extends React.Component {
    readonly state = {
    }

    render() {
        const titlesOfLists = this.context.state.lists.map((item: {title: string}) => <CatalogItem key={item.title}
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

Catalog.contextType = MyContext;

export default Catalog;