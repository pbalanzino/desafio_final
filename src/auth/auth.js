export default async function verifyAuth(req, res, next) {
    try {
        let auth = await req.headers.token;
        if(auth != "admin123") res.send({ error: "Unauthorized" });
        if(auth == "admin123") next();
    } catch (err) {
        res.status(500).json({
            message: 'Internal Server Error'
            });
    }
} 