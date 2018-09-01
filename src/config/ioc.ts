import 'reflect-metadata';
import { Container } from 'inversify';
import { TYPE } from 'inversify-restify-utils';
import { TodosController } from '../app/todos';

let container = new Container();
container.bind<TodosController>(TYPE.Controller).to(TodosController).inRequestScope();

export default container;