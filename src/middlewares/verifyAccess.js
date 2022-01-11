
const verifyAccess = (requiredRole) => {
    return async (req, res, next) => {
    try {
    const { role } = { required }
    if (requiredRole != role) {
    return res.status(401), json({ error: "unauthorized! You do not have access to this Api" })
    }
    return next()
    
    } catch (err) {
    console.log(err)
    }
    }
    }
    
    export default verifyAccess;