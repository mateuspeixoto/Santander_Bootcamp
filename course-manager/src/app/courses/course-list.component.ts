import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
    selector:'app-course-list',
    templateUrl: './course-list.component.html'

})
export class CourseListComponent implements OnInit {

    courses: Course[] = [];
    
    ngOnInit():void{
        this.courses =[{
            id:1,
            name: "Angular: forms",
            imageUrl: '',
            price: 99.99,
            code: 'string',
            duration: 80,
            rating: 10,
            releaseDate: 'December,2,2019'
        },
        {
            id:2,
            name: "Angular: http",
            imageUrl: '',
            price: 99.99,
            code: 'strinassg',
            duration: 80,
            rating: 10,
            releaseDate: 'December,2,2020'
         }]
     }



}