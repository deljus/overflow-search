import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './sider.css';

class Sider extends Component{
    constructor(props){
        super(props)
        this.state = { open: props.open };
    }

    static getDerivedStateFromState(nextProps, prevState){
        if(nextProps.open !== prevState.open){
            return{
                open: nextProps.open
            }
        }
    }

    handleClose = () => {
        const { open } = this.state;
        const { onClose } = this.props;
        this.setState({ open: !open });
        onClose();
    };

    render() {

        const { render } = this.props;
        const { open } = this.state;

        return (
            <div className={`side ${ open && 'open' }`}>
                <div className="side-content">
                    {render()}
                </div>
                <div
                    className="side-wrapper"
                    onClick={this.handleClose}
                />
            </div>
        )
    }
}

Sider.propTypes = {
    open: PropTypes.bool,
    render: PropTypes.func,
    onClose: PropTypes.func,
};

Sider.defaultProps = {
    open: false,
    render: () => null,
    onClose: () => null
};

export default Sider;
