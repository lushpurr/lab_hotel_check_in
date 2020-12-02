use guests;
db.dropDatabase();

db.checkIns.insertMany([
    {
        name: "John Doe", 
        email: "john.doe@gmail.com", 
        status: "Checked In"
    },

    {
        name: "Jane Doe", 
        email: "jane.doe@gmail.com",
        status: "Checked In"
    },

    {
        name: "Billy Bob",
        email: "billy99@aol.com",
        status: "Check Out"
    }
]);