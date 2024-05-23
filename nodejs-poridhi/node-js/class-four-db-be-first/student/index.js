const express = require('express');
const router = express.Router();
const db = require('../db')
module.exports = router
router.use(express.json());

router.get('/all-student',(req,res) =>{

    res.send('all data')
})



router.get('/', (req, res) => {
    // Example query
    db.query('SELECT NOW()', (err, result) => {
        if (err) {
            console.error('Error executing query', err.stack);
            res.status(500).send('Internal Server Error');
        } else {
            res.send('Current time: ' + result.rows[0].now);
        }
    });
});
router.get('/student', (req, res) => {

    db.query('SELECT * FROM person', (err, result) => {
        if (err) {
            console.error('Error executing query', err.stack);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(result.rows);
        }
    });
});


router.post('/student', (req, res) => {
    const { name, age, result } = req.body;
    if (!name || !age || !result) {
        return res.status(400).send('Bad Request: Missing required fields');
    }

    db.query(
        'INSERT INTO person (name, age, result) VALUES ($1, $2, $3) RETURNING *',
        [name, age, result],
        (err, result) => {
            if (err) {
                console.error('Error executing query', err.stack);
                res.status(500).send('Internal Server Error');
            } else {
                res.status(201).json(result.rows[0]);
            }
        }
    );
});