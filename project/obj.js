// let students = {
//     Name: "Hoà",
//     Age: 19,
//     Birth: 2000,
//     Sex: "Male",
//     StudentID: "HE140875"
// }
// console.log(students);
// let addInfo = prompt("Bạn có muốn nhập thêm học sinh khác không? (Y là có, N là không.)");
// if (addInfo = "Y") {
//     prompt("Name: ");
//     prompt("Age: ");
//     prompt("Birth: ");
//     prompt("Sex: ");
//     prompt("StudentID");
// } alert(addInfo);

let student = {
    Name: "Hoà", 
    Birth: "2000",
    Country: "Vietnam"
  } 
  let check = prompt(`Bạn có muốn xoá thông tin nào không? (Y là có, N là không.)`);
    switch (check.toLocaleLowerCase()) {
      case "y":
        console.log("y");
        let key = prompt("Ten thuoc tinh")
        delete student[key]
        alert(JSON.stringify(student));
        break;
      case "n":
        alert("Goodbye!")
        break;
      default:
        alert("Goodbye!")
    }