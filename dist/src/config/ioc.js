"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const inversify_1 = require("inversify");
const inversify_restify_utils_1 = require("inversify-restify-utils");
const todos_1 = require("../app/todos");
let container = new inversify_1.Container();
container.bind(inversify_restify_utils_1.TYPE.Controller).to(todos_1.TodosController).inRequestScope();
exports.default = container;
//# sourceMappingURL=ioc.js.map