// student database
db = db.getSiblingDB("student_db");
db.createUser({
  user: "express_student_service",
  pwd: "express_student_password",
  roles: [
    { role: "readWrite", db: "student_db" },
    { role: "userAdmin", db: "student_db" },
  ],
});

db.createCollection("student_collection", { capped: false });