import React from 'react';
import { TodoModel } from 'models/TodoModel';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {TodoSchema} from 'features/todo/TodoSchema';

interface TodoFormProps {
    todo: TodoModel
}

export const TodoForm:React.FC<TodoFormProps> = React.memo(({todo}) => {

    const handleSubmitForm = (values:TodoModel) => {
        console.log(values);
    }

    return (
        <Formik<TodoModel> 
            initialValues={todo} 
            validationSchema={TodoSchema} 
            onSubmit={handleSubmitForm}
            enableReinitialize
        >

            {({errors, touched}) => {

                const hasErrorName = errors.name && touched.name;
                const hasErrorStatus = errors.status && touched.status;

                return (
                    <Form>
                        <div className="card">
                            <div className="card-header">
                                {`Update todo #${todo.name}`}
                            </div>
                            <div className="card-body">
                                
                                <div className="form-group">
                                    <label>Todo Name</label>
                                    <Field type="text" name="name" className={"form-control " + (hasErrorName && 'is-invalid')}/>
                                    {hasErrorName && <div className="invalid-feedback"><ErrorMessage name="name"/></div>}
                                </div>
                              
                                <div className="form-group">
                                    <label>Todo Status</label>
                                    <Field type="text" name="status" className={"form-control " + (hasErrorStatus && 'is-invalid')}/>
                                    {hasErrorStatus && <div className="invalid-feedback"><ErrorMessage name="status"/></div>}
                                </div>

                                <button type="submit" className="btn btn-primary">Submit Data</button>

                            </div>
                        </div>
                    </Form>
                )

            }}

        </Formik>
    )
});