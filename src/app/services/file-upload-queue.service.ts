import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { IInput } from "../models/input.interface";

@Injectable({
    providedIn: 'root'
})
export class FileUploadQueueService {
    private inputValueSubject;
    inputValue$;

    constructor(input: IInput) {
        this.inputValueSubject = new BehaviorSubject<IInput>(input);
        this.inputValue$ = this.inputValueSubject.asObservable();
    }

    initialize(input: IInput) {
        this.inputValueSubject.next(input);
    }

    getInputValue() {
        return this.inputValueSubject.getValue();
    }
}
