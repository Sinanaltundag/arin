import React from 'react';

const SearchBar =(props)=> {


 const   handleFormSubmit = (event) => {
        event.preventDefault();
    }

    

        return  (
            <form onSubmit={handleFormSubmit}>
                <div className="form-row mb-5">
                    <div className="col-12">
                        <input 
                        
                            onChange={props.searchMovieProp} 
                            type="text" className="form-control" 
                            placeholder="Seach a movie" 
                        />
                    </div>
                </div>
            </form>
        )

    
}


export default SearchBar;