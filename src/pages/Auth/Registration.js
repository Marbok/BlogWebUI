import React from 'react';
import { auth } from '../../redux/actions/authAction'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux';

function Registration(props) {

    const handleClick = () => {
        props.dispatch(auth());
    }


    return (
        <div>
            <div>{props.auth ? "true" : "false"}</div>
            <Button onClick={handleClick}>Button</Button>
        </div>
    );

}

function mapStateToProps(state) {
    const { auth } = state.auth;
    return { auth };
  }
  
export default connect(mapStateToProps)(Registration);
