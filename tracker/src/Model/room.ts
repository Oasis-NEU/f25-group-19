import Chores from "./chores";
import type User from "./user";

class room {
    users: Map<string, User>; // string is the user_email 
    room_code: number;
    chore_list: Map<string, Chores>; // this means chore title has to be unique since string will be chore.task_title
    owner: string;



    constructor() {
        this.users = new Map<string, User>(); // in the controller, the user who created the room should be added using the method addUser
        this.room_code = 0; // make function that randomizes number and cant be the same (check in database)
        this.chore_list = new Map<string, Chores>(); // change this once impelmentation is done 
        this.owner = '';
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


    /**
     * adds a chore to the chore map 
     * @param task_title the title of the task 
     * @param frequency the frequency of the task
     * @param completion the completion status of the task 
     * @param description the description of the task 
     * 
     * all of this info is coming from the controller 
     */
    add_chore(task_title: string, frequency: Date, completion: boolean, description?: string): void {
        if (!this.chore_list.has(task_title)) {
            const new_chore = new Chores(task_title, frequency, completion, description) // check if this doesnt add description if not there
            this.chore_list.set(task_title, new_chore);
        } else {
            throw new Error('Chore already exists'); 
        }
    }

    // deletes a chore from the chore map based on the task title (given by controller)
    delete_chore(task_title: string): void {
        if(this.chore_list.has(task_title)) {
            this.chore_list.delete(task_title)
        } else {
            throw new Error('Cannot find chore')
        }
    }
    

    // the email of the owner (controller should call on this when user creates a room)
    addOwner(user_email: string) {
        this.owner = user_email;
    }

    // adds a user to the room
    addUser(user_email: string): void {
        // if backend has username:
        // add to user[]
        const user = this.users.get(user_email)
            if (user) {
                user.add_user_to_room(this.room_code)
            }
        // else:
        // throw error 

    }


    // removes a user from the room
    removeUser(user_email: string): void {
        // if current user is owner: put inside if statement
        if (this.users.has(user_email) ) {
            const user = this.users.get(user_email)
            if (user) {
                user.remove_user_from_room()
            }
            this.users.delete(user_email)
            // call on user to remove 
        } else {
            throw new Error('User does not exist in room')
        }
    }







}






// default chore_list needs to be implemented 



