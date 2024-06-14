import React from 'react';

interface Props {
    name: string;
    id: string;
    onChange: (value: string, id: string) => void;
    onRemove: React.MouseEventHandler;
}

const MovieItem: React.FC<Props> = React.memo(  ({name, id, onChange, onRemove}) => {
    console.log('[MovieItem] mounted/changed', name);

    return (
        <div className="row">
            <input
                type="text"
                value={name}
                onChange={(e) => onChange(e.target.value, id)}
            />
            <button onClick={onRemove}>remove</button>
        </div>
    );
}, (prevProps, nextProps) => {
    return nextProps.name === prevProps.name && nextProps.id === prevProps.id;
});

export default MovieItem;