const student = require("../models/student");
const mentor = require("../models/Mentor");
const rel = require("../models/MenStu");

exports.homePage = (req, res, next) => {
  res.render("HomePage", {
    pageTitle: "Mentor",
    path: "/HomePage",
  });
};

exports.createStudent = (req, res, next) => {
  res.render("student", {
    pageTitle: "Mentor",
    path: "/student",
  });
};

exports.postCreateStudent = (req, res, next) => {
  const studentname = req.body.studentname;
  const studentAssign = new student({
    studentName: studentname,
  });

  studentAssign
    .save()
    .then((result) => {
      console.log("Created");
      res.redirect("/");
    })
    .catch((err) => console.log(err));
};

exports.createMentor = (req, res, next) => {
  res.render("Mentor", {
    pageTitle: "Mentor",
    path: "/Mentor",
  });
};

exports.postcreateMentor = (req, res, next) => {
  const MentorName = req.body.MentorName;
  const MentorAssign = new mentor({
    MentorName: MentorName,
  });

  MentorAssign.save()
    .then((result) => {
      console.log("Created");
      res.redirect("/");
    })
    .catch((err) => console.log(err));
};

exports.assignmentorstudent = async (req, res, next) => {
  const a = [];
  const students = await student
    .find({})
    .then((res) => {
      a.push(...res);
    })
    .catch((err) => console.log(err));
  const b = [];
  const mentors = await mentor
    .find({})
    .then((res) => {
      b.push(...res);
    })
    .catch((err) => console.log(err));

  res.render("assignmentorstudent", {
    pageTitle: "assignmentorstudent",
    path: "/assignmentorstudent",
    stud: a,
    ment: b,
  });
};

exports.assignmentorstudentpost = async (req, res, next) => {
  const mentorName = req.body.mentor;
  const stduentname = req.body.student;

  const men = [];
  await mentor
    .find({ MentorName: mentorName })
    .then((res) => {
      men.push(...res);
    })
    .catch((err) => console.log(err));

  let stud = [];
  await student
    .find({ studentName: stduentname })
    .then((res) => {
      stud = res.map((e) => e.id);
    })
    .catch((err) => console.log(err));

  const Relation = new rel({
    Mentor: men[0].id,
    student: [...stud],
  });

  Relation.save()
    .then((res) => {
      const [id] = [...stud];
      console.log(...stud);
      console.log(men[0].id);
    })
    .catch((err) => console.log(err));

  res.send({ message: stduentname });
};
