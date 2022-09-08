import React, {useState} from 'react'


function ToDo(props) {
    
    const [allItems, setAllItems] = useState([]);
    const [newItem, setNewItem] = useState("");

    const addItem = (e) => {
        e.preventDefault();
        const toDoItem = {
            text: newItem,
            complete: false
        }
        setAllItems([...allItems, toDoItem]);
        
        setNewItem("")
    }

    const deleteItem = (del) => {
        const newItems = allItems.filter((item, i) => { return i !== del});
        setAllItems(newItems);
    }

    const handleChange = (item) => {
        const updatedList = allItems.map((todo, i) => {
            if(item === i){
                todo.complete = !todo.complete;
            }
            return todo;
        })
        setAllItems(updatedList);
    }


  return (
    <div>
        <form onSubmit={(e) => addItem(e)}>
        <input type="text" name="newItem" value={newItem} onChange={(e) => setNewItem(e.target.value)}/>
        <input type="submit" value="Add Item"/>
        </form>
         
        <div>
            {allItems.map((item, i) =>
            <div key={i}>
                <input type="checkbox" checked={item.complete} onChange={(e) => {handleChange(i)}}/>
                {item.text}
                <button onClick={(e) => { deleteItem(i)}}>Delete</button>
            </div>
            )}
        </div>
    </div>
  )
}


export default ToDo