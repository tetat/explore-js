const paymentSuccess = true;
const marks = 70;

function printMessage(message) {
  const el = document.getElementById("course");
  const p = document.createElement("p");
  p.textContent = message;
  el.appendChild(p);
}

function enroll() {
  printMessage("Course enrollment is in progress");

  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (paymentSuccess) {
        resolve();
      } else {
        reject("Payment failed!");
      }
    }, 2000);
  });

  return promise;
}

function progress() {
  printMessage("Course on progress..");

  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (marks >= 80) {
        resolve();
      } else {
        reject("You could not get enough marks to get the certificate");
      }
    }, 3000);
  });

  return promise;
}

function getCertificate() {
  printMessage("Preparing your certificate");

  const promise = new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Congrats! you got the certificate");
    }, 1000);
  });

  return promise;
}

enroll()
  .then(progress)
  .then(getCertificate)
  .then(function (value) {
    printMessage(value);
  })
  .catch(function (err) {
    printMessage(err);
  });
