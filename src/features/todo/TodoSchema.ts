import * as Yup from 'yup';

export const TodoSchema = Yup.object().shape({
    id: Yup.string().required('Required'),
    name: Yup.string().min(6, 'Too short').required('Required'),
    status: Yup.string()
    .matches(/^(waiting|doing|done)$/, {excludeEmptyString: true, message: 'Invalid value'})
    .required('Required'),
});