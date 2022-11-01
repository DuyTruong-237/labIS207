import * as React from "react";

class MyButton extends React.Component {
    render() {
        return <div> <img class="img1" src="https://f6-zpcloud.zdn.vn/5019189054820076792/b35a44564261853fdc70.jpg" alt=""/>{this.props.children}</div>;
    }
}

export default MyButton;