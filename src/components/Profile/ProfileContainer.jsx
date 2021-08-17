import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, savePhoto, updateStatus} from "../../redux/prof-reducer";
import {withRouter} from "react-router-dom/cjs/react-router-dom";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    refresh () {
        let userId = this.props.match.params.userId;
        if (!userId) {

            userId = this.props.logUserId;
            if(!userId){
                this.props.history.push('/login');
            }
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    componentDidMount() {
        this.refresh();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.match.params.userId !== prevProps.match.params.userId){
            this.refresh();
        }
    }


    render() {
        return <Profile {...this.props} isOwner={!this.props.match.params.userId} profile={this.props.profile} status={this.props.status}
                        updateStatus={this.props.updateStatus} savePhoto={this.props.savePhoto}/>
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
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateStatus, savePhoto}),
    withRouter,
    /*withAuthRedirect*/
)(ProfileContainer)
