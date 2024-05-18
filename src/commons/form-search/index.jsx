import "./style.css";

const SearchForm = ({type, placeholder, onChange, value}) => {

    const onSubmit = (e)=>{

        e.preventDefault();
    }

    return(
        <form action="" onSubmit={onSubmit}>
            <input type={type} placeholder={placeholder} onChange={onChange} value={value}/>
            <button>Search</button>
        </form>
    )
};


export default SearchForm;