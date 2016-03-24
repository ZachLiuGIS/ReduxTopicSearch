import React, { Component, PropTypes } from 'react'

class SearchBox extends Component {

    onSearchSubmit(e) {
        //let topic = this.tbxInput.value;
        e.preventDefault();
        let term = this.tbxSearchTerm.value;
        this.props.onBtnClick(term);
        this.tbxSearchTerm.value = '';
    }

    render() {
        return (
            <form className="form search-box" onSubmit={this.onSearchSubmit.bind(this)}>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input ref={node => this.tbxSearchTerm = node} type="text" className="form-control"
                               placeholder="Topic"/>
                    </div>
                    <div className="col-md-4">
                        <button type="submit" className="btn btn-default">Search
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}

export default SearchBox;