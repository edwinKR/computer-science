// Example 1: What happens? What needs to be fixed?
const alert = () => {
  const message = "This is my message to you!";
  const alerter = () => {
    alert(message);
  };
  alerter();
};

alert();


// Example2: What happens first?
const myAlert = () => {
  const message = "Alert!!!! This is the message!";
  const alerter = () => {
    alert(message);
  };
  
  setTimeout(alerter, 1000);
  console.log('What happens first? This log or the alert?');
};

myAlert();