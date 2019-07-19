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
                    return (
                        <div>
                            Learning !!!!
                        </div>
                    )
                }
            }}
        </MyContext.Consumer>
    )
}

export default Learning;