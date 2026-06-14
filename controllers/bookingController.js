const bookingModel = require("../models/bookingModel");

const addBooking = async (req, res) => {
  const obj = {
    name: req.body.name,
    event: req.body.event,
    time: req.body.time,
    phone: req.body.phone,
  };
  await bookingModel.addBooking(obj, res);
};

const getBookings = async (req, res) => {
  await bookingModel.getBookings(res);
};

const updateBooking = async (req, res) => {
  const id = req.params.id;
  const obj = {
    name: req.body.name,
    event: req.body.event,
    time: req.body.time,
    phone: req.body.phone,
  };
  await bookingModel.updateBooking(id, obj, res);
};

const deleteBooking = async (req, res) => {
  const id = req.params.id;
  await bookingModel.deleteBooking(id, res);
};

module.exports = { addBooking, getBookings, updateBooking, deleteBooking };
