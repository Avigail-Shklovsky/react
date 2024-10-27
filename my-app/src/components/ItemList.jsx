import React, { useState } from 'react'
import { SelectedItem } from './SelectedItem';

export const ItemList = () => {

    const [selectedItem, setSelectedItem] = useState(null);
    const items = ['Apple', 'Banana', 'Orange', 'Grapes'];

    return (
        <>
        <h1>Select an item</h1>
            {items.map(item => (
                <div>
                    <h2 key={item}>{item}</h2>
                    &nbsp;
                    <button onClick={() => setSelectedItem(selectedItem === item ? null : item)}>Select</button>
                    {/* {selectedItem === item && <SelectedItem item={item} />} */}
                </div>
            ))}
             <SelectedItem item={selectedItem} />

        </>
    )
}
