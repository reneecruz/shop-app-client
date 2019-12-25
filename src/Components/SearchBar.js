import React, { useState }  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const SearchBar = (props) => {
    const [searchInput, setSearchInput] = useState("");
    const [item, setItem] = useState("");
        
    const user = useSelector(state => state.currentUser)
    const items = useSelector(state => state.items)
   

    const handleChange = val => {
        setSearchInput(val);
        console.log(val)
    }

    // const searchedArray=this.state.pets.filter(pet=> {
    //     pet.name.toLowerCase().indexOf(this.state.searchValue.toLowerCase()) !== -1 
    //     })

    // const searchedArray = items.filter(item => {
    //     return item.name.toLowerCase().indexOf(searchInput.toLowerCase()) !== -1
    // })


    return (   
       
        <div>
            {/* <input type="text" value={searchInput} onChange={(e) => handleChange(e.target.value)}/> */}
        </div>

    //     {Item: {item}
    //         <input type="text" value={item} onChange={(e) => setItem(e.target.value)}/>
    // }
    )
}

export default SearchBar;