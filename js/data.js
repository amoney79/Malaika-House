const villaData = {
    'nyumba-malaika': {
        name: 'Nyumba Malaika',
        location: 'Jacaranda, Kenya',
        price: '450',
        description: 'Elite luxury meets coastal charm. Nyumba Malaika offers the most exclusive experience in Jacaranda with sprawling estates and unmatched privacy.',
        host: 'Amina',
        mainImage: 'images/villa-card-7.jpg',
        images: [
            'images/villa-list-7.jpg',
            'images/villa-list-3.jpg',
            'images/villa-list-4.jpg'
        ],
        amenities: ['Private Infinity Pool', 'Starlink Wifi', 'Private Chef', 'Beach Access'],
        gallery: [
            { img: 'images/villa-list-7.jpg', title: 'The Estate', sub: 'Majestic Living' },
            { img: 'images/villa-list-3.jpg', title: 'Ocean View', sub: 'Infinite Horizon' },
            { img: 'images/villa-list-4.jpg', title: 'Lounge Area', sub: 'Coastal Living' }
        ]
    },
    'sunset-villa': {
        name: 'Nyumba Malaika - Sunset',
        location: 'Jacaranda, Kenya',
        price: '450',
        description: 'Experience luxury steps away from the ocean. This villa features a private pool, direct beach access, and is located just minutes from the famous Tsavo East National Park safari gate.',
        host: 'Amina',
        mainImage: 'images/Villa-card-1.jpg',
        images: [
            'images/villa-list-1.jpg',
            'images/villa-list-2.jpg',
            'images/villa-list-3.jpg'
        ],
        amenities: ['Private Infinity Pool', 'Starlink Wifi', 'Private Chef', 'Beach Access'],
        gallery: [
            { img: 'images/Villa-card-1.jpg', title: 'Beachfront Bliss', sub: 'Included activity' },
            { img: 'images/villa-list-1.jpg', title: 'Safari Connection', sub: 'Included access' },
            { img: 'images/villa-list-2.jpg', title: 'Tsavo Gateway', sub: 'Nearby adventure' }
        ]
    },
    'glass-house': {
        name: 'Nyumba Malaika - Glass House',
        location: 'Jacaranda, Kenya',
        price: '550',
        description: 'A modern architectural marvel featuring floor-to-ceiling glass walls with panoramic ocean views and ultra-minimalist interiors.',
        host: 'Sarah',
        mainImage: 'images/Villa-card-2.jpg',
        images: [
            'images/villa-list-5.jpg',
            'images/villa-list-6.jpg'
        ],
        amenities: ['360° Glass Walls', 'Smart Automation', 'Rooftop Lounge', 'Infinity Edge Pool'],
        gallery: [
            { img: 'images/Villa-card-2.jpg', title: 'Transparency', sub: 'Modern Design' },
            { img: 'images/villa-list-5.jpg', title: 'Jacaranda Skyline', sub: 'Sunset Horizon' }
        ]
    },
    'coral-cove': {
        name: 'Nyumba Malaika - Coral Cove',
        location: 'Jacaranda, Kenya',
        price: '380',
        description: 'A peaceful retreat nestled among ancient coral cliffs with private beach access and lush tropical gardens.',
        host: 'David',
        mainImage: 'images/Villa-card-3.jpg',
        images: [
            'images/villa-list-6.jpg',
            'images/villa-list-8.jpg'
        ],
        amenities: ['Coral Garden', 'Natural Stone Tubs', 'Private Jetty', 'Snorkeling Gear'],
        gallery: [
            { img: 'images/Villa-card-3.jpg', title: 'Cliffside', sub: 'Natural Beauty' }
        ]
    },
    'savanna-oasis': {
        name: 'Nyumba Malaika - Savanna',
        location: 'Jacaranda, Kenya',
        price: '420',
        description: 'A luxurious lodge situated on the edge of Tsavo East, offering front-row seats to the majestic wildlife and African plains.',
        host: 'Suleiman',
        mainImage: 'images/villa-card-5.jpg',
        images: [
            'images/villa-list-8.jpg',
            'images/villa-list-1.jpg'
        ],
        amenities: ['Waterhole View', 'Guided Safari Safaris', 'Luxury Bush Dining', 'Star-Gazing Deck'],
        gallery: [
            { img: 'images/villa-card-5.jpg', title: 'Savanna plains', sub: 'Wild Life' }
        ]
    },
    'indigo-bay': {
        name: 'Nyumba Malaika - Indigo Bay',
        location: 'Jacaranda, Kenya',
        price: '480',
        description: 'A contemporary villa overlooking the turquoise waters of Kilifi Creek, perfect for water sports enthusiasts and relaxation seekers alike.',
        host: 'Fatuma',
        mainImage: 'images/villa-card-8.jpg',
        images: [
            'images/villa-list-1.jpg',
            'images/villa-list-2.jpg'
        ],
        amenities: ['Private Pier', 'Infinity Creek Pool', 'Water Sports Equipment', 'Seafood Terrace'],
        gallery: [
            { img: 'images/villa-card-8.jpg', title: 'The Bay', sub: 'Calm Waters' }
        ]
    },
    'royal-palms': {
        name: 'Nyumba Malaika - Royal Palms',
        location: 'Jacaranda, Kenya',
        price: '600',
        description: 'Elite luxury meets coastal charm. The Royal Palms offers the most exclusive experience in Watamu with sprawling estates and unmatched privacy.',
        host: 'Amina',
        mainImage: 'images/Villa-card-6.jpg',
        images: [
            'images/villa-list-2.jpg',
            'images/villa-list-3.jpg'
        ],
        amenities: ['Sprawling Gardens', 'Private Butler', 'Olympic-Sized Pool', 'Helipad Access'],
        gallery: [
            { img: 'images/Villa-card-6.jpg', title: 'The Estate', sub: 'Majestic Living' }
        ]
    },
    'azure-palm': {
        name: 'Nyumba Malaika - Azure Palm',
        location: 'Jacaranda, Kenya',
        price: '450',
        description: 'A serene coastal escape in Watamu, featuring breathtaking views of the Indian Ocean and Swahili-inspired architecture.',
        host: 'Amina',
        mainImage: 'images/villa-list-4.jpg',
        images: [
            'images/villa-list-4.jpg',
            'images/villa-list-7.jpg'
        ],
        amenities: ['Oceanfront Pool', 'Private Beach Access', 'Personal Chef', 'High-Speed Wi-Fi'],
        gallery: [
            { img: 'images/villa-list-4.jpg', title: 'Ocean View', sub: 'Infinite Horizon' }
        ]
    }
};

const safariData = {
    'red-earth': {
        name: 'The Red Earth Safari',
        location: 'Tsavo East, Kenya',
        price: '1,200',
        description: 'Discover the famous red elephants of Tsavo and experience the ultimate wilderness adventure.',
        mainImage: 'images/safari-grid-2.jpg',
        timeline: [
            { day: '01', title: 'Arrival & Tsavo Entry', desc: 'Transfer from the coast to Tsavo East.' },
            { day: '02', title: 'Big Five Tracking', desc: 'Full day of exploration.' },
            { day: '03', title: 'Sunrise Drive & Departure', desc: 'Final game drive at dawn.' }
        ],
        gallery: [
            { img: 'images/safari-grid-2.jpg', title: 'Red Elephants', sub: 'Wild sightings' }
        ]
    },
    'great-migration': {
        name: 'Great Migration',
        location: 'Serengeti NP',
        price: '1,800',
        description: 'Witness the largest mass movement of land mammals on earth.',
        mainImage: 'images/Safari-grid-1.jpg',
        timeline: [
            { day: '01', title: 'Fly-in Safari', desc: 'Arrival at Serengeti airstrip.' },
            { day: '02-04', title: 'Following the Herd', desc: 'Daily drives to witness crossing.' },
            { day: '05', title: 'Farewell Serengeti', desc: 'Morning drive and fly back.' }
        ],
        gallery: [
            { img: 'images/Safari-grid-1.jpg', title: 'Mara River Crossing', sub: 'Dramatic Moment' }
        ]
    },
    'kilimanjaro-shadows': {
        name: 'Kilimanjaro Shadows',
        location: 'Amboseli NP',
        price: '950',
        description: 'Elephant encounters under Mt. Kilimanjaro.',
        mainImage: 'images/safari-grid-3.jpg',
        timeline: [
            { day: '01', title: 'Mountain Views', desc: 'Check-in with clear views of the peak.' },
            { day: '02', title: 'Giant Tuskers', desc: 'Observing world-famous elephant herds.' }
        ],
        gallery: [
            { img: 'images/safari-grid-3.jpg', title: 'Elephant Herd', sub: 'Mountain Shadows' }
        ]
    },
    'maasai-mara-echo': {
        name: 'Maasai Mara Echo',
        location: 'Maasai Mara',
        price: '1,500',
        description: 'Premium big five tracking and cultural visits.',
        mainImage: 'images/safari-grid-4.jpg',
        timeline: [
            { day: '01', title: 'Mara Entry', desc: 'Game drive to the camp.' },
            { day: '02-03', title: 'Endless Plains', desc: 'Extensive tracking of the Big Five.' }
        ],
        gallery: [
            { img: 'images/safari-grid-4.jpg', title: 'Lioness', sub: 'Mara Plains' }
        ]
    },
    'samburu-secrets': {
        name: 'Samburu Secrets',
        location: 'Samburu NR',
        price: '1,100',
        description: 'Rare wildlife encounters in Northern Kenya.',
        mainImage: 'images/safari-grid-5.jpg',
        timeline: [
            { day: '01', title: 'Northern Frontier', desc: 'Journey to the arid north.' },
            { day: '02', title: 'Special Five', desc: 'Spotting the endemic species of Samburu.' }
        ],
        gallery: [
            { img: 'images/safari-grid-5.jpg', title: 'Gerenuk', sub: 'Samburu Special' }
        ]
    },
    'pink-lake-safari': {
        name: 'Pink Lake Safari',
        location: 'Lake Nakuru NP',
        price: '850',
        description: 'Flamingos and rhino sanctuary.',
        mainImage: 'images/safari-grid-6.jpg',
        timeline: [
            { day: '01', title: 'Rift Valley Descent', desc: 'Scenic drive to Lake Nakuru.' },
            { day: '02', title: 'Lake Exploration', desc: 'Game drives around the lake shore.' }
        ],
        gallery: [
            { img: 'images/safari-grid-6.jpg', title: 'Flamingos', sub: 'Pink Horizon' }
        ]
    },
    'gorge-exploration': {
        name: 'Gorge Exploration',
        location: 'Hell\'s Gate NP',
        price: '600',
        description: 'Cycling and rock climbing.',
        mainImage: 'images/safari-grid-7.jpg',
        timeline: [
            { day: '01', title: 'Geothermal Valley', desc: 'Cycling through the gorge.' }
        ],
        gallery: [
            { img: 'images/safari-grid-7.jpg', title: 'The Gorge', sub: 'Rock Climbing' }
        ]
    },
    'born-free-safari': {
        name: 'Born Free Safari',
        location: 'Meru NP',
        price: '900',
        description: 'Follow the footsteps of George and Joy Adamson.',
        mainImage: 'images/safari-grid-8.jpg',
        timeline: [
            { day: '01', title: 'Wild Meru', desc: 'Check-in at the remote Elsa\'s Kopje.' },
            { day: '02', title: 'Tracking Lions', desc: 'Exploring the diverse habitats of Meru.' }
        ],
        gallery: [
            { img: 'images/safari-grid-8.jpg', title: 'Meru Wilds', sub: 'Born Free' }
        ]
    },
    'heritage-tour': {
        name: 'Heritage Tour',
        location: 'Museums & Ruins',
        price: '150',
        description: 'Discover the Swahili history at Gede Ruins and Malindi Museum.',
        mainImage: 'images/safari-grid-2.jpg',
        timeline: [
            { day: '01', title: 'Ancient Gede', desc: 'Guided walk through the 12th-century ruins.' },
            { day: '02', title: 'Malindi Museum', desc: 'Swahili artifacts and colonial history.' }
        ],
        gallery: [
            { img: 'images/safari-grid-2.jpg', title: 'Ancient Gede', sub: 'Swahili History' }
        ]
    }
};
