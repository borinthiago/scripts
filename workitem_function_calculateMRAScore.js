/* 
Version 1.0
*/

com.polarion.core.util.logging.Logger.getLogger("Workflow script workitem_function_calculateMRAScore.js").info("SCRIPT STARTED"); 

var workitem = workflowContext.getTarget(); 

// Get the visible values from the enumeration fields & Log the visible input values
var probabilityMRAString = workitem.getValue('probabilityMRA').getId();
com.polarion.core.util.logging.Logger.getLogger("Workflow script workitem_function_calculateMRAScore.js").info("Input visible values - Probability: " + probabilityMRAString);
var detectabilityMRAString = workitem.getValue('detectabilityMRA').getId();
com.polarion.core.util.logging.Logger.getLogger("Workflow script workitem_function_calculateMRAScore.js").info("Input visible values - Detectability: " + detectabilityMRAString);
var severityMRAString = workitem.getValue('severityMRA').getId();
com.polarion.core.util.logging.Logger.getLogger("Workflow script workitem_function_calculateMRAScore.js").info("Input visible values - Severity: " + severityMRAString);

// Convert the visible values to numbers (if necessary)
var probabilityMRA = parseInt(probabilityMRAString);
var detectabilityMRA = parseInt(detectabilityMRAString);
var severityMRA = parseInt(severityMRAString);

// Check if any of the fields are empty or not a number
if (isNaN(probabilityMRA) || isNaN(detectabilityMRA) || isNaN(severityMRA)) {
    com.polarion.core.util.logging.Logger.getLogger("Workflow script workitem_function_calculateMRAScore.js").info("Invalid input detected. Please enter valid numbers in all fields.");
} else {
    // Calculate the MRA score
    var mraScore = probabilityMRA * detectabilityMRA * severityMRA;

    // Set the MRA score in the mraScoring field
    workitem.setValue("mraScoring", mraScore);

    com.polarion.core.util.logging.Logger.getLogger("Workflow script workitem_function_calculateMRAScore.js").info("Set field mraScoring to value '" + mraScore + "'.");
}

com.polarion.core.util.logging.Logger.getLogger("Workflow script workitem_function_calculateMRAScore.js").info("SCRIPT FINISHED");