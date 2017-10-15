import React from "react";

class Panel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "active": 0
        }
    }
    handleClick = (e) => {
        this.props.handleChildren(this.props.index);
    }
    render() {
        const title = this.props.title
        const classOption = this.props.className
        const active = this.props.activeClass;

        return (
            <li onClick={this.handleClick} className={this.props.className} role="presentation">
                <a >
                    {title}
                </a>
            </li>
        )
    }
}

export default Panel;
