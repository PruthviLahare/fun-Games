function menu() {
  console.log("*** Welcome to KhauGalli Katta ***");
  console.log("What Provide :-\n");

  console.log("1 -: Allu Parotha : -/20rs");
  console.log("2 -: Idli vada : -/30rs");
  console.log("3 -: Dosa : -/40rs");
  console.log("4 -: sprouts : -/50rs");
}

function generateBill(choice) {
  switch (choice) {
    case 1:
      return 20;

    case 2:
      return 30;

    case 3:
      return 40;

    case 4:
      return 50;

    default:
      return 0;
  }
}

function checkValidInput(choice) {
  if (choice < 1 && choice > 4) {
    return false;
  }

  return confirm("Would you like to buy anything else ?");
}

function userChoice(bill) {
  menu();

  const choice = +prompt("Enter your choice number :");

  if (checkValidInput(choice)) {
    bill += generateBill(choice);

    return userChoice(bill);
  } else {
    return bill + generateBill(choice);
  }
}

console.log(userChoice(0));
