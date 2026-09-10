function printPattern(n) {
  for (let i = n; i >= 1; i--) {
    let starCount = 2 * i - 1;
    let space = n - i;
    let star = "";
    for (let j = 1; j <= starCount + space; j++) {
      if (j <= space) {
        star += " ";
      } else {
        star += "*";
      }
    }
    console.log(star);
  }

  for (let i = 2; i <= n; i++) {
    let starCount = 2 * i - 1;
    let star = "";
    let space = n - i;
    for (let j = 1; j <= starCount + space; j++) {
      if (j <= space) {
        star += " ";
      } else {
        star += "*";
      }
    }
    console.log(star);
  }
}

printPattern(9);
