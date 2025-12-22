const villaData = {
    'sunset-villa': {
        name: 'Nyumba Malaika - Sunset',
        location: 'Palm Coast, Kenya',
        price: '450',
        rating: '4.9',
        host: 'Amina',
        description: 'Experience luxury steps away from the ocean. This villa features a private pool, direct beach access, and is located just minutes from the famous Tsavo East National Park safari gate.',
        mainImage: 'images/Villa-card-1.jpg',
        images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuDh0CK6YbQcoeJN3is1PzuRdgZqpAdYZDL7-rz-kPpDeCW71I8LPK7NsGCWq-3xwn7juQ2zQAL9KBDsxXvH3M2fJO3A247CNte4ZhvnKPtnQmY9qWiesNTRKC_VP8pJOGqiO9yX8hXLA8jOXIwB4fBmlJlII3cPWNiZRD7sFG_ONx514_OvRxIBdGAzhqvSVQqg-hXkiUCpBoygPmoX8XoVV0LH2kN221u4P5VJdjlMFMIUpomr82T5l79OQEnD6kH-9dg8tvt1gcUz', 'https://lh3.googleusercontent.com/aida-public/AB6AXuClkfqJftTHF22Z2QUHlRqIwV81xtL5x0aNEuoskwBkDb5A4vVg7EPOaoTa4HKVd0KmabRnkvTwP-vONnSO5SBrk5XsaeDRFIGnGm2py1kHEL6kYcca__YM0WVJb0R7bebWZ3Zj2h8SUM1vSAX64er6nG6-_B68vLtN6f0VZ3lux_Tnh3KnIdExTRCRfRtrw8i2AJWkYoOoQVRBF8Bws8xqW8QGXviAjN-Dzo89cKI5OvkYzbrczEFqB5ZMfpWLlZiOQHpj7cVTfCpn', 'https://lh3.googleusercontent.com/aida-public/AB6AXuAoesWLQ0C9nSvNolj3w1_oaZASkUH7dWc2WB1JAnD95tOcwoTgGuN8FAAWbCmaHfojvAziAXcAYh13wiJ38RLNPI1NQtkdnKbkZsbWSCtJ2C4rf8-VDABj3JA1Uk_1YECkn8nFW05L6uoLoc0sHDetXhfZmXRToPEXlpwgij8JTC290P62r2Iyj9SWhq0STu20hWwexPIGV-3CFafPpjxyYUPA4-pdjORPP4C9VH478FyqvICzyvGLRCPY_i-ezmL85bHbLIc1v2Cv'],
        amenities: ['Private Infinity Pool', 'Starlink Wifi', 'Private Chef'],
        gallery: [
            { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9O9WlFIZHAYhWbaEtDoJfldMt6PtvfaFaiASBt407-CEy4reMgfo-d8KgH9u58FK5DmyxUiP4pJ8FsJ9FiSRbHpPoEqT59mnL9XzEZv3qfVbFVTz1vG7I7C1GDEXC90ORCdTzB2_uy8Mcd14LU6sxNV6X0zAvNKPgrRHhTzV5jXDWQHLbyaMnmrqeIUTfH8aOYJSDC9UG25zyaPEWU5Js1RQWu6p_WHj5Uz_VBZM1qAk3DIYl1cLalhJf18Vc7UBLGO823YqQf-lS', title: 'Beachfront Bliss', sub: 'Included activity' },
            { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAoesWLQ0C9nSvNolj3w1_oaZASkUH7dWc2WB1JAnD95tOcwoTgGuN8FAAWbCmaHfojvAziAXcAYh13wiJ38RLNPI1NQtkdnKbkZsbWSCtJ2C4rf8-VDABj3JA1Uk_1YECkn8nFW05L6uoLoc0sHDetXhfZmXRToPEXlpwgij8JTC290P62r2Iyj9SWhq0STu20hWwexPIGV-3CFafPpjxyYUPA4-pdjORPP4C9VH478FyqvICzyvGLRCPY_i-ezmL85bHbLIc1v2Cv', title: 'Safari Connection', sub: 'Included access' },
            { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDh0CK6YbQcoeJN3is1PzuRdgZqpAdYZDL7-rz-kPpDeCW71I8LPK7NsGCWq-3xwn7juQ2zQAL9KBDsxXvH3M2fJO3A247CNte4ZhvnKPtnQmY9qWiesNTRKC_VP8pJOGqiO9yX8hXLA8jOXIwB4fBmlJlII3cPWNiZRD7sFG_ONx514_OvRxIBdGAzhqvSVQqg-hXkiUCpBoygPmoX8XoVV0LH2kN221u4P5VJdjlMFMIUpomr82T5l79OQEnD6kH-9dg8tvt1gcUz', title: 'Infinity Serenity', sub: 'Private Pool' },
            { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClkfqJftTHF22Z2QUHlRqIwV81xtL5x0aNEuoskwBkDb5A4vVg7EPOaoTa4HKVd0KmabRnkvTwP-vONnSO5SBrk5XsaeDRFIGnGm2py1kHEL6kYcca__YM0WVJb0R7bebWZ3Zj2h8SUM1vSAX64er6nG6-_B68vLtN6f0VZ3lux_Tnh3KnIdExTRCRfRtrw8i2AJWkYoOoQVRBF8Bws8xqW8QGXviAjN-Dzo89cKI5OvkYzbrczEFqB5ZMfpWLlZiOQHpj7cVTfCpn', title: 'Swahili Dining', sub: 'Culinary Experience' },
            { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRuOgHWJStH-vBL47Cwcml9kPhLUAKj_A9TMgdktpb_Djqj6xOQwJNcvAIaeAQkpWxolcGreV68UNV4IeWbQqM4g_pEem17q1ovariE5MNQZH28If-ZWwfphufFpkQmCN2D-toY5CrpT-crHsDDtSm9VvDD1_b8OYj8bQl_fo3ZD2Vo2URNyCs85KKhtCx_47G45k8y7NOJqpRN_vG7vXUDy2SvzrzWule2bA-GLY5P9ZfBahnLIfxM4KBnte8xHeERX46ldWakoQR', title: 'Morning Drives', sub: 'Wilderness Access' },
            { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuHeMcmgSE9JbXEFWxj5FVxOdsbQcgKH8JADnspxYJZq41ixQWDQNZFGuj72DVPZsRGbXyVkM0uDd3Qp6Qt84N_yjhmhwets-Y1Rhl3Fu2cd-yWYDFR5dAMTEICxKPDystnvmQkDUQ93fBTaxJsvsyLarmp-RUmNZNYZdMf8ioC5PGWBB30xcSzi8jM3IIlFnXwGjZZ-mrH3BXOjJTzyGAx0YLMZM89GdVAVme4WcBKdu9-O6vRcrTHnj5rP1UWhYqe_G3WOk-KqYgE', title: 'Starlit Nights', sub: 'Magical Evenings' }
        ]
    },
    'glass-house': {
        name: 'Nyumba Malaika - Glass House',
        location: 'Jacaranda, Kenya',
        price: '550',
        rating: '4.8',
        host: 'Sami',
        description: 'An architectural marvel on the Diani coast. Wall-to-wall glass provides panoramic ocean views from every room. Modern minimalistic design meets coastal luxury.',
        mainImage: 'images/Villa-card-2.jpg',
        images: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80', 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1171&q=80', 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80'],
        amenities: ['Ocean View Gym', 'Smart Home Tech', 'Private Beach Deck'],
        gallery: [
            { img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80', title: 'Modern Living', sub: 'Architecture' },
            { img: 'https://images.unsplash.com/photo-1600607687940-492002302391?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80', title: 'Ocean Panorama', sub: 'View' },
            { img: 'https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80', title: 'Glass Walls', sub: 'Design' },
            { img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80', title: 'Coastal Mornings', sub: 'Lifestyle' },
            { img: 'https://images.unsplash.com/photo-1600566753086-00f18fb6f3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80', title: 'Deck Dining', sub: 'Food' },
            { img: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80', title: 'Night Glow', sub: 'Atmosphere' }
        ]
    },
    'coral-cove': {
        name: 'Nyumba Malaika - Coral Cove',
        location: 'Malindi, Kenya',
        price: '380',
        rating: '4.7',
        host: 'Fatuma',
        description: 'A cozy retreat nestled in a private cove. Perfect for families looking for a quiet escape with easy access to marine parks.',
        mainImage: 'images/Villa-card-3.jpg',
        images: ['https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80', 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80', 'https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80'],
        amenities: ['Private Garden', 'Snorkeling Gear', 'Al Fresco Dining'],
        gallery: [
            { img: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80', title: 'Garden Path', sub: 'Outdoor' },
            { img: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80', title: 'Cove View', sub: 'Ocean' },
            { img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80', title: 'Snorkel Spot', sub: 'Activity' },
            { img: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80', title: 'Family Room', sub: 'Interior' },
            { img: 'https://images.unsplash.com/photo-1515362778563-6a8d0e44bc0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80', title: 'Sunset Deck', sub: 'Relax' },
            { img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80', title: 'Local Chef', sub: 'Dining' }
        ]
    },
    'savanna-oasis': {
        name: 'Nyumba Malaika - Savanna Oasis',
        location: 'Tsavo, Kenya',
        price: '420',
        rating: '4.9',
        host: 'Mwanaidi',
        description: 'A luxury lodge-style villa located right at the edge of the savanna. Watch elephants from your private veranda while sipping local tea.',
        mainImage: 'images/Villa-card-4.jpg',
        images: ['https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80'],
        amenities: ['Savanna Deck', 'Guided Nature Walks', 'Bush Breakfast'],
        gallery: [
            { img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=1168&q=80', title: 'Wild Views', sub: 'Nature' }
        ]
    },
    'indigo-bay': {
        name: 'Nyumba Malaika - Indigo Bay',
        location: 'Watamu, Kenya',
        price: '480',
        rating: '4.8',
        host: 'Rashid',
        description: 'Azure waters meet white sands. This villa is a kite-surfer paradise with its own equipment storage and private instructor access.',
        mainImage: 'images/Villa-card-5.jpg',
        images: ['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1173&q=80'],
        amenities: ['Kite Surf Gear', 'Beach Volleyball', 'Oceanfront Bar'],
        gallery: [
            { img: 'https://images.unsplash.com/photo-1506929197327-fb89b38d6138?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80', title: 'Azure Waters', sub: 'Beach' }
        ]
    },
    'royal-palms': {
        name: 'Nyumba Malaika - Royal Palms',
        location: 'Kilifi, Kenya',
        price: '600',
        rating: '5.0',
        host: 'Eman',
        description: 'The pinnacle of coastal royalty. Extensive gardens, a championship-size tennis court, and a private dock for your boat adventures.',
        mainImage: 'images/Villa-card-6.jpg',
        images: ['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80'],
        amenities: ['Tennis Court', 'Private Jetty', 'Wine Cellar'],
        gallery: [
            { img: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80', title: 'Lush Gardens', sub: 'Outdoor' }
        ]
    }
};

const safariData = {
    'tsavo-red': {
        name: 'The Red Earth Safari',
        location: 'Tsavo East National Park',
        price: '800',
        duration: '3 Days',
        description: 'Home to the "Red Elephants", this package includes guided 4x4 tours and luxury bush meals. Experience the raw beauty of Kenyas largest park.',
        mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRuOgHWJStH-vBL47Cwcml9kPhLUAKj_A9TMgdktpb_Djqj6xOQwJNcvAIaeAQkpWxolcGreV68UNV4IeWbQqM4g_pEem17q1ovariE5MNQZH28If-ZWwfphufFpkQmCN2D-toY5CrpT-crHsDDtSm9VvDD1_b8OYj8bQl_fo3ZD2Vo2URNyCs85KKhtCx_47G45k8y7NOJqpRN_vG7vXUDy2SvzrzWule2bA-GLY5P9ZfBahnLIfxM4KBnte8xHeERX46ldWakoQR',
        timeline: [
            { day: '01', title: 'The Red Welcome', desc: 'Arrival at the park gate and mid-morning game drive to catch the elephants at the watering holes.' },
            { day: '02', title: 'Aruba Dam Discovery', desc: 'Full day exploring the Galana river and the impressive Aruba Dam wildlife concentration.' },
            { day: '03', title: 'Bush Farewell', desc: 'Sunrise breakfast in the wild and a slow exit drive through the park.' }
        ],
        gallery: [
            { img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=1168&q=80', title: 'The Red Herd', sub: 'Wildlife' },
            { img: 'https://images.unsplash.com/photo-1523805081446-ed9a7bb8fd91?ixlib=rb-4.0.3&auto=format&fit=crop&w=1171&q=80', title: 'Savanna Life', sub: 'Nature' }
        ]
    },
    'serengeti-migration': {
        name: 'Serengeti Migration',
        location: 'Tanzania Expedition',
        price: '1,200',
        duration: '5 Days',
        description: 'A 5-day journey through the heart of the Serengeti during the great wildebeest migration. Witness one of natures greatest spectacles.',
        mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuHeMcmgSE9JbXEFWxj5FVxOdsbQcgKH8JADnspxYJZq41ixQWDQNZFGuj72DVPZsRGbXyVkM0uDd3Qp6Qt84N_yjhmhwets-Y1Rhl3Fu2cd-yWYDFR5dAMTEICxKPDystnvmQkDUQ93fBTaxJsvsyLarmp-RUmNZNYZdMf8ioC5PGWBB30xcSzi8jM3IIlFnXwGjZZ-mrH3BXOjJTzyGAx0YLMZM89GdVAVme4WcBKdu9-O6vRcrTHnj5rP1UWhYqe_G3WOk-KqYgE',
        timeline: [
            { day: '01', title: 'Arrival in Arusha', desc: 'Meeting your guide and briefing for the expedition ahead.' },
            { day: '02', title: 'Into the Serengeti', desc: 'Deep drive into the central plains for initial sightings.' },
            { day: '03-04', title: 'The River Crossing', desc: 'Chasing the herds at the Mara river for the legendary crossings.' },
            { day: '05', title: 'Final Game Drive', desc: 'Morning drive before heading back to Arusha.' }
        ],
        gallery: [
            { img: 'https://images.unsplash.com/photo-1547471080-7cc2032e6576?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80', title: 'Endless Plains', sub: 'Landscape' }
        ]
    },
    'amboseli-shadows': {
        name: 'Kilimanjaro Shadows',
        location: 'Amboseli National Park',
        price: '950',
        duration: '4 Days',
        description: 'Elephant encounters under the stunning backdrop of Mt. Kilimanjaro. The best photography safari in Kenya.',
        mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKu1OaknehArEC1zF8vJbUeqGsz1cIAUfvJdZb4JlFPh1z7RuFcKAySMHqioNSnsrzKC_Up_Lj5SKLht6JLWfUoAxPMGKEDIYdC28rF9xQRvpU4QWNL6auBp1XV5w4zGrkI6XR_MEyCXz0TOvGgZBqFGFKdRuP3UbRVh90HUq_Dr4X6hGLGpoS-FqrLHHrwPlZ4Z1Xi7PSi9SCfu2Em30zM2hF6BIMVfsthyZGr07_vo5GI9IMI6RMJytzq_yYQTR5uWOS3S4atBST',
        timeline: [
            { day: '01', title: 'Mountain Peak', desc: 'Arrival with views of the mountain and afternoon drive.' },
            { day: '02', title: 'Elephant Kingdom', desc: 'Spending the day with the marsh elephants.' },
            { day: '03', title: 'Observation Hill', desc: 'Sunset views over the entire park ecosystem.' },
            { day: '04', title: 'Departure', desc: 'Final shots of the mountain before transit.' }
        ],
        gallery: []
    },
    'mara-echo': {
        name: 'Maasai Mara Echo',
        location: 'Maasai Mara',
        price: '1,500',
        duration: '6 Days',
        description: 'Premium big five tracking and cultural visits to traditional Maasai villages. The ultimate Kenyan safari.',
        mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuHeMcmgSE9JbXEFWxj5FVxOdsbQcgKH8JADnspxYJZq41ixQWDQNZFGuj72DVPZsRGbXyVkM0uDd3Qp6Qt84N_yjhmhwets-Y1Rhl3Fu2cd-yWYDFR5dAMTEICxKPDystnvmQkDUQ93fBTaxJsvsyLarmp-RUmNZNYZdMf8ioC5PGWBB30xcSzi8jM3IIlFnXwGjZZ-mrH3BXOjJTzyGAx0YLMZM89GdVAVme4WcBKdu9-O6vRcrTHnj5rP1UWhYqe_G3WOk-KqYgE',
        timeline: [
            { day: '01', title: 'Mara Entry', desc: 'Welcome drive in the most wildlife-dense area of Kenya.' }
        ],
        gallery: []
    }
};
