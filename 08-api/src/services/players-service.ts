import { response } from "express";
import { PlayerModel } from "../models/player-model";
import * as PlayerRepository from "../repositories/players-repository";
import * as result from "../utils/http-helper";

export const getPlayerService = async () => {
  const data = await PlayerRepository.findAllPlayers();
  let response = null;
  
  if (data) {
    response = await result.ok(data);
  } else {
    response = await result.noContent();
  }

  return response;
};


export const getPlayerByIdService = async (id: number) => {
  const data = await PlayerRepository.findPlayerById(id);

  if (data) {
    return result.ok(data);
  } else {
    return result.noContent();
  }
};

export const createPlayerService = async (player: PlayerModel) => {
  // verifica se está vazio

  if(player) {

  } else {
    return HttpResponse.noContent();
  }
};
