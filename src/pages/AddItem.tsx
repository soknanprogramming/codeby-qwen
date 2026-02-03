import React, { useState }from "react";

const AddItem: React.FC = () => {
    const [items, setItems] = useState<Array<string>>([])
    const [inputValue, setInputValue] = useState<string>('')
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setItems([...items, inputValue])
        setInputValue('')
    }
    return (
        <div>
            <div>
                <h1>Add Item Page</h1>
                <form onSubmit={handleSubmit} className="bg-amber-100 w-95 ml-2 px-2 py-3 rounded-sm">
                    <label htmlFor="item">Input Item: </label>
                    <input id="item" type="text" className="bg-neutral-300 border text-sm rounded-sm px-2.5 py-1.5 shadow-xs mr-2" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                    <button type="submit" className="bg-red-500 text-white px-2.5 py-1.5 rounded-sm hover:cursor-pointer hover:bg-red-600 focus:bg-red-400 focus:border-blue-600 box-border border-2 border-solid border-amber-100">Add Item</button>
                </form>
            </div>
            {/* list items*/}
            <div>
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
        
    );
};

export default AddItem;