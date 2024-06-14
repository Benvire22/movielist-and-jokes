import React from 'react';

interface Props {
  name: string;
  id: string;
  onChange: (value: string, id: string) => void;
  onRemove: React.MouseEventHandler;
}

const MovieItem: React.FC<Props> = React.memo(({name, id, onChange, onRemove}) => {
  return (
    <div className="input-group d-flex gap-3 mb-3 w-75">
      <input
        className="form-control rounded fs-5"
        type="text"
        value={name}
        onChange={(e) => onChange(e.target.value, id)}
      />
      <button className="btn btn-danger rounded" onClick={onRemove}>remove</button>
    </div>
  );
}, (prevProps, nextProps) => {
  return nextProps.name === prevProps.name && nextProps.id === prevProps.id;
});

export default MovieItem;