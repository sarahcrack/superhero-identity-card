//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require("govuk-prototype-kit");
const router = govukPrototypeKit.requests.setupRouter();

// Add your routes here

// Run this code when a form is submitted to 'superhero-power-answer'
router.post("/superhero-power-answer", function (req, res) {
  // Make a variable and give it the value from 'how-many-balls'
  var superheroPower = req.session.data["superhero-power"];

  // Check whether the variable matches a condition
  if (superheroPower === "I'm a Villain") {
    // Send user to ineligible page
    res.redirect("/ineligible");
  } else {
    // Send user to check-answers page
    res.redirect("/check-answers");
  }
});
