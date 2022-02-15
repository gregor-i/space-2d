import rng from 'rng';

export function generateRandomSeed(): string {
    return (Math.random() * 1000000000000000000).toString(36);
}

export function hashcode(str: string): number {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
        var char = str.charCodeAt(i)
        hash += (i + 1) * char;
    }
    return hash;
}

export function rand(seed: string, offset: number) {
  return new rng.MT(hashcode(seed) + offset);
}
