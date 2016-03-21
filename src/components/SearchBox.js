import React, { Component, PropTypes } from 'react'

class SearchBox extends Component {
     render() {
         return (
             <form className="form search-box">
                 <div className="row">
                     <div className="form-group col-md-8">
                         <input type="text" className="form-control" placeholder="Topic" />
                     </div>
                     <div className="col-md-4">
                         <button type="submit" className="btn btn-default">Search</button>
                     </div>
                 </div>
             </form>
         )
     }
}

export default SearchBox;
