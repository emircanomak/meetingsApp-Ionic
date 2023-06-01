export interface ICreateMeetingModel {
    id:number;
    customerName:string;
    customerLastName:string;
    dateOfMeeting:Date;
    timeOfMeeting:number;
    service:Array<string>;
    
}