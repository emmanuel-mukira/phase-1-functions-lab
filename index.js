function distanceFromHqInBlocks(pickupStreet){
const hqStreet=42;
 if(pickupStreet>42){
    let distanceBlocks = pickupStreet-hqStreet;
    return distanceBlocks;
}else {
    let distanceBlocks=hqStreet-pickupStreet;
    return distanceBlocks;
}}
distanceFromHqInBlocks(50);

function distanceFromHqInFeet(value){
   let distanceFeet= distanceFromHqInBlocks(value)*264;
   return distanceFeet;
}
distanceFromHqInFeet(50);

function distanceTravelledInFeet(start,end){
    let distance;
    if(start>end){
        distance=(start-end)*264;
    }else{
        distance=(end-start)*264;
    }; return distance}
distanceTravelledInFeet(start,end);

function calculateFarePrice(start,end){
    let charges;
    if (distanceTravelledInFeet(start,end)<=400){
        return 0;
    }else if(400<distanceTravelledInFeet(start,end)&&distanceTravelledInFeet(start,end)<2000){
        charges=(distanceTravelledInFeet(start,end)-400)*0.02;
        return charges;
    }else if (2000<distanceTravelledInFeet(start,end)&&distanceTravelledInFeet(start,end)<2500){
        charges =25;
        return charges;

    }else{ return "cannot travel that far";
    }
    }
calculateFarePrice(50,66);