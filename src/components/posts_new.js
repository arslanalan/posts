import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
    renderField(field) {
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                {field.meta.error}
            </div>
        );
    }

    render() {
        return (
            <form>
                <Field
                    label="Title"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    label="Categories"
                    name="categories"
                    component={this.renderField}
                />
                <Field
                    label="Post Content"
                    name="content"
                    component={this.renderField}
                />
            </form>
        );
    }
}

//Automatically called on form submit
function validate(values) {
    // console.log(values) -> { title: 'dfdsfsa', categories: 'fgbfbfgb', content: 'vvdfmv kfşlm şlşdsmc'}
    const errors = {};

    // Validate the inputs from 'values'
    //title, categories and content is specific key for the errors object. These keys are the same with the name of the related field.
    if (!values.title) {
        errors.title = 'Enter a title';
    }
    if (!values.categories) {
        errors.categories = 'Enter some categories';
    }
    if (!values.content) {
        errors.content = 'Enter some content please';
    }

    //If return empty errors object, redux form assumes no error, everything is OK with that form
    //If errors has *any* properties, redux form assumes form is invalid
    return errors;
}

export default reduxForm({
    validate,  //same as validate: validate
    form: 'PostsNewForm'  //this name must be unique
})(PostsNew);