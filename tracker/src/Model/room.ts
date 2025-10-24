import type Chores from "./chores";
import type User from "./user";

class room {
    users: User[]
    room_code: number;
    chore_list: Map<string, Chores>; // this means chore title has to be unique since string will be chore.task_title

    
    
    constructor(users: User[], room_code: number) {
        this.users = users;
        this.room_code = room_code;
        this.chore_list = new Map<string, Chores>(); // change this once impelmentation is done 
    }



    // default chore_list needs to be implemented 


}