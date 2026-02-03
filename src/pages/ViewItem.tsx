import React from "react";
import SideBar from "../components/AddItem/SideBar";
import useItems from "../stores/useItems";


const AddItem: React.FC = () => {
    const { items } = useItems()
    return (
        <div className="flex flex-1">
            <SideBar />
            <main className="flex-1 p-2">
                <ul>
                    {items.map((item, index) => {
                        return (
                            <li key={index}>{item.title} : {item.description}</li>
                        )
                    })}
                </ul>
            </main>
        </div>
    )
}

export default AddItem;