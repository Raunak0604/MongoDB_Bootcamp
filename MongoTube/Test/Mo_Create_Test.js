const Student = require ("../App/Student")
const assert = require ("assert");
const { setMaxListeners } = require("events");

// Create Test
describe ("Create records Test", () => {

    it ("Create a user in DB ", () => {
        // assert (true);

        const rab = new Student ({ name : "Rab" });
        rab
            .save()
            .then(() => {
                assert ( !rab.isNew);
            })
            .catch(() => {
                console.log("Error");
            });

    });
});

// Read Test
describe ("Read Test ", () => {
    let reader;

    beforeEach((done) => {
        reader = new Student ({name : "Reader"});
        reader.save()
        .then(() => {
            done();
        })
    })

    it ("Read a user : Reader", (done) => {
        Student.find({ name : "Reader" })
            .then((student) => {
                assert (reader._id.toString() === student[0]._id.toString());
                done();
            });         
    });

});

// Delete Test
describe ("Delete Test ", () => {
    let deleter;

    beforeEach((done) => {
        deleter = new Student ({name : "Deleter"});
        deleter.save()
        .then(() => {
            done();
        })
    })

    it ("A Delete test for deleter", (done) => {
        Student.findByIdAndDelete(deleter._id)
            .then(() => Student.findOne ({ name: "Deleter"}))
            .then((student) => {
                assert (student === null);
                done();
            });         
    });

});

