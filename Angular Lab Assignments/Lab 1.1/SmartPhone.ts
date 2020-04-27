import {Mobile} from './mobile'
class SmartPhone extends Mobile
{
mobileType:string;
constructor(mobileId:number, mobileName:string, mobileCost:number,mobileType:string)
{
super(mobileId,mobileName,mobileCost);
this.mobileType=mobileType;
}
printMobileDetails():void{
    console.log("MobileId:"+this.mobileId);
    console.log("MobileName:"+this.mobileName);
    console.log("MobileCost:"+this.mobileCost);
console.log("MobileType:"+this.mobileType);
}
}
var p=new SmartPhone(1001,"vivo",19000,"SmartPhone");
p.printMobileDetails();