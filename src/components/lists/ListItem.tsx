import * as React from 'react';
import { MyContext } from '../Context';

type P = {
    title: string;
}

const ListItem: React.FC<P> = (props) => {

    return (
        <MyContext.Consumer>
            {(context) => {
                const { lang, translations } = context.state
                const { label, remove, edit, use } = translations[lang].listItem
                return (
                    <div>
                        <div>{label}: {props.title} </div>
                        <button>{remove}</button>
                        <button>{edit}</button>
                        <button 
                            onClick={context.setPickedList(props.title)}
                        >{use}</button>
                    </div>
                )
            }}
        </MyContext.Consumer>
    )
}

export default ListItem;