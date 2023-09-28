const app = require('../testServer');
const supertest = require('supertest');
const request = supertest(app);
const mongoose = require('mongoose');
const Student = require('../src/models/studentModel')


const students = [
    {
        "name": "student1",
        "email": "one@gmail.com",
        "phone": 23455678,
        "date": Date.now(),
        "id": 101,
        "grade": 2,
        "parent": "tessy"
    },
    {
        "name": "collins",
        "email": "collins@gmail.com",
        "phone": 812345678,
        "date": Date.now(),
        "id": 104,
        "grade": 1,
        "parent": "Jude chris"
    },
    {
        "name": "Lucy",
        "email": "lucy@gmail.com",
        "phone": 208915342,
        "date": Date.now(),
        "id": 103,
        "grade": 2,
        "parent": "Mary Lens"
    }
]
beforeEach(async () => {
    for(const student of students) {
        await Student.create(student);
    }
});


beforeAll(async () => {
    const url = `mongodb://127.0.0.1:27017/student`;
    await mongoose.connect(url, { useNewUrlParser: true });
});


const clearCollections = async () => {
    const collections = Object.keys(mongoose.connection.collections);
    for (const collectionName of collections) {
      const collection = mongoose.connection.collections[collectionName];
      await collection.deleteMany();
    }
}
  
afterEach(async () => {
    await clearCollections();
});


const dropAllCollections = async () => {
    const collections = Object.keys(mongoose.connection.collections);
    for (const collectionName of collections) {
      const collection = mongoose.connection.collections[collectionName];
      try {
        await collection.drop();
      } catch (err) {
        if (err.message === "ns not found") return;
  
   
        if (err.message.includes("a background operation is currently running"))
          return;
  
        console.log(error.message);
      }
    }
}
  

afterAll(async () => {
   await dropAllCollections();
   await mongoose.connection.close();
});




describe('Student', () => {
    it("/students: return status code 200", async () => {
        const res = await request.get('/api/students');
        expect(res.status).toBe(200);
    })
    it("/students: number of students objects to equal 3", async () => {
        const res = await request.get('/api/students');
        expect(res.body.length).toBe(3);
    })


})