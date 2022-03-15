export class UserI{
    constructor(
        public name: string, 
        public password: string,
        public address: string,
        public email: string,
        public token?: string
    ){}
}