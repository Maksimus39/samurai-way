import React from 'react';

type Props = {
    message: string,
}
export const Message = (props: Props) => {
    const {message} = props;

    return (
        <div>
            {message}
        </div>
    );
};

