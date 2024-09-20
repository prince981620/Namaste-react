const MenuItem = ({menuItem})=>{
    return (
        <div className="text-left w-6/12 mx-auto my-1 px-4 py-2 shadow flex justify-between">
            {menuItem}
            <button className="font-bold font-serif text-green-700">ADD</button>
        </div>
    )
}
export default MenuItem;