import React from 'react';

class Nav extends React.Component {
    render() {
        const { locations, query, filter } = this.props

        return (<div className="col-lg-3 p-0">
            <nav className="side-nav navbar navbar-expand-lg navbar-dark bg-dark flex-lg-column">
                <h1 className="navbar-brand">Egypt Landmarks</h1><button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse flex-column w-100" id="navbarSupportedContent">
                    <form className="mt-3 w-100">
                        <input className="form-control mr-sm-2" type="search" value={query}
                            onChange={(event) => filter(event.target.value)}
                            placeholder="Search" aria-label="Search"></input>
                    </form>
                    <div className="list-group p-0 mt-2 w-100">
                        {locations.map((location) => (
                            <a key={location.id} onClick={e => this.props.onLocClicked(e.target)} className="list-group-item list-group-item-action flex-column align-items-start">
                                <div className="d-flex w-100 justify-content-between">
                                    <h5>{location.name}</h5>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </nav>
        </div>
        )
    }
}
export default Nav;