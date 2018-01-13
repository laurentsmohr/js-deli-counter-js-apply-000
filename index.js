var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  var num = katzDeliLine.length + 1;
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${num} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine[0] === undefined) {
    return "There is nobody waiting to be served!";
  } else {
    var currentCustomer = katzDeliLine.shift();
  }
  return `Currently serving ${currentCustomer}`
}

function currentLine(katzDeliLine) {
  var str = "The line is currently: "
  for (var i = 0; i < katzDeliLine.length; i++) {
    str = str.concat(`${i+1}. ${katzDeliLine[i]}`)
  }
  return str;
}
