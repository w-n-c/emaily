const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,till@works.tehe, or@not.co))$/;
export default input => {
  let emails = [];
  // push space separated input into array
  if (input.indexOf(",") === -1) {
    emails = input.split(" ").filter(email => {
      if (email === "") {
        return false;
      }
      return true;
    });
  } else {
    // OR push comma separated input into array
    emails = input.split(",").map(email => email.trim());
  }
  const invalidEmails = emails.filter(email => !emailRegex.test(email));
  if (invalidEmails.length) {
    return `These input are invalid: ${invalidEmails}`;
  }
  return;
};
