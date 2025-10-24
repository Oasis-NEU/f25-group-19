class User {
    // id: string;
    username: string; // acting as id (unique)
    name: string;
    email: string;
    phone: number; // can maybe change to string for dashes
    living_time: Date;
    // rooms = // Room.ts

    
    constructor(username:string, name:string, email:string, phone:number, living_time:Date) {
        this.username=username;
        this.name=name;
        this.email=email;
        this.phone=phone;
        this.living_time=living_time;
    }
}

export default User;