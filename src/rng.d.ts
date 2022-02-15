declare module 'rng' {
    // see https://github.com/jhermsmeier/rng.js/blob/master/rng.js#L161
    declare class MT {
        constructor(number: number)
        random(): number
    }
}