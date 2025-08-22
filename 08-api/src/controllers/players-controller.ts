import { Request, response, Response } from "express";
import * as service from "../services/players-service";
import { getPlayerByIdService } from "../services/players-service";
import { noContent } from "../utils/http-helper";


export const getPlayer = async (req: Request, res: Response) => {
    const HttpResponse = await service.getPlayerService();    
    res.status(HttpResponse.statusCode).json(HttpResponse.body);
  };

export const getPlayerById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const HttpResponse = await getPlayerByIdService(id);

    return res.status(HttpResponse.statusCode).json(HttpResponse.body);
  } catch (error: any) {
    return res.status(error?.statusCode || 500).json({
      message: error?.message || "Erro interno no servidor",
    });
  }
};

export const postPlayer = async (req: Request, res: Response) => {
  const bodyValue = req.body;
  const HttpResponse = await service.createPlayerService(bodyValue);

  if(HttpResponse) {
    res.status(HttpResponse.statusCode).json(HttpResponse.body);
  } else {
    const response = await noContent();
    res.status(response.statusCode).json(response.body);
  }
};
