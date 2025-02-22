export class Event{
    public eventId:number=0;
    public eventTitle:string="";
    public eventDescription:string="";
    public eventStartTime:Date=new Date();
    public eventEndTime:Date=new Date();
    public eventLocation:string="";
    public eventPrice:number=0;
    public eventType:string="";
    public totalTickets:number=0;
    public totalReceivedAmount:number=0;
    public payToPlatform:number=0;
    isSuspended:boolean=false;
    public attendeeId?:number;
    public organizerId?:number;
}