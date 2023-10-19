let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    const buttonValue = e.target.innerHTML;

    if (buttonValue === '=') {
      // Calculate the result
      try {
        string = eval(string);
        document.querySelector('input').value = string;
      } catch (error) {
        document.querySelector('input').value = 'Error';
      }
    } else if (buttonValue === 'C') {
      // Clear the input field
      string = '';
      document.querySelector('input').value = '';
    } else if (buttonValue === '⌫') { // Handle backspace button
      string = string.slice(0, -1);
      document.querySelector('input').value = string;
    } else {
      // Append the buttonValue to the string
      string += buttonValue;
      document.querySelector('input').value = string;
    }
  });
});
