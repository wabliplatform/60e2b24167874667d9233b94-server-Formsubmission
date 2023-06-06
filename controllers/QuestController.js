/**
 * The QuestController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/QuestService');
const createquest = async (request, response) => {
  await Controller.handleRequest(request, response, service.createquest);
};

const deletequest = async (request, response) => {
  await Controller.handleRequest(request, response, service.deletequest);
};

const getAllquest = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllquest);
};

const getByParamsquest = async (request, response) => {
  await Controller.handleRequest(request, response, service.getByParamsquest);
};

const getquest = async (request, response) => {
  await Controller.handleRequest(request, response, service.getquest);
};

const updatequest = async (request, response) => {
  await Controller.handleRequest(request, response, service.updatequest);
};


module.exports = {
  createquest,
  deletequest,
  getAllquest,
  getByParamsquest,
  getquest,
  updatequest,
};
