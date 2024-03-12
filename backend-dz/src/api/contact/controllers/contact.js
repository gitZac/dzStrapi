"use strict";

/**
 * contact controller
 */

const { createCoreController } = require("@strapi/strapi").factories;
console.log("Something is happenign to me");

module.exports = createCoreController("api::contact.contact");
