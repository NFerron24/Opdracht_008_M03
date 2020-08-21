function assignGrade(score) {
  if (score > 90) {
    return "A";
  } else if (score > 80) {
    return "B";
  } else if (score > 70) {
    return "C";
  } else if (score > 65) {
    return "D";
  } else {
    return "F";
  }
}

for (i = 90; i <= 100; i++) {
  console.log(
    "Voor een score van" + " " + i + " " + "krijg je" + " " + assignGrade(91)
  );
}
for (i = 80; i <= 89; i++) {
  console.log(
    "Voor een score van" + " " + i + " " + "krijg je" + " " + assignGrade(81)
  );
}
for (i = 70; i <= 79; i++) {
  console.log(
    "Voor een score van" + " " + i + " " + "krijg je" + " " + assignGrade(71)
  );
}
for (i = 66; i <= 69; i++) {
  console.log(
    "Voor een score van" + " " + i + " " + "krijg je" + " " + assignGrade(66)
  );
}
for (i = 60; i <= 60; i++) {
  console.log(
    "Voor een score van" + " " + i + " " + "krijg je" + " " + assignGrade(60)
  );
}
