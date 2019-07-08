import * as React from 'react';
import { MyContext } from '../Context';

const ListItem: React.FC = (props) => {

    return (
        <MyContext.Consumer>
            {(context) => {
                return (
                    <div>
                        <div> List name placeholder </div>
                        <button>Delete</button>
                        <button>Edit</button>
                        <button>Use</button>
                    </div>
                )
            }}
        </MyContext.Consumer>
    )
}

export default ListItem;