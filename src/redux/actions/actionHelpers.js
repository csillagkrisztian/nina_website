// uses cloudfare to check for the user's location

export const findCountry = () => {
  const countryCodeExpression = /loc=([\w]{2})/;
  const userIPExpression = /ip=([\w]+)/;
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.timeout = 3000;
    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          let countryCode = countryCodeExpression.exec(this.responseText);
          let ip = userIPExpression.exec(this.responseText);
          if (
            countryCode === null ||
            countryCode[1] === "" ||
            ip === null ||
            ip[1] === ""
          ) {
            reject("IP/Country code detection failed");
          }
          let result = {
            countryCode: countryCode[1],
            IP: ip[1],
          };
          resolve(result);
        } else {
          reject(xhr.status);
        }
      }
    };
    xhr.ontimeout = function () {
      reject("timeout");
    };
    xhr.open("GET", "https://www.cloudflare.com/cdn-cgi/trace", true);
    xhr.send();
  });
};
