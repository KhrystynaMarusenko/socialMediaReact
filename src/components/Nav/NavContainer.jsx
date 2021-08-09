import React from "react";
import Nav from "./Nav";
import {connect} from "react-redux";
import {authorization, logout} from "../../redux/auth-reducer";

class NavContainer extends React.Component{
    constructor(props) {
        super(props);
    }


    componentDidMount() {
        this.props.authorization()
    }

    render() {
        return <Nav {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {authorization, logout})(NavContainer)