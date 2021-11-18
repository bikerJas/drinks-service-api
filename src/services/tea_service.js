const getTea = (name = 'Lemon') => {
    return {
        drinkType: 'Tea',
        name,
    };
};



module.exports = {
    getTea,
};