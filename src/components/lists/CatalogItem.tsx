import * as React from 'react';
import { MyContext } from '../Context';

type P = {
    title: string;
}

const CatalogItem: React.FC<P> = (props) => {

    return (
        <MyContext.Consumer>
            {(context) => {
                const { lang, translations } = context.state
                const { label, remove, edit, use } = translations[lang].catalogItem
                return (
                    <div>
                        <div>{label}: {props.title} </div>
                        <button>{remove}</button>
                        <button
                            onClick={() => context.setCurrentList(props.title)}
                        >{edit}</button>
                        <button 
                            onClick={() => context.setCurrentList(props.title)}
                        >{use}</button>
                    </div>
                )
            }}
        </MyContext.Consumer>
    )
}

export default CatalogItem;