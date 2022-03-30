module.exports = (ValidateSchema) => {
    return (req, res, next) => {
        let validationErrors = [];
        try {
            console.log("hello");
            ["headers", "params", "query", "body", "file"].forEach(
                (key) => {
                    if (ValidateSchema[key]) {// to check if that header exist in this endpoint or not as addTask endpoint contain only -body-
                        let validationResult = ValidateSchema[key].validate(req[key]); // validate the body to see if it contains the variable z or no
                        if (validationResult.error) {// if there is an error then there is an error in var z -not exist , deferent data type , etc - 
                            validationErrors.push(validationResult.error.details[0].message)// push the clarification message only that was written with Joi Validation
                        }
                    }
                }
            )// end of for each 
            if (validationErrors.length) {
                let errors = validationErrors.join("--"); // join all the errors with --
                res.json({ message: "Failed", errors })
            } else {
                next();// the request is correct then go to the database layer.
            }
        } catch (error) {
            res.json({ message: "Failed", error })
        }
    }
}

