class User {
    // id: string;
    // username: string; // acting as id (unique)
    name: string;
    email: string;
    phone: number; // can maybe change to string for dashes
    living_time: Date;
    room_code: number;

    
    constructor(username:string, name:string, email:string, phone:number, living_time:Date) {
       // this.username=username;
        this.name=name;
        this.email=email;
        this.phone=phone;
        this.living_time=living_time;
        this.room_code = 0;
    }

    // check if a user is in a given room
    is_user_in_room(given_room_number: number): boolean {
        return this.room_code == given_room_number;

    }

    // adds a user to the room 
    add_user_to_room(room_number: number): void {
        this.room_code = room_number;
        
    }

    // removes a user from the given room 
    remove_user_from_room(): void {
        this.room_code = 0;
    }
    


}

export default User;