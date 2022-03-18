import React from "react";

class MovieList extends React.Component {
  render() {
    return (
        <div className="row">
            <div className="col-lg-3">
                <div className="card mb-4 shadow-sm">
                    <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/4hne3v6jN4MlCnhSkxOW7YspJhr.jpg" alt="Sample movie" className="card-img-top "/>
                    <div className="card-body">
                        <h5 className="card-title">Sample movie</h5>
                        <p className="card-text">Lorem, ipsum dolor.</p>
                        <div className="d-flex justify-content-between align-item-center">
                            <button type="button" className="btn btn-outline-danger">Delete</button>
                            <h2><span className="badge bg-info">9.0</span></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default MovieList;
