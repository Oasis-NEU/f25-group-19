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


    edit_task(new_title: string): void {
        this.task_title = new_title;
    }

    edit_frequency(new_frequency: Date): void {
        this.frequency = new_frequency;
    }

    edit_completion(new_completion: boolean): void {
        this.completion = new_completion;
    }

    edit_description(new_description: string): void {
        this.description = new_description;
    }



}

export default Chores