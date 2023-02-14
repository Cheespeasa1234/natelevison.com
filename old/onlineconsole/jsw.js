let log = (text) => {
  console.log(`[${getTimeString(new Date(), ":")}] ${text}`)
};

let err = (text) => {
  console.log
}


var getTimeString = function (input, separator) { // from so
  var pad = function (input) {
    return input < 10 ? "0" + input : input;
  };
  var date = input ? new Date(input) : new Date();
  return [
    pad(date.getHours()),
    pad(date.getMinutes()),
    pad(date.getSeconds()),
    date.getMilliseconds(),
  ].join(typeof separator !== "undefined" ? separator : ":");
};

let a = function (logger) { // from stackoverflow
  console.old = console.log;
  console.log = function () {
    var output = "",
      arg,
      i;

    for (i = 0; i < arguments.length; i++) {
      arg = arguments[i];
      output += '<span class=" log-' + typeof arg + '">';

      if (
        typeof arg === "object" &&
        typeof JSON === "object" &&
        typeof JSON.stringify === "function"
      ) {
        output += JSON.stringify(arg);
      } else {
        output += arg;
      }

      output += "</span>&nbsp;";
    }

    logger.innerHTML += output + "<br>";
    console.old.apply(undefined, arguments);
  };
};

a(document.getElementById("logger"));
