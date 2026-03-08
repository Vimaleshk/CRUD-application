const express = require('express');
const noteModel = require("./models/note.model");

const app = express();

app.use(express.json());

app.post("/notes", async (req, res) => {
    try {
        const data = req.body;

        await noteModel.create({
            title: data.title,
            description: data.description
        });

        res.status(201).json({
            message: "Note Created"
        });

    } catch (error) {
        res.status(500).json({
            message: "Error creating note",
            error: error.message
        });
    }
});


app.get("/notes",async(req,res)=>{

    const notes = await noteModel.find()

    res.status(200).json({
        message:"Notes fatched Successfully",
        notes:notes
    })
})


app.delete("/notes/:id", async (req, res) => {

    const id = req.params.id;

    await noteModel.findOneAndDelete({
        _id: id
    });

    res.status(200).json({
        message: "Note Deleted Successfully"
    });

});


app.patch("/notes/:id", async (req, res) => {
    try {

        const id = req.params.id;
        const { description } = req.body;

        await noteModel.findByIdAndUpdate(
            id,
            { description },
            { new: true }
        );

        res.status(200).json({
            message: "Note Updated Successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: "Error updating note",
            error: error.message
        });

    }
});

module.exports = app;
