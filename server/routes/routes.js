var appRouter = function(app) {
    app.get("/", (req, res) => {
        res.status(200).send("Hello world");
    });
};

module.exports = appRouter;