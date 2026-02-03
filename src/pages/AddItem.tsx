import React, { useState } from "react";
import SideBar from "../components/AddItem/SideBar";
import useItems from "../stores/useItems";

const AddItem: React.FC = () => {
    const { addItem } = useItems()
    const [inputTitle, setInputTitle] = useState<string>('')
    const [inputDescription, setInputDescription] = useState<string>('')
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        addItem({ title: inputTitle, description: inputDescription })
        setInputTitle('')
        setInputDescription('')
    }
    return (
        <div className="flex flex-1">
            <SideBar />
            <main className="flex-1 p-2">
                <div>
                    <form onSubmit={handleSubmit} className="bg-amber-100 w-95 px-2 py-3 rounded-sm">
                        <label htmlFor="item">Input Item: </label>
                        <input id="item" type="text" className="bg-neutral-300 border text-sm rounded-sm px-2.5 py-1.5 shadow-xs mr-2" value={inputTitle} onChange={(e) => setInputTitle(e.target.value)} />
                        <button type="submit" className="bg-red-500 text-white px-2.5 py-1.5 rounded-sm hover:cursor-pointer hover:bg-red-600 focus:bg-red-400 focus:border-blue-600 box-border border-2 border-solid border-amber-100">Add Item</button>
                        <label htmlFor="description">Add Description:</label>
                        <br />
                        <textarea className="border rounded-sm w-90 p-2" name="description" id="description" value={inputDescription} onChange={(e) => setInputDescription(e.target.value)}></textarea>
                    </form>
                </div>
            </main>
        </div>

    );
};

export default AddItem;