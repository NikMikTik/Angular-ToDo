import { EventTable } from "src/app/eventTable";

export interface CategoryDto{
    categoryId:number;
    categoryName:string;
    eventDto:EventTable;
    categoryTotalEvents:number;
    completedEvents:number;
    remainingEvents:number;

}