const express = require('express');
const router = express.Router();
const User = require('../models/user.js');


router.get('/', async (req, res) => {
    try {
        const currentUser = await User.findById(req.session.user._id);
        res.render('events/index.ejs', {event: currentUser.events});
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});


router.get('/new',async (req, res) => {
    try {
        res.render('events/new.ejs');
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});


router.post('/', async (req, res) => {
    try {
        const currentUser = await User.findById(req.session.user._id);
        currentUser.events.push(req.body);
        await currentUser.save();
        res.redirect(`/users/${req.session.user._id}/events`);
    } catch (error) {
        console.log(error,"<-------------------error");
        res.render('events/new.ejs', {errorMessages: 'Error creating food item.'});
    }
});

//show route ‘/users/:userId/events/:Id’
router.get('/:id', async (req, res) => {
    try {
        const currentUser = await User.findById(req.session.user._id);
        const currentEvent = currentUser.events.id(req.params.id);
        res.render('events/show.ejs', {event : currentEvent});
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});

//edit route ‘/users/:userId/events/:Id/edit’
router.get('/:id/edit', async (req, res) => {
    try {
        const currentUser = await User.findById(req.session.user._id);
        const currentEvent = currentUser.events.id(req.params.id);
        res.render('events/edit.ejs', {event : currentEvent});
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});

//update route ‘/users/:userId/events/:Id’
router.put('/:id', async (req, res) => {
    try {
        const currentUser = await User.findById(req.session.user._id);
        const currentEvent = currentUser.events.id(req.params.id);
        currentEvent.set(req.body);
        await currentUser.save();
        res.redirect(`/users/${req.session.user._id}/events/${req.params.id}`);
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});



router.delete('/:id', async (req, res) => {
    try {
        const currentUser = await User.findById(req.session.user._id);
        currentUser.events.id(req.params.id).deleteOne();
        await currentUser.save();
        res.redirect(`/users/${req.session.user._id}/events`);
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});


module.exports = router;