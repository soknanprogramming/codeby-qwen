import React, { useState, useEffect, useRef } from "react";
import SideBar from "../components/Items/SideBar";
import ListItems from "../components/Items/ListItem";
import useItems from "../stores/useItems";


const AddItem: React.FC = () => {
    const { items, updateItem } = useItems()
    const [showEditBox, setShowEditBox] = useState<boolean>(false)
    const [editBoxId, setEditBoxId] = useState<number>(0)
    const [editBoxTitle, setEditBoxTitle] = useState<string>('')
    const [editBoxDescription, setEditBoxDescription] = useState<string>('')
    const boxRef = useRef<HTMLDivElement>(null)
    const handleShowEditBox = (id: number) => {
        setEditBoxId(id)
        setEditBoxTitle(items[id].title)
        setEditBoxDescription(items[id].description)
        setShowEditBox(!showEditBox)
    }
    const handleEditBox = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        updateItem(editBoxId, { title: editBoxTitle, description: editBoxDescription })
        setShowEditBox(false)
    }
    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (boxRef.current && !boxRef.current.contains(e.target as Node)) {
                setShowEditBox(false);
            }
        }

        if (showEditBox) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showEditBox])
    return (
        <div className="flex flex-1">
            <SideBar />
            <main className="flex-1 p-2 relative">
                <div>
                    {items.map((item, index) => {
                        return (
                            <ListItems id={index} title={item.title} description={item.description} showEditBox={handleShowEditBox} />
                        )
                    })}
                </div>
                {/* edit box */}
                <div ref={boxRef} className={(showEditBox ? "block" : "hidden") + " absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 border border-blue-200 bg-red-400 p-7 rounded-md"}>
                    <form onSubmit={handleEditBox} >
                        <h1 className="m-1 text-3xl">Edit Box</h1>
                        <div>
                            <div>
                                <label htmlFor="title">Title : </label>
                                <input className="border m-1" id="title" type="text" value={editBoxTitle} onChange={(e) => setEditBoxTitle(e.target.value)} />
                            </div>
                            <div>
                                <label htmlFor="description">Description : </label>
                                <textarea className="border m-1" id="description" value={editBoxDescription} onChange={(e) => setEditBoxDescription(e.target.value)}></textarea>
                            </div>
                        </div>
                        <div>
                            <button className="m-2 rounded-sm border px-3 hover:cursor-pointer hover:bg-red-600 focus:bg-red-400" type="submit">Save</button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    )
}


export default AddItem;