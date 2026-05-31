const students = [
    { name: "An", math: 8, physics: 7, cs: 9, gender: "M" },
    { name: "Bình", math: 6, physics: 9, cs: 7, gender: "F" },
    { name: "Chi", math: 9, physics: 6, cs: 8, gender: "F" },
    { name: "Dũng", math: 5, physics: 5, cs: 6, gender: "M" },
    { name: "Em", math: 10, physics: 8, cs: 9, gender: "F" },
    { name: "Phong", math: 3, physics: 4, cs: 5, gender: "M" },
    { name: "Giang", math: 7, physics: 7, cs: 7, gender: "F" },
    { name: "Huy", math: 4, physics: 6, cs: 3, gender: "M" },
];

let bangdeim = [];
var nam = 0, diemnam = 0;
var nu = 0, diemnu = 0;

for (let i = 0; i < students.length; i++) {
    let diemTB = students[i].math * 0.4 + students[i].physics * 0.3 + students[i].cs * 0.3;

    let hang = {
        Tên: students[i].name,
        "Điểm Trung bình": parseFloat(diemTB.toFixed(1)), 
    };

    if (hang["Điểm Trung bình"] >= 8.0) {
        hang.Loại = "Giỏi";
    } else if (hang["Điểm Trung bình"] >= 6.5) {
        hang.Loại = "Khá";
    } else if (hang["Điểm Trung bình"]   >= 5.0) {
        hang.Loại = "Trung bình";
    } else {
        hang.Loại = "Yếu";
    }
    if (students[i].gender === "M") {
        nam++;
        diemnam += diemTB; 
    }
    if (students[i].gender === "F") {
        nu++;
        diemnu += diemTB; 
    }
    bangdeim.push(hang);
}   

console.log("Bảng điểm của học sinh:");
console.table(bangdeim);

let bangtrungbinh = [
    {
        "Giới tính": "Nam",
        "Điểm trung bình": (diemnam / nam).toFixed(1),
    },
    {
        "Giới tính": "Nữ",
        "Điểm trung bình": (diemnu / nu).toFixed(1),
    }  
]

console.log("Bảng trung bình điểm theo giới tính:");
console.table(bangtrungbinh);