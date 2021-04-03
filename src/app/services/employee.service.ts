import { Injectable } from '@angular/core';
import { EmployeeRepository } from '../repositories/employee.repository';
import { Employee } from '../models/employee.class';

@Injectable({
    providedIn: 'root',
})
export class EmployeeService {
    constructor() { }

    read(): Employee[] {
        return EmployeeRepository.instance.read();
    }

    update(model: Employee): boolean {
        return EmployeeRepository.instance.update(model);
    }

    create(model: Employee): boolean {
        return EmployeeRepository.instance.create(model);
    }

    delete(id: number): boolean {
        return EmployeeRepository.instance.delete(id);
    }

    getKeys(): string[] {
        return EmployeeRepository.instance.getKeys();
    }
}
