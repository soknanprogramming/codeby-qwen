import React from "react";
import SideBar from "../components/Items/SideBar";
import ListItems from "../components/Items/ListItem";
import useItems from "../stores/useItems";


const AddItem: React.FC = () => {
    const { items } = useItems()
    return (
        <div className="flex flex-1">
            <SideBar />
            <main className="flex-1 p-2">
                <div>
                    {items.map((item, index) => {
                        return (
                            <ListItems id={index} title={item.title} description={item.description} />
                        )
                    })}
                </div>
            </main>
        </div>
    )
}

export default AddItem;