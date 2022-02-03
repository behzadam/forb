# Forb ( WIP )

## Forb is a conditional form builder. ( reactjs)

Recently I read [this article](https://www.aaron-powell.com/posts/2020-12-10-dynamic-forms-with-react-hooks/) and decided to develop it as a full project and called it Forb.

Forb has tow parts Form Generator and Form Builder and is used [Formik](https://formik.org/) and [Yup](https://github.com/jquense/yup) as form validation.

### Form Generator
Generates JSON based form elements with conditions:
- input: text, number
- radio button group
- checkboxes

Form validation:
- generates field validation based on JSON and yup generator.

The template is from: [Link](https://github.com/ixartz/Next-js-Boilerplate)