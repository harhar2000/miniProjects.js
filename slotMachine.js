const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;
const MIN_LINES = 1;
const MAX_LINES = 3;

const SYMBOLS_COUNT = { A: 2, B: 4, C: 6, D: 8 };
const SYMBOL_VALUES = { A: 5, B: 4, C: 3, D: 2 };

// Function to get user input with validation
const getUserInput = (message, validate) => {
  while (true) {
    const input = prompt(message);
    const number = parseFloat(input);

    if (validate(number)) return number;
    console.log("Invalid input, try again.");
  }
};

const deposit = () =>
  getUserInput("Enter a deposit amount: £", (num) => num > 0);

const getNumberOfLines = () =>
  getUserInput(
    `Enter the number of lines to bet on (${MIN_LINES}-${MAX_LINES}): `,
    (num) => num >= MIN_LINES && num <= MAX_LINES
  );

const getBet = (balance, lines) =>
  getUserInput(
    "Enter the bet per line: £",
    (num) => num > 0 && num * lines <= balance
  );

const spin = () => {
  let symbols = [];
  for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
    symbols.push(...Array(count).fill(symbol));
  }

  return Array.from({ length: COLS }, () => {
    const reelSymbols = [...symbols];
    return Array.from(
      { length: ROWS },
      () =>
        reelSymbols.splice(Math.floor(Math.random() * reelSymbols.length), 1)[0]
    );
  });
};

const transpose = (reels) =>
  Array.from({ length: ROWS }, (_, i) => reels.map((col) => col[i]));

const printRows = (rows) => rows.forEach((row) => console.log(row.join(" | ")));

const getWinnings = (rows, bet, lines) =>
  rows
    .slice(0, lines)
    .reduce(
      (winnings, row) =>
        row.every((symbol) => symbol === row[0])
          ? winnings + bet * SYMBOL_VALUES[row[0]]
          : winnings,
      0
    );

const game = () => {
  let balance = deposit();

  while (balance > 0) {
    console.log(`\nYour current balance: £${balance}`);

    const numberOfLines = getNumberOfLines();
    const bet = getBet(balance, numberOfLines);

    balance -= bet * numberOfLines;

    const reels = spin();
    const rows = transpose(reels);
    printRows(rows);

    const winnings = getWinnings(rows, bet, numberOfLines);
    balance += winnings;

    console.log(`\nYou bet: £${bet * numberOfLines}`);
    console.log(`You won: £${winnings}`);
    console.log(`New balance: £${balance}`);

    if (balance <= 0) {
      console.log("You ran out of money! Game over.");
      break;
    }

    if (prompt("Do you want to play again? (y/n): ").toLowerCase() !== "y")
      break;
  }
};

game();
