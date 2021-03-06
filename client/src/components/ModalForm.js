import React from 'react';
import { bindActionCreators } from 'redux';
import Button from 'react-bootstrap/Button';
import './ModalForm.css';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { newUser } from '../actions/apiCalls';

const renderInput = props => <input {...props.input} type="text" />

const req = fieldValue => fieldValue ? undefined : 'Required';


let ModalForm = (props) => {

    const { handleSubmit, handleClose, submitting, valid } = props;


    const doSubmit = (values) => {
        props.newUser(values);
    }

    return (
        <form onSubmit={handleSubmit(doSubmit)}>
            <div className="form">
                <label>First Name</label>
                <Field name="firstName" component={renderInput} validate={req} />
            </div>
            <div className="form">
                <label>Last Name</label>
                <Field name="lastName" component={renderInput} validate={req} />
            </div>
            <div className="form">
                <label>Current job</label>
                <Field name="job" component={renderInput} validate={req} />
            </div>
            <div className="modalFormButtonArea">
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" type="submit" disabled={submitting || !valid} onClick={handleClose} >
                    Submit
                </Button>
            </div>
        </form>
    )
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ newUser }, dispatch);
}

export default connect(null, mapDispatchToProps)(reduxForm({
    form: 'userForm'
})(ModalForm));
