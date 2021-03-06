import React from "react"
import ReactDOM from "react-dom"

export default class Service extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card">
                <img className="card-img-top" src={this.props.imgurl} alt="image" style={{alignSelf: "center", padding: "1rem", width: "200pt"}} />
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">{this.props.body}</p>
                </div>
                <div className="card-footer text-muted">
                    {this.props.footer}
                </div>
            </div>
        );
    }
}
