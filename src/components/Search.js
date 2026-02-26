import { FiSearch } from 'react-icons/fi'
import '../assets/search.css';

export default function Search({search, setSearch}){
    return(
        <div className='search-wrapper'>
            <div className='search-container'>
                <input value={search} onChange={(e)=> setSearch(e.target.value) } type='text' placeholder='Vingadores'/>
                <FiSearch className='search-icon'/>
            </div>
        </div>
    )
}