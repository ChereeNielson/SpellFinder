// The apiRoutes.js file includes two basic routes for app.get function and app.post function which used for displaying a JASON data and incoming survey results of all possible spells:
// The app.post(in the apiRoutes.js) used to handle the compatibility logic //

let spells = require("../data/spells.js");

// Routing the apiRoutes with the app.get and app.post functions //
module.exports = function (app) {
    // The app.get (GET route) request handles when user 'visits' a page. This will be used to display a JSON of all possible spells. //
    app.get("/api/spells", function (req, res) {
        res.json(spells);
    });
    // The app.post (POST route) request handles when a user submits a form and thus submits data to the server. This will be used to handle incoming survey results as well as handle the compatibility logic. //
    app.post("/api/spells", function (req, res) {
        // Loop through all of the possible options //
        let bestMatch = {
            name: "",
            photo: "",
            spellDifference: 1000
        };

        // To take the result of the user's survey POST and parse it //
        let userData = req.body;
        let userScores = userData.scores;
        // To take the results of the user's name and photo, other than the survey questions, to post and parse it //
        let userName = userData.name;
        let userPhoto = userData.photo;

        // The variable used to calculate the difference b/n the user's socres and the scores of each user //
        let totalDifference = 0;

        // Loop through the spells data array of objects to get each spells scores //
        for (var i = 0; i < spells.length - 1; i++) {
            console.log(spells[i].name);
            totalDifference = 0;

            // Loop through that spells score and the users score and calculate the absolute difference between the two and push that to the total difference variable set above //
            for (var j = 0; j < 10; j++) {
                // We calculate the difference between the scores and sum them into the totalDifference //
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(spells[i].scores[j]));
                // If the sum of differences is less then the differences of the current "best match" //
                if (totalDifference <= bestMatch.spellDifference) {

                    // Reset the bestMatch to be the new spell //
                    bestMatch.name = spells[i].name;
                    bestMatch.photo = spells[i].photo;
                    bestMatch.spellDifference = totalDifference;
                }
            }
        }

        // The push method is used to save user's data to the database //
        spells.push(userData);

        // The res.json method will return a JSON data with the user's match which was looped through spells data array //
        res.json(bestMatch);
    });
};