import { Request, Response } from 'express';
import { ListCategoryService } from '../../services/category/ListCategoryService';

class ListCategoryController {
    async handle(req: Request, res: Response) {

        const listCateroryService = new ListCategoryService();

        const category = await listCateroryService.execute();

        return res.json(category);


    }
}

export { ListCategoryController };