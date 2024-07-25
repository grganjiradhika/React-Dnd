import React from 'react';
import { useDrag } from 'react-dnd';

export default function Picturesimg({ id, url }) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "image",
        item: { id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return (
        <img
            ref={drag}
            src={url}
            alt={`pic-${id}`}
            style={{ opacity: isDragging ? 0.5 : 1 }}
            className="picture"
        />
    );
}
