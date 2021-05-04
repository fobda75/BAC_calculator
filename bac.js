$(document).ready(function () {
    // event handlers
    $("#calculateButton").on("click", calculateBac);
});

function calculateBac(){
    let beerOz = $("#beerNumber").val() * .54;
    let wineOz = $("#wineNumber").val() * .6;
    let liquorOz = $("#liquorNumber").val() * .6
    let totalAlcohol = beerOz + wineOz + liquorOz;
    let alcoholAbsorbed = totalAlcohol * 7.5;
    let grossBloodAlcohol = alcoholAbsorbed / $("#drinkerWeight").val();
    let processedBloodAlcohol = $("#drinkingTime").val() *0.015;
    let netBloodAlcohol = grossBloodAlcohol - processedBloodAlcohol;

    $("#bloodAlcoholOutput").text(`Your current BAC is ${netBloodAlcohol.toFixed(3)}`)
}