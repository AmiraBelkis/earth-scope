const url_api = import.meta.env.VITE_API_URL || 'https://earth-scope-server.vercel.app/api';
export const menuItems = [
    { id: 1, title: 'Map', link: '/', disabled: false },
    { id: 2, title: 'Statistics', link: '/statistics', disabled: true },
    { id: 3, title: 'About', link: '/about', disabled: false },
];

export const iconsToLoad = [
    'mingcute:down-line',
    'mingcute:up-line',
    'uil:calender',
    'jam:alert',
    'jam:info',
];

export const statusOption = [
    { value: 'all', label: 'All' },
    { value: 'open', label: 'Open' },
    { value: 'closed', label: 'Closed' }
]
export const urls = {
    'regions': url_api + '/filters/regions',
    'categories': url_api + '/filters/categories',
    'sources': url_api + '/filters/sources',
    "goeData": url_api + '/map/events/goejson'
}

export const mapCenter = {
    'all': [2, [0, 0]],
    'africa': [3, [11.434659, 18.782271]],
    'southAmerica': [3, [-13.801685, -58.462325]],
    'northAmerica': [3, [46.885813, -105.395919]],
    'europe': [4, [52.051093, 15.967261]],
    'asia': [3, [49.514602, 97.580542]],
    'oceania': [4, [-26.947423, 138.412674]],
    'antarctica': [3, [-54.702970, 69.857986]],
}