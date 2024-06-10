// TODO: write your code here
export function xpMeasure(a) {
    if (a.health > 50) {
        return 'healthy'
    } else if ( a.health > 15 && a.health < 50 ) {
        return 'wounded'
    } else {
        return 'critical'
    }
}; 

export function sortHealth(heroHealths) {
    return heroHealths.sort((a, b) => b.health - a.health);
}