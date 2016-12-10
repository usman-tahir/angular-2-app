
import {Component} from 'angular2/core';

@Component({
    selector: 'courses',
    template: `
        <h2>Courses</h2>
        {{ title }}
        <ul>
            <li *ngFor="#course of courses">
                {{ course }}
            </li>
        </ul>
        `
})
export class CoursesComponent { 
    title = 'The title of the Courses page';
    courses = [
        'Course one',
        'Course two',
        'Course three'
    ];
}