import React, { useState, useEffect } from 'react'
import { SelectedItem } from './SelectedItem';

export const ItemList = () => {

    const [selectedItem, setSelectedItem] = useState(null);
    const items = ['Apple', 'Banana', 'Orange', 'Grapes'];

    useEffect(() => {
        if (selectedItem) {
            console.log(`Selected Item: ${selectedItem}`);
        }
    }, [selectedItem]);

    return (
        <>
            <h1>Select an item</h1>
            {items.map(item => (
                <div>
                    <h2 key={item}>{item}</h2>
                    &nbsp;
                    <button onClick={() => setSelectedItem(selectedItem === item ? null : item)}>Select</button>
                </div>
            ))}

            <SelectedItem item={selectedItem} />

        </>
    )
}
