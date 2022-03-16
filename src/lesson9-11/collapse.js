import React from "react";

class Collapse extends React.Component {
state = {
      showContent: true,
    }

  showMore = () => {
    this.setState({ showContent: !this.state.showContent });
  };

componentDidMount(){
  console.log("component oluştu");
}

componentDidUpdate(){
  console.log("component güncellendi");
}

  render() {
    return (
      <div>
        <button className="btn btn-primary w-100" onClick={this.showMore}>
          {/* {this.props.children.props.cardTitle} */}
          {React.Children.map(this.props.children, children=> children.props.cardTitle)}
        </button>
        {this.state.showContent ? (
          <div className="collapse show">
          {/* {this.props.children} */}
          {React.Children.map(this.props.children, children=> children)}
          </div>
        ) : null}
      </div>
    );
  }
}

export default Collapse;

/* const Collapse = (props) => {
    console.log(props.children);
  return (
    <div>
        <a
          className="btn btn-primary w-100"
          data-bs-toggle="collapse"
          href={"#"+(props.href)}
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Link with href
        </a>

      <div className="collapse" id={props.href}>
{props.children}
      </div>
    </div>
  );
}; */
