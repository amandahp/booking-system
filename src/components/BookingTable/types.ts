interface ScheduleTableObjects {
 date?: any;
 client?: string;
 observations?: string;
 city?: string;
 aveilability?: boolean;
}



export interface BookingTableProps {
 data: ScheduleTableObjects[];
}