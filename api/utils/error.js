// later in our project, in some cases, we need to handle the error. So we gonna use this custom function.
export const errorHandler = (statusCode, message) => {
    const error = new Error();
    error.statusCode = statusCode;
    error.message = message;
    return error;
};





















