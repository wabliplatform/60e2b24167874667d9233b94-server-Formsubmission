/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { Quest } = require('../models/Quest');

/**
* Creates the data
*
* quest Quest data to be created
* returns quest
* */
const createquest = ({ quest }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await new Quest(quest).save();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Delete the element
*
* questId String the Id parameter
* no response value expected for this operation
* */
const deletequest = ({ questId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Quest.findOneAndDelete({ _id:questId }).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all the data
*
* returns Object
* */
const getAllquest = () => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Quest.find().exec();
      // this is a test
      resolve(Service.successResponse(query));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all the data based on user query
*
* filter String the query based on which the search is performed
* returns Object
* */
const getByParamsquest = ({ filter }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Quest.find(JSON.parse( filter )).exec();
      // this is a test
      resolve(Service.successResponse(query));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get the element
*
* questId String the Id parameter
* returns quest
* */
const getquest = ({ questId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Quest.findById(questId)
      .exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Updates the element
*
* questId String the Id parameter
* quest Quest data to be updated (optional)
* returns quest
* */
const updatequest = ({ questId, quest }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Quest.findOneAndUpdate({ _id:questId },quest).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  createquest,
  deletequest,
  getAllquest,
  getByParamsquest,
  getquest,
  updatequest,
};
