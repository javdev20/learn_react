import React, {Component} from "react";

class Notification extends Component {
    state = {
        show: false
    };

    toggleDisplay = () => 
        this.setState({
            show: !this.state.show
        });

    render() {
        return (
            <div className="notification-widget">
                <div className="toggle-btn" onClick={this.toggleDisplay}>N</div>
                {this.state.show ? (
                    <div className="notification-text">
                    {this.props.text || "No Notification"}
                </div>
                ) : null}
            </div>
        );
    }
}

export default Notification;