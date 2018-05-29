const yup = require("yup");
const _ = require("lodash");

var schema = yup.object().shape({
  name: yup.string().required(),
  age: yup
    .number("Must be a number.")
    .required("Age is required")
    .positive("Must be positive")
    .integer("Must be an integer."),
  test: yup
    .object()
    .required()
    .shape({
      baz: yup.number().required("Baz is required.")
    })
});

schema
  .validate(
    { foo: "bar", test: {}, age: "10" },
    {
      abortEarly: false
    }
  )
  .then(res => console.log("res", res))
  .catch(err =>
    console.log(
      _.map(err.inner, error => ({ path: error.path, message: error.message }))
    )
  );
