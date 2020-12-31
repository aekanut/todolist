const express = require('express');
const router = express.Router();
const list = require('../model/todo')


router.get("/api", async (req, res) => {
    const todos = await list.find()
    res.send(todos);
})

router.post("/api", async (req, res) => {
    const { text } = req.body;

    const todo = new list({
        text
    })

    try {
        await todo.save()
        res.send(todo)
    } catch (err) {
        res.send(400, err)
    }
})

router.put("/api/:id", async (req, res) => {
    const todo = await list.findById(req.params.id);
    for (let key in req.body) {
        if (todo[key] != req.body[key]) {
            todo[key] = req.body[key]
        }
    }

    try {
        await todo.save();
        res.send(todo)
    } catch (err) {
        res.send(400, err)
    }
})

router.delete("/api/:id", async (req, res) => {
    const todo = await list.findById(req.params.id);
    try {
        await todo.remove();
        res.send({ message: "Todo has been removed successfully!" })
    } catch (err) {
        res.send(400, err)
    }
})

module.exports = router;