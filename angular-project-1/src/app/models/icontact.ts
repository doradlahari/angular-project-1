export class icontact{
    public id:number;
    public name:string;
    public email:string;
    public mobile:string;
    public company:string;
    public title:string;
    public role:string;
    public picture:string;
    constructor(id:number,
        name:string,
        email:string,
        mobile:string,
        company:string,
        title:string,
        role:string,
        picture:string){
this.id=id,
this.name=name,
this.mobile=mobile,
this.email=email,
this.company=company,
this.title=title,
this.role=role,
this.picture=picture

        }
}