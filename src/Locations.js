import React from 'react';
class Locations extends React.Component {
    render() {
        return (<div className="col-lg-3 p-0">
                <nav className="side-nav navbar navbar-expand-lg navbar-dark bg-dark flex-lg-column">
                    <a className="navbar-brand" href="#">Landmarks</a><button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse flex-column w-100" id="navbarSupportedContent">
                        <form className="mt-3 w-100">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                        </form>
                        <div className="list-group p-0 mt-2 w-100">
                            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start active">
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">item heading</h5>
                                </div>
                                <small>Donec id elit non mi porta.</small>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">item heading</h5>
                                </div>
                                <small>Donec id elit non mi porta.</small>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">item heading</h5>
                                </div>
                                <small>Donec id elit non mi porta.</small>
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
export default Locations;