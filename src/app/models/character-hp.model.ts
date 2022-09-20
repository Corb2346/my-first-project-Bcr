export interface CharacterHp {
    name : string,
    healthPoints : number,
    live : boolean,
    skills : string[],
    color? : string,
    showHP():void
}