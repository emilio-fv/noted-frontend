export const welcomeMessage = () => {
  let time = new Date();
  time = time.getHours();
  console.log(time);

  let message;

  if (time >= 6 && time < 12) {
    message = 'Good morning'
  } else if (time >= 12 && time < 18) {
    message = 'Good afternoon'
  } else {
    message = 'Good evening'
  }

  return message;
}