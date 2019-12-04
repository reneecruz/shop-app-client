import React, { useState }  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const SearchBar = (props) => {
    const [searchInput, setSearchInput] = useState("");
        
    const user = useSelector(state => state.currentUser)
    const items = useSelector(state => state.items)
    const [item, setItem] = useState("")

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

    console.log("account!", user)
    return (   
        <div>
            <input type="text" value={searchInput} onChange={(e) => handleChange(e.target.value)}/>
        </div>
    )
}

export default SearchBar;