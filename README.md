## Form Validation with JavaScript

### [The Odin Project](https://www.theodinproject.com/lessons/node-path-javascript-form-validation-with-javascript)

### [Github](https://github.com/jzanderson09/form-validation-with-Javascript)

### Assignment:

1. Follow this [tutorial on Form Validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#validating_forms_using_javascript) which covers how we can use JavaScript to validate forms, including the Constraint Validation API.

2. It’ll also prove beneficial to go through the [Constraint Validation docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation).

#### A little more practice

1. Build a browser form which collects Email, Country, Postal Code, Password and Password Confirmation fields. It should use live inline validation to inform the user whether a field is properly filled in or not. That means validating as you type, not only upon form submission. When a field is invalid, it should be highlighted in red and show an error message to guide the user.

    The form doesn’t need to actually submit anywhere, but you should give a custom error message if the user tries to submit the form with any active errors or unfilled required fields. For the sake of this lesson, make sure the `<form>` element has the `novalidate` [attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#novalidate) which will allow you to do all of your validation in your JavaScript files. You can still use different `<input>` types, but you will need to use JavaScript to check and report their validity. If all is well and the form is “submitted”, give the user a high five.

    1.1 Set up a blank HTML document.

    1.2 Think about how you would set up the different form elements and their accompanying validators. What objects and functions will you need? A few minutes of thought can save you from wasting an hour of coding. The best thing you can do is whiteboard the entire solution before even touching the computer.

    1.3 Write the form elements.

    1.4 Add the JavaScript code that checks validation as the user progresses through the form. When a user leaves a form field, it should automatically validate that field.

    1.5 Test out all possible cases.

    1.6 Don’t forget to style validations with CSS by using the `:user-valid` and `:user-invalid` pseudo-classes!

2. Go back to your Library project and add custom validation to that form! Display a custom error message when the user tries to submit an empty form field (e.g. “The author name must be filled!”). Don’t forget to use the git branch workflow you learned in [Revisiting Rock Paper Scissors](https://www.theodinproject.com/lessons/foundations-revisiting-rock-paper-scissors) from Foundations to work on a new feature.