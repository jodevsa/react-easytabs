import React from "react";
import Panel from "./Panel";

class Tabs extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            "activePanel": 0,
            "view": this.preProccessChildren(props.children, 0)[0].props.children
        }
    }
    preProccessChildren(children, activePanel) {

        const c = [];
        for (let i = 0; i < children.length; i++) {

            let classN = ""
            if (i === activePanel) {
                classN = this.props.activePanelClass
            }
            c.push(<Panel handleChildren={this.handleChildren} className={classN} key={i} index={i} title={children[i].props.title}/>)
            //  c.push(React.cloneElement(children[i],{"key":i,"index":i,"activeClass":classN,"handleChildren":this.handleChildren}))
        }
        return c;
    }
    handleChildren = (index) => {
        this.setState({activePanel: index})
    };

    render() {
        const classOption = this.props.className
        const children = this.props.children;
        let newChildrens = []
        const test = this.preProccessChildren(children, this.state.activePanel);
        return (
            <div >
                <div className={this.props.headerClass}>
                    <ul className={classOption}>
                        {test}
                    </ul>
                </div>

                <div>
                    {this.props.children[this.state.activePanel].props.children}

                </div>
            </div>

        )

    }

}

export default Tabs;
