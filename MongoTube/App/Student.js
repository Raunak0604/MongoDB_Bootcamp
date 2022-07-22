const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const StudentSchema = new Schema ({
    name : String
});

const Student = mongoose.model ("student", StudentSchema);

// Export
module.exports = Student
