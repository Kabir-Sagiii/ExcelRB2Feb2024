function printDesignation(years) {
  if (years >= 0 && years <= 2) {
    console.log("Junior Engineer");
  } else if (years > 2 && years <= 5) {
    //true
    console.log("Senior Engineer");
  } else if (years > 5 && years <= 9) {
    console.log("Team Lead");
  } else {
    console.log("Project Manager");
  }
}

printDesignation(4);
