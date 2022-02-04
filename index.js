// Function declaration that sets a default parameter
// value that can be overridden.
function saturdayFun(activity = "roller-skate"){
  // Return a string invoking function parameter
  return `This Saturday, I want to ${activity}!`;
}

// Function expression that sets a default parameter
// value that can be overridden.
const mondayWork = function(activity = "go to the office"){
  // Return a string invoking function parameter
  return `This Monday, I will ${activity}.`;
}

// Function with child functions. Example of 
// scope chain. A total call should be:
// wrapAdjective("%")("a dedicated programmer"); //=> "You are %a dedicated programmer%!"
function wrapAdjective(flair = "*"){
  // Return a function that:
  // - takes single parameter (default --> "special")
  // - returns string "You are ..."
  return function (adj = "special"){
    return `You are ${flair}${adj}${flair}!`;
  }
}