export class icontact{
    public _id:string;
    public name:string;
    public email:string;
    public mobile:string;
    public company:string;
    public role:string;
    public picture:string;
    constructor(id:string,
        name:string,
        email:string,
        mobile:string,
        company:string,
        role:string,
        picture:string){
this._id=id,
this.name=name,
this.mobile=mobile,
this.email=email,
this.company=company,
this.role=role,
this.picture=picture

        }
}