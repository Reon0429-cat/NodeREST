const express = require('express');
const app = express();
app.use(express.urlencoded({extended: true}))
app.use(express.json())

const courses = [
    {
        id: 1,
        name: "国語"
    }, {
        id: 2,
        name: "英語"
    }, {
        id: 3,
        name: "理科"
    }, {
        id: 4,
        name: "数学"
    }, {
        id: 5,
        name: "社会"
    }
];

app.get('/api/courses', (request, response) => {
    response.send(courses);
});

app.post('/api/courses', (request, response) => {
    const course = {
        id: courses.length + 1,
        name: request.body.name
    };
    courses.push(course);
    response.send(course);
});

app.put('/api/courses/:id', (request, response) => {
    const course = courses.find(c => c.id === parseInt(request.params.id));
    if (!course) {
        return response
            .status(404)
            .send('The course with the given ID was not found.');
    }
    course.name = request.body.name;
    response.send(course);
})

app.delete('/api/courses/:id', (request, response) => {
    const course = courses.find(c => c.id === parseInt(request.params.id));
    if (!course) {
        return response
            .status(404)
            .send('The course with the given ID was not found.');
    }
    const index = courses.indexOf(course);
    courses.splice(index, 1);
    response.send(course);
})

// サイトのPORTを指定
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
