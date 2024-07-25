import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';
import Picturesimg from './Picturesimg.jsx';
import '../App.css';

const pictures = [
    {
        id: 1,
        url: p1,
    },
    {
        id: 2,
        url: p2,
    },
    {
        id: 3,
        url: p3,
    },
];

export default function DragDrop() {
    const [board, setBoard] = useState([]);

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "image",
        drop: (item) => addImageToBoard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));
    //for normal drag and drop allows duplicates
    const addImageToBoard = (id) => {
        const picture = pictures.find((pic) => pic.id === id);
        // Find the picture object from the 'pictures' array that matches the given 'id'       
        setBoard((board) => [...board, picture]);
        // Update the 'board' state by adding the found picture to the existing 'board' array
    };
    //for no duplicates
    const isAlreadyOnBoard = board.some((pic) => pic.id === id);
    if (!isAlreadyOnBoard) {
        const picture = pictures.find((pic) => pic.id === id);
        setBoard((board) => [...board, picture]);
    }
};

return (
    <>
        <div className='center'>
            {pictures.map((images) => {
                return (
                    <Picturesimg key={images.id} url={images.url} id={images.id} />
                );
            })}
        </div>
        <div className="flex-container" ref={drop}>
            <div className={isOver ? 'drop-zone-over' : 'drop-zone'}>
                {board.map((pic) => {
                    return (
                        <Picturesimg key={pic.id} url={pic.url} id={pic.id} />
                    );
                })}
            </div>
        </div>
    </>
);
}
