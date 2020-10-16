import * as yup from "yup"

let schema = yup.object().shape({
    name: yup.string().min(2,"name must be at least 2 characters long"),
    size: yup.string(),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    mushrooms: yup.boolean(),
    spinach: yup.boolean(),
    instructions: yup.string()
})

export default schema