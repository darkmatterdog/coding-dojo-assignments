const object1 = {
    closedCreditMemos: [],

    closedDeliveryOrders: [],

    closedPickupOrders: [
        { id: 112, type: "pickup" },
        { id: 117, type: "pickup" },
    ],

    openCreditMemos: [],

    openDeliveryOrders: [
        {
        id: 123,
        type: "delivery",
        gateCode: "#2552",
        },
        {
        id: 153,
        type: "delivery",
        instructions: "Place in secure delivery box.",
        },
    ],

    openPickupOrders: [
        {
        id: 123,
        type: "pickup",
        },
    ],

    returnPickupOrders: [],
};





// non-functional solution
function flattenObjectArray(object){
    let output = [];

    return output;
}


// functional solution
function flattenObjectArrayFunctional(object){
    return Object.values(object)
        .reduce((previous,current) => previous.concat(current))
        .map(object => { return {id: object.id, type: object.type} });
}


// ## TEST CASES ##

console.log(flattenObjectArrayFunctional(object1));