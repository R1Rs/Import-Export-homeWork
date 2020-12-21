import Character from "./domain.js";

export default class Game {
   static start() {
      console.log('game started');
    }
  };
  
export class GameSavingData {
  }
  
export function readGameSaving() {
  };
  
export function writeGameSaving() {
  };

  // Раскоментируйте этот код - он не будет работать. Почему?
  // export default Game;
  // export {GameSavingData, readGameSaving, writeGameSaving}

  // class Game {
  //   static start() {
  //      console.log('game started');
  //    }
  //  };
   
  // class GameSavingData {
  //  }
   
  // function readGameSaving() {
  //  };
   
  // function writeGameSaving() {
  //  };