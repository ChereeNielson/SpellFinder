# SpellFinder

![hw-13-logo](https://i.gifer.com/5GpA.gif)

## "It does not do to dwell on dreams and forget to live"

In need of a magical spell? Time to get on our app, and find that perfect spell. After filling out a quick survey, our spell-matching algorithm will pair you with the perfect wizardry spell.

## Live Link
 - https://morning-wave-74438.herokuapp.com/

## Usage

To use our web service, simply go to our homepage and take our state-of-the-art survey. Immediately after submitting the survey, your perfect spell will pop up. We also have an API you can access to the network's users and their personalized information. For research purposes.

## Requirements
- Modularity in the form of separate files for server logic, storing of spells, views, and routing
- 10-question survey to assess uniqueness of users
- Use `express`, `body-parser`, and `path` npm packages in the `server.js` file
- Separate JavaScript files for routing (`htmlRoutes.js` and `apiRoutes.js`)
- Appropriate GET and POST routes for serving HTML pages and API calls https://morning-wave-74438.herokuapp.com/
- Separate file for storing spells (`spells.js`)
- Calculate best match for user once survey is completed and return that match to the user

## Technologies Used

- JavaScript
- jQuery
- Node.js
- Express.js
- HTML
- Bootstrap

## Code Explanation
- Our `server.js` file sets up the Express server, specifying our port number, the npm packages that need to be loaded, and also the routes, which we have externalized
- There are 2 separate HTML files (`home.html` and `survey.html`) that serve as the front-end portion of our code; they determine what the user sees (the homepage and the survey, which will also show the resulting best match)
- Our 2 routing files (`htmlRoutes.js` and `apiRoutes.js`) determine the back-end logic (based on the request being made, the response that gets sent to the browser); the HTML routes display the survey and the homepage based on the URL that is accessed, and the API routes send back existing content in our server-side data or add new spells
- Best match is calculated by finding the spell with the minimal difference in scores and then sending that spell to the browser as a JSON object
- A modal is then toggled, displaying the best match to the wizard who just took the survey
- In essense, this will also be a form of notes that you may later reference weeks later
- Spells are stored as such:

```js
{
	name: "Patronus Charm (Expecto Patronum)",
    photo: "https://img.buzzfeed.com/buzzfeed-static/static/2015-11/19/17/enhanced/webdr02/original-grid-image-23059-1447970713-6.jpg?downsize=700:*&output-format=auto&output-quality=auto",
	scores: [5, 1, 2, 3, 1, 2, 5, 1, 1, 1]
}
```