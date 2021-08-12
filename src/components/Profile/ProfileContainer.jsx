import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateStatus} from "../../redux/prof-reducer";
import {withRouter} from "react-router-dom/cjs/react-router-dom";
import {withAuthRedirect} from "../../HOC/AuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {debugger
        let userId = this.props.match.params.userId;
        if (!userId) {
            debugger
            userId = this.props.logUserId;
            if(!userId){
                this.props.history.push('/login');
            }
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }


    render() {
        return <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                        updateStatus={this.props.updateStatus}/>
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        logUserId: state.auth.id,
        isAuth: state.auth.isAuth,
    }

}

export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateStatus}),
    withRouter,
    /*withAuthRedirect*/
)(ProfileContainer)
