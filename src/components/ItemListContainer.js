import React from 'react';

function ItemListContainer(props) {
    const {subtitulo} = props;
    return (
        <>
        <p>{subtitulo}</p>
        </>
    );
}

export default ItemListContainer;