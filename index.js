const yup = require("yup");
const _ = require("lodash");

var schema = yup.object().shape({
  name: yup.string().required(),
  age: yup
    .number()
    .required()
    .positive()
    .integer(),
  test: yup.object().shape({
    baz: yup.number().required("Baz is required.")
  })
});

schema
  .validate({ foo: "bar" }, { abortEarly: false })
  .then(res => console.log("res", res))
  .catch(err =>
    console.log(
      _.map(err.inner, error => ({ path: error.path, message: error.message }))
    )
  );
