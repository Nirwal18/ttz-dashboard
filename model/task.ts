export class Task {
    constructor(
        public title: string = "",
        public shortInfo: string = "",
        public details: string = "",
        public startDate = "",
        public targetDate = ""
    ) { }
}