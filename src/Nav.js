import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Nav extends React.Component {
    render() {
        const { locations, query, filter } = this.props
        const links = locations.map((location) => (
        <button key={location.id} onClick={e => this.props.onLocClicked(e.target)} className="list-group-item list-group-item-action flex-column align-items-start
        my-1">
            <div className="d-flex w-100 justify-content-between">
                <h5>{location.name}</h5>
            </div>
        </button>
        ))

        return (<div className="col-lg-3 p-0">
            <nav className="side-nav navbar navbar-expand-lg navbar-dark bg-dark flex-lg-column">
                <h1 className="navbar-brand">Egypt Landmarks</h1><button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse flex-column w-100" id="navbarSupportedContent">
                    <div className="input-group my-3">
                        <input className="form-control mr-sm-2" type="search" value={query}
                            onChange={(event) => filter(event.target.value)}
                            placeholder="Search" aria-label="Search"></input>
                        <div className="input-group-append">
                            <button className="btn" type="button" onClick={this.props.clear}>Clear</button>
                        </div>
                    </div>
                    <div className="list-group p-0 mt-2 w-100">
                        <ReactCSSTransitionGroup
                            transitionName={{
                                enter: 'animated',
                                enterActive: 'slideInDown',
                                leave: 'animated',
                                leaveActive: 'fadeOut',
                                appear: 'animated ',
                                appearActve: 'slideInDown'
                            }} transitionEniterTimeout={500}
                            transitionLeaveTimeout={200}
                            transitionAppearTimeout={500}>
                            {links}
                        </ReactCSSTransitionGroup>
                    </div>
                </div>
            </nav>
        </div >
        )
    }
}
export default Nav;