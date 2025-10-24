class Chores {
    task_title: string;
    frequency: Date; // (may have to check code from OOD project for this)
    completion: boolean;
    // tags?: (is it needed)
    description?: string;


    constructor(task_title: string, frequency: Date, completion: boolean, description?: string,) {
        this.task_title = task_title;
        this.frequency = frequency;
        this.completion = completion;
        this.description ?? description;
    }


    



}

export default Chores