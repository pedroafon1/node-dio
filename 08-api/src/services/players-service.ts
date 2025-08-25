import { response } from "express";
import { PlayerModel } from "../models/player-model";
import * as PlayerRepository from "../repositories/players-repository";
import * as result from "../utils/http-helper";
import { StatisticsModel } from "../models/statistics-model";

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
  let response = null;
  // verifica se está vazio
  if(Object.keys(player).length !== 0) {
    await PlayerRepository.insertPlayer(player);
    response = await result.created();
    
  } else {
    response = await result.badRequest();
  }

  return response;
};

export const deletePlayerService = async (id: number) => {
  let response = null;
  const isDeleted = await PlayerRepository.deleteOnePlayer(id);
  if (isDeleted){
    response = await result.ok({message: "Player deleted"});
  } else {
    response = await result.badRequest();
  }

  return response;
};

export const updatePlayerService = async (id: number, statistics: StatisticsModel) => {
  const data = await PlayerRepository.findAndModifyPlayer(id, statistics);
  let response = null
  if(Object.keys(data).length === 0) {
    response = await result.badRequest();
  } else {
    response = await result.ok(data);
  }
  
  return response
}
