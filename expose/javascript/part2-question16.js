let statistics = {
    redcars: 21,
    bluecars: 45,
    greencars: 12,
    racecars: 5,
    blackcars: 40,
    rarecars: 2,
}

for (let property in statistics) {
    if (property.startsWith('r') || statistics[property] % 2 !== 0) {
        console.log(statistics[property]);
    }
}
