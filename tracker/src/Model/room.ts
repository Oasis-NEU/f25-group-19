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

    // checks if the given chore title is in the room
    chore_exists(chore: string): boolean {
        return this.chore_list.has(chore)
    }


    /**
     * 
     * @param chore the given string (title name of the chore)
     * @param element the type of element in the Chore to change (controller will specify)
     * @param change the actual value to change the element to
     */
    edit_specific_chore(chore: string, element: string, change: any): void {
        if (this.chore_exists(chore) == true) {
            switch (element) {
                case 'TITLE': // make sure controller has this exact string for element and for the rest
                    if (this.chore_exists(change) == false) {
                        this.chore_list.get(chore)?.edit_task(change)
                    } else {
                        throw new Error('chore title already exists')
                    }
                    break;
                case 'DESCRIPTION':
                    this.chore_list.get(chore)?.edit_description(change)
                    break;
                case 'FREQUENCY':
                    if (change instanceof Date) {
                        this.chore_list.get(chore)?.edit_frequency(change)
                    } else {
                        throw new Error('not a valid Date')
                    }
                    break;
                case 'COMPLETION':
                    if (change == true || change == false) {
                        this.chore_list.get(chore)?.edit_completion(change)
                    } else {
                        throw new Error('not a valid boolean')
                    }
                    break;
            }
        } else {
            throw new Error('chore does not exist')
        }

    }

}




// default chore_list needs to be implemented 


