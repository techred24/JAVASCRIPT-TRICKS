const adversario = 'Iron man';

const LOKI_DISFRACES = {
    // The values could be methods: 'Iron main': () => 4 + 5
    'Iron man': () => 'Magneto',
    Thor: () => 'Odin',
    Hulk: () => 'Thanos'
}

const LOKI_DEFAULT_DISFRAZ = 'Loki';

let loki = LOKI_DISFRACES[adversario]() || LOKI_DEFAULT_DISFRAZ;
console.log(loki);