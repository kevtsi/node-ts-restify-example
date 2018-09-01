import { Request, Response, Next } from 'restify';
import { injectable, inject } from 'inversify';
import { Controller, Get } from 'inversify-restify-utils';

@Controller('/todos')
@injectable()
export class TodosController {
    todos = [{
        description: 'do some things',
        createdBy: 'joe',
        createdAt: undefined
    }]

    constructor() {}

    @Get('/')
    public getTodos(req: Request, res: Response, next: Next) {
        req.log.info(`getTodos called`);
        res.send(this.todos);
        return next();
    }

}