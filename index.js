const drivers=['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers=(drivers)=>{
    const newArray=drivers.slice(0,2)
    return (newArray);
}
const returnLastTwoDrivers=(drivers)=>{
    const lastdrivers=drivers.slice(-2)
    return (lastdrivers)
}
const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];

const createFareMultiplier=(num1)=>{
    return()=>num1*5
}
const fareDoubler=(num2)=>{
     return num2*2;
}
const fareTripler=(num3)=>{
    return num3*3;
}
const selectDifferentDrivers=(drivers,value)=>{
    return value(drivers)

}