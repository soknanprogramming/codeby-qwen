import React from "react";
import useItems from "../../stores/useItems";

type Props = {
    id: number,
    title: string,
    description: string
    showEditBox: (id: number) => void
}

const ListItems: React.FC<Props> = ({ id, title, description, showEditBox}) => {
    const { removeItem } = useItems()
    return (
        <div key={id} className="bg-amber-100 p-3 rounded-md w-4xl flex justify-between border border-red-600 mb-2">
            <div>
                <h1 className="text-4xl text-red-600">{ title }</h1>
                <p>{ description }</p>
            </div>
            <div className="flex-col flex mr-6">
                <button onClick={() => showEditBox(id)} className="border my-0.5 px-2 hover:cursor-pointer hover:bg-red-600 focus:bg-red-400">Edit</button>
                <button onClick={() => removeItem(id)} className="border my-0.5 px-2 hover:cursor-pointer hover:bg-red-600 focus:bg-red-400">Delete</button>
            </div>
        </div>
    )
}



export default ListItems;