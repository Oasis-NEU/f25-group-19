class Chores {
    task_title: string;
    frequency: string; // temp
    time_type: string; // (may have to check code from OOD project for this)
    completion: boolean;
    // tags?: (is it needed)
    description?: string;


    constructor(task_title: string, frequency: string, time_type: string, completion: boolean, description?: string,) {
        this.task_title = task_title;
        this.frequency = frequency;
        this.time_type = time_type;
        this.completion = completion;
        this.description ?? description;
    }


    edit_task(new_title: string): void {
        this.task_title = new_title;
    }

    edit_frequency(new_frequency: string): void {
        this.frequency = new_frequency;
    }

    edit_time_type(new_time_type: string): void {
        this.time_type = new_time_type;
    }

    edit_completion(new_completion: boolean): void {
        this.completion = new_completion;
    }

    edit_description(new_description: string): void {
        this.description = new_description;
    }

}

export default Chores