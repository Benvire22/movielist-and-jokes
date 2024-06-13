import React from 'react';

interface Props {
    name: string;
    id: string;
    onChange: (value: string, id: string) => void;
    onRemove: (id: string) => void;
}

const MovieItem: React.FC<Props> = ({name, id, onChange, onRemove}) => {
    return (
        <div className="row" key={id}>
            <input
                type="text"
                value={name}
                onChange={(e) => onChange(e.target.value, id)}
            />
            <button onClick={() => onRemove(id)}>remove</button>
        </div>
    );
};

export default MovieItem;