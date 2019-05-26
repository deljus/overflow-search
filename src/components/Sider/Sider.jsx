import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './sider.css';

class Sider extends Component{


    componentWillReceiveProps = (nextProps) => {
        const { open } = this.props;
        if(nextProps.open && !open){
            document.body.style.overflow = 'hidden'
        }
        if(!nextProps.open && open){
            document.body.style.overflow = 'auto'
        }
    };

    componentWillUnmount = () => {
        const { open } = this.props;
        if(open){
            document.body.style.overflow = 'auto'
        }
    };

    handleClose = () => {
        const { onClose } = this.props;
        onClose();
    };

    render() {

        const { render, open } = this.props;

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
