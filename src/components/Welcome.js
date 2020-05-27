export default function Welcome() {
  let welcomeMsg;

  let date = new Date();

  if (date.getHours() >= 5 && date.getHours() <= 12) {
    return (welcomeMsg = "Bom dia");
  } else if (date.getHours() > 12 && date.getHours() <= 18) {
    return (welcomeMsg = "Boa tarde");
  }
  return (welcomeMsg = "Boa Noite");
}
