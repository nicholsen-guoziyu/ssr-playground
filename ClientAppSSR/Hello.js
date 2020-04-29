import React, {Component} from 'react';

class Hello extends Component {
    componentDidMount() {
        console.log("CSR");
    }
    render() {
        return (
            <div>HELLO SSR!</div>
        );
    }
}

Hello.propTypes = {};
Hello.defaultProps = {};

export default Hello;
