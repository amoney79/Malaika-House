const villaData = {
    'azure-palm': {
        name: 'The Azure Palm',
        location: 'Watamu, Kenya',
        price: '450',
        description: 'A serene coastal escape in Watamu, featuring breathtaking views of the Indian Ocean and Swahili-inspired architecture.',
        host: 'Amina',
        mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKJznv90rOkRq2tXBx9V2_fTAs6MIOAMCf1v7xZy2CMvooqGgON2gXOYcDI4A7qsUSZp21kAVM9IKsLU5yCvOZnNuXHxHDfxolWKNw-AR8J3qIh1uuUYFxoILr5q4lAdM1sRgJiVXKRGhJLc5cfEz8bsohVbJ2A9rYNCJYqEFLSfdpGAorxBqtV3p_ZePpgJBfTYcy5neDorq2kqVy3wz8J3HpkQDEK08i7ELWjb7Ff2TXBQa2Lr36Nij4J3HVCgRuQcVdUfV_9QBb',
        images: [
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDh0CK6YbQcoeJN3is1PzuRdgZqpAdYZDL7-rz-kPpDeCW71I8LPK7NsGCWq-3xwn7juQ2zQAL9KBDsxXvH3M2fJO3A247CNte4ZhvnKPtnQmY9qWiesNTRKC_VP8pJOGqiO9yX8hXLA8jOXIwB4fBmlJlII3cPWNiZRD7sFG_ONx514_OvRxIBdGAzhqvSVQqg-hXkiUCpBoygPmoX8XoVV0LH2kN221u4P5VJdjlMFMIUpomr82T5l79OQEnD6kH-9dg8tvt1gcUz',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuClkfqJftTHF22Z2QUHlRqIwV81xtL5x0aNEuoskwBkDb5A4vVg7EPOaoTa4HKVd0KmabRnkvTwP-vONnSO5SBrk5XsaeDRFIGnGm2py1kHEL6kYcca__YM0WVJb0R7bebWZ3Zj2h8SUM1vSAX64er6nG6-_B68vLtN6f0VZ3lux_Tnh3KnIdExTRCRfRtrw8i2AJWkYoOoQVRBF8Bws8xqW8QGXviAjN-Dzo89cKI5OvkYzbrczEFqB5ZMfpWLlZiOQHpj7cVTfCpn',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuAoesWLQ0C9nSvNolj3w1_oaZASkUH7dWc2WB1JAnD95tOcwoTgGuN8FAAWbCmaHfojvAziAXcAYh13wiJ38RLNPI1NQtkdnKbkZsbWSCtJ2C4rf8-VDABj3JA1Uk_1YECkn8nFW05L6uoLoc0sHDetXhfZmXRToPEXlpwgij8JTC290P62r2Iyj9SWhq0STu20hWwexPIGV-3CFafPpjxyYUPA4-pdjORPP4C9VH478FyqvICzyvGLRCPY_i-ezmL85bHbLIc1v2Cv'
        ],
        amenities: ['Oceanfront Pool', 'Private Beach Access', 'Personal Chef', 'High-Speed Wi-Fi'],
        gallery: [
            { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKJznv90rOkRq2tXBx9V2_fTAs6MIOAMCf1v7xZy2CMvooqGgON2gXOYcDI4A7qsUSZp21kAVM9IKsLU5yCvOZnNuXHxHDfxolWKNw-AR8J3qIh1uuUYFxoILr5q4lAdM1sRgJiVXKRGhJLc5cfEz8bsohVbJ2A9rYNCJYqEFLSfdpGAorxBqtV3p_ZePpgJBfTYcy5neDorq2kqVy3wz8J3HpkQDEK08i7ELWjb7Ff2TXBQa2Lr36Nij4J3HVCgRuQcVdUfV_9QBb', title: 'Ocean View', sub: 'Infinite Horizon' },
            { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDh0CK6YbQcoeJN3is1PzuRdgZqpAdYZDL7-rz-kPpDeCW71I8LPK7NsGCWq-3xwn7juQ2zQAL9KBDsxXvH3M2fJO3A247CNte4ZhvnKPtnQmY9qWiesNTRKC_VP8pJOGqiO9yX8hXLA8jOXIwB4fBmlJlII3cPWNiZRD7sFG_ONx514_OvRxIBdGAzhqvSVQqg-hXkiUCpBoygPmoX8XoVV0LH2kN221u4P5VJdjlMFMIUpomr82T5l79OQEnD6kH-9dg8tvt1gcUz', title: 'Lounge Area', sub: 'Coastal Living' },
            { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClkfqJftTHF22Z2QUHlRqIwV81xtL5x0aNEuoskwBkDb5A4vVg7EPOaoTa4HKVd0KmabRnkvTwP-vONnSO5SBrk5XsaeDRFIGnGm2py1kHEL6kYcca__YM0WVJb0R7bebWZ3Zj2h8SUM1vSAX64er6nG6-_B68vLtN6f0VZ3lux_Tnh3KnIdExTRCRfRtrw8i2AJWkYoOoQVRBF8Bws8xqW8QGXviAjN-Dzo89cKI5OvkYzbrczEFqB5ZMfpWLlZiOQHpj7cVTfCpn', title: 'Swahili Arch', sub: 'Culture Detail' }
        ]
    },
    'glass-house': {
        name: 'The Glass House',
        location: 'Diani, Kenya',
        price: '550',
        description: 'A modern architectural marvel featuring floor-to-ceiling glass walls with panoramic ocean views and ultra-minimalist interiors.',
        host: 'Sarah',
        mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFZSgPT9FhuaNc84zlCdpvwjdewCIMWl_OgRfVJRHwWx6Uz_KZFBNt6dpiA4Ts9catnHWmyID4oxdzbBT5s_KFX1DXG5KGHtIz99uO-GvBrV7rF7afIQpFjzGwNjytHg-PQ0TqkPj3hMo_ANW9E2DHs0WNqGLuqEAyM9wU7Xy2Ey5S_JVIGIE6SyPXr1_SgH2l13_7oJIwBLSUQhIxQy9TmzPlDNL9Zl1agIyaXP3GOuCi3rslzshwh-vygl3SuQbYIotmZDUcrFdG',
        images: [
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDh0CK6YbQcoeJN3is1PzuRdgZqpAdYZDL7-rz-kPpDeCW71I8LPK7NsGCWq-3xwn7juQ2zQAL9KBDsxXvH3M2fJO3A247CNte4ZhvnKPtnQmY9qWiesNTRKC_VP8pJOGqiO9yX8hXLA8jOXIwB4fBmlJlII3cPWNiZRD7sFG_ONx514_OvRxIBdGAzhqvSVQqg-hXkiUCpBoygPmoX8XoVV0LH2kN221u4P5VJdjlMFMIUpomr82T5l79OQEnD6kH-9dg8tvt1gcUz'
        ],
        amenities: ['360° Glass Walls', 'Smart Automation', 'Rooftop Lounge', 'Infinity Edge Pool'],
        gallery: [
            { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFZSgPT9FhuaNc84zlCdpvwjdewCIMWl_OgRfVJRHwWx6Uz_KZFBNt6dpiA4Ts9catnHWmyID4oxdzbBT5s_KFX1DXG5KGHtIz99uO-GvBrV7rF7afIQpFjzGwNjytHg-PQ0TqkPj3hMo_ANW9E2DHs0WNqGLuqEAyM9wU7Xy2Ey5S_JVIGIE6SyPXr1_SgH2l13_7oJIwBLSUQhIxQy9TmzPlDNL9Zl1agIyaXP3GOuCi3rslzshwh-vygl3SuQbYIotmZDUcrFdG', title: 'Transparency', sub: 'Modern Design' },
            { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfYf3Rdg4Kz2bg7cOpMcHJf0MqYOYD95hca_JBiHmbFblEhPjcX6-jscdcOTNlJRFZ5ltpyxIggsprB1a0lW20ynwYUimF20_QdZX7lEIrDsfrUVdgk-9vDSTwmoL_SQhUL7SfePaHvA3pOrRjBdM_y-MgBg71zOEeUx29NC-h3AEdC4R5XlzYuyQMgOKm0L1Yhialu6vE26vhN4euhyMxSKxniULcBCFxiu1uB2rtFydnRtyCngC19J3oP-IgyCmQt-ZLQ9yqNZ1y', title: 'Diani Skyline', sub: 'Sunset Horizon' }
        ]
    },
    'coral-cove': {
        name: 'Coral Cove',
        location: 'Malindi, Kenya',
        price: '380',
        description: 'A peaceful retreat nestled among ancient coral cliffs with private beach access and lush tropical gardens.',
        host: 'David',
        mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9O9WlFIZHAYhWbaEtDoJfldMt6PtvfaFaiASBt407-CEy4reMgfo-d8KgH9u58FK5DmyxUiP4pJ8FsJ9FiSRbHpPoEqT59mnL9XvEZv3qfVbFVTz1vG7I7C1GDEXC90ORCdTzB2_uy8Mcd14LU6sxNV6X0zAvNKPgrRHhTzV5jXDWQHLbyaMnmrqeIUTfH8aOYJSDC9UG25zyaPEWU5Js1RQWu6p_WHj5Uz_VBZM1qAk3DIYl1cLalhJf18Vc7UBLGO823YqQf-lS',
        images: [
            'https://lh3.googleusercontent.com/aida-public/AB6AXuAoesWLQ0C9nSvNolj3w1_oaZASkUH7dWc2WB1JAnD95tOcwoTgGuN8FAAWbCmaHfojvAziAXcAYh13wiJ38RLNPI1NQtkdnKbkZsbWSCtJ2C4rf8-VDABj3JA1Uk_1YECkn8nFW05L6uoLoc0sHDetXhfZmXRToPEXlpwgij8JTC290P62r2Iyj9SWhq0STu20hWwexPIGV-3CFafPpjxyYUPA4-pdjORPP4C9VH478FyqvICzyvGLRCPY_i-ezmL85bHbLIc1v2Cv'
        ],
        amenities: ['Coral Garden', 'Natural Stone Tubs', 'Private Jetty', 'Snorkeling Gear'],
        gallery: [
            { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9O9WlFIZHAYhWbaEtDoJfldMt6PtvfaFaiASBt407-CEy4reMgfo-d8KgH9u58FK5DmyxUiP4pJ8FsJ9FiSRbHpPoEqT59mnL9XvEZv3qfVbFVTz1vG7I7C1GDEXC90ORCdTzB2_uy8Mcd14LU6sxNV6X0zAvNKPgrRHhTzV5jXDWQHLbyaMnmrqeIUTfH8aOYJSDC9UG25zyaPEWU5Js1RQWu6p_WHj5Uz_VBZM1qAk3DIYl1cLalhJf18Vc7UBLGO823YqQf-lS', title: 'Cliffside', sub: 'Natural Beauty' }
        ]
    },
    'savanna-oasis': {
        name: 'Savanna Oasis',
        location: 'Voi, Kenya',
        price: '420',
        description: 'A luxurious lodge situated on the edge of Tsavo East, offering front-row seats to the majestic wildlife and African plains.',
        host: 'Suleiman',
        mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAoesWLQ0C9nSvNolj3w1_oaZASkUH7dWc2WB1JAnD95tOcwoTgGuN8FAAWbCmaHfojvAziAXcAYh13wiJ38RLNPI1NQtkdnKbkZsbWSCtJ2C4rf8-VDABj3JA1Uk_1YECkn8nFW05L6uoLoc0sHDetXhfZmXRToPEXlpwgij8JTC290P62r2Iyj9SWhq0STu20hWwexPIGV-3CFafPpjxyYUPA4-pdjORPP4C9VH478FyqvICzyvGLRCPY_i-ezmL85bHbLIc1v2Cv',
        images: [
            'https://lh3.googleusercontent.com/aida-public/AB6AXuBRuOgHWJStH-vBL47Cwcml9kPhLUAKj_A9TMgdktpb_Djqj6xOQwJNcvAIaeAQkpWxolcGreV68UNV4IeWbQqM4g_pEem17q1ovariE5MNQZH28If-ZWwfphufFpkQmCN2D-toY5CrpT-crHsDDtSm9VvDD1_b8OYj8bQl_fo3ZD2Vo2URNyCs85KKhtCx_47G45k8y7NOJqpRN_vG7vXUDy2SvzrzWule2bA-GLY5P9ZfBahnLIfxM4KBnte8xHeERX46ldWakoQR'
        ],
        amenities: ['Waterhole View', 'Guided Safari Safaris', 'Luxury Bush Dining', 'Star-Gazing Deck'],
        gallery: [
            { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAoesWLQ0C9nSvNolj3w1_oaZASkUH7dWc2WB1JAnD95tOcwoTgGuN8FAAWbCmaHfojvAziAXcAYh13wiJ38RLNPI1NQtkdnKbkZsbWSCtJ2C4rf8-VDABj3JA1Uk_1YECkn8nFW05L6uoLoc0sHDetXhfZmXRToPEXlpwgij8JTC290P62r2Iyj9SWhq0STu20hWwexPIGV-3CFafPpjxyYUPA4-pdjORPP4C9VH478FyqvICzyvGLRCPY_i-ezmL85bHbLIc1v2Cv', title: 'Savanna plains', sub: 'Wild Life' }
        ]
    },
    'indigo-bay': {
        name: 'Indigo Bay',
        location: 'Kilifi, Kenya',
        price: '480',
        description: 'A contemporary villa overlooking the turquoise waters of Kilifi Creek, perfect for water sports enthusiasts and relaxation seekers alike.',
        host: 'Fatuma',
        mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKJznv90rOkRq2tXBx9V2_fTAs6MIOAMCf1v7xZy2CMvooqGgON2gXOYcDI4A7qsUSZp21kAVM9IKsLU5yCvOZnNuXHxHDfxolWKNw-AR8J3qIh1uuUYFxoILr5q4lAdM1sRgJiVXKRGhJLc5cfEz8bsohVbJ2A9rYNCJYqEFLSfdpGAorxBqtV3p_ZePpgJBfTYcy5neDorq2kqVy3wz8J3HpkQDEK08i7ELWjb7Ff2TXBQa2Lr36Nij4J3HVCgRuQcVdUfV_9QBb',
        images: [
            'https://lh3.googleusercontent.com/aida-public/AB6AXuClkfqJftTHF22Z2QUHlRqIwV81xtL5x0aNEuoskwBkDb5A4vVg7EPOaoTa4HKVd0KmabRnkvTwP-vONnSO5SBrk5XsaeDRFIGnGm2py1kHEL6kYcca__YM0WVJb0R7bebWZ3Zj2h8SUM1vSAX64er6nG6-_B68vLtN6f0VZ3lux_Tnh3KnIdExTRCRfRtrw8i2AJWkYoOoQVRBF8Bws8xqW8QGXviAjN-Dzo89cKI5OvkYzbrczEFqB5ZMfpWLlZiOQHpj7cVTfCpn'
        ],
        amenities: ['Private Pier', 'Infinity Creek Pool', 'Water Sports Equipment', 'Seafood Terrace'],
        gallery: [
            { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKJznv90rOkRq2tXBx9V2_fTAs6MIOAMCf1v7xZy2CMvooqGgON2gXOYcDI4A7qsUSZp21kAVM9IKsLU5yCvOZnNuXHxHDfxolWKNw-AR8J3qIh1uuUYFxoILr5q4lAdM1sRgJiVXKRGhJLc5cfEz8bsohVbJ2A9rYNCJYqEFLSfdpGAorxBqtV3p_ZePpgJBfTYcy5neDorq2kqVy3wz8J3HpkQDEK08i7ELWjb7Ff2TXBQa2Lr36Nij4J3HVCgRuQcVdUfV_9QBb', title: 'The Bay', sub: 'Calm Waters' }
        ]
    },
    'royal-palms': {
        name: 'The Royal Palms',
        location: 'Watamu, Kenya',
        price: '600',
        description: 'Elite luxury meets coastal charm. The Royal Palms offers the most exclusive experience in Watamu with sprawling estates and unmatched privacy.',
        host: 'Amina',
        mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFZSgPT9FhuaNc84zlCdpvwjdewCIMWl_OgRfVJRHwWx6Uz_KZFBNt6dpiA4Ts9catnHWmyID4oxdzbBT5s_KFX1DXG5KGHtIz99uO-GvBrV7rF7afIQpFjzGwNjytHg-PQ0TqkPj3hMo_ANW9E2DHs0WNqGLuqEAyM9wU7Xy2Ey5S_JVIGIE6SyPXr1_SgH2l13_7oJIwBLSUQhIxQy9TmzPlDNL9Zl1agIyaXP3GOuCi3rslzshwh-vygl3SuQbYIotmZDUcrFdG',
        images: [
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDh0CK6YbQcoeJN3is1PzuRdgZqpAdYZDL7-rz-kPpDeCW71I8LPK7NsGCWq-3xwn7juQ2zQAL9KBDsxXvH3M2fJO3A247CNte4ZhvnKPtnQmY9qWiesNTRKC_VP8pJOGqiO9yX8hXLA8jOXIwB4fBmlJlII3cPWNiZRD7sFG_ONx514_OvRxIBdGAzhqvSVQqg-hXkiUCpBoygPmoX8XoVV0LH2kN221u4P5VJdjlMFMIUpomr82T5l79OQEnD6kH-9dg8tvt1gcUz'
        ],
        amenities: ['Sprawling Gardens', 'Private Butler', 'Olympic-Sized Pool', 'Helipad Access'],
        gallery: [
            { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFZSgPT9FhuaNc84zlCdpvwjdewCIMWl_OgRfVJRHwWx6Uz_KZFBNt6dpiA4Ts9catnHWmyID4oxdzbBT5s_KFX1DXG5KGHtIz99uO-GvBrV7rF7afIQpFjzGwNjytHg-PQ0TqkPj3hMo_ANW9E2DHs0WNqGLuqEAyM9wU7Xy2Ey5S_JVIGIE6SyPXr1_SgH2l13_7oJIwBLSUQhIxQy9TmzPlDNL9Zl1agIyaXP3GOuCi3rslzshwh-vygl3SuQbYIotmZDUcrFdG', title: 'The Estate', sub: 'Majestic Living' }
        ]
    },
    'sunset-villa': {
        name: 'Sunset Beach Villa',
        location: 'Palm Coast, Kenya',
        price: '450',
        description: 'Experience luxury steps away from the ocean. This villa features a private pool, direct beach access, and is located just minutes from the famous Tsavo East National Park safari gate.',
        host: 'Amina',
        mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9O9WlFIZHAYhWbaEtDoJfldMt6PtvfaFaiASBt407-CEy4reMgfo-d8KgH9u58FK5DmyxUiP4pJ8FsJ9FiSRbHpPoEqT59mnL9XvEZv3qfVbFVTz1vG7I7C1GDEXC90ORCdTzB2_uy8Mcd14LU6sxNV6X0zAvNKPgrRHhTzV5jXDWQHLbyaMnmrqeIUTfH8aOYJSDC9UG25zyaPEWU5Js1RQWu6p_WHj5Uz_VBZM1qAk3DIYl1cLalhJf18Vc7UBLGO823YqQf-lS',
        images: [
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDh0CK6YbQcoeJN3is1PzuRdgZqpAdYZDL7-rz-kPpDeCW71I8LPK7NsGCWq-3xwn7juQ2zQAL9KBDsxXvH3M2fJO3A247CNte4ZhvnKPtnQmY9qWiesNTRKC_VP8pJOGqiO9yX8hXLA8jOXIwB4fBmlJlII3cPWNiZRD7sFG_ONx514_OvRxIBdGAzhqvSVQqg-hXkiUCpBoygPmoX8XoVV0LH2kN221u4P5VJdjlMFMIUpomr82T5l79OQEnD6kH-9dg8tvt1gcUz',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuClkfqJftTHF22Z2QUHlRqIwV81xtL5x0aNEuoskwBkDb5A4vVg7EPOaoTa4HKVd0KmabRnkvTwP-vONnSO5SBrk5XsaeDRFIGnGm2py1kHEL6kYcca__YM0WVJb0R7bebWZ3Zj2h8SUM1vSAX64er6nG6-_B68vLtN6f0VZ3lux_Tnh3KnIdExTRCRfRtrw8i2AJWkYoOoQVRBF8Bws8xqW8QGXviAjN-Dzo89cKI5OvkYzbrczEFqB5ZMfpWLlZiOQHpj7cVTfCpn',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuAoesWLQ0C9nSvNolj3w1_oaZASkUH7dWc2WB1JAnD95tOcwoTgGuN8FAAWbCmaHfojvAziAXcAYh13wiJ38RLNPI1NQtkdnKbkZsbWSCtJ2C4rf8-VDABj3JA1Uk_1YECkn8nFW05L6uoLoc0sHDetXhfZmXRToPEXlpwgij8JTC290P62r2Iyj9SWhq0STu20hWwexPIGV-3CFafPpjxyYUPA4-pdjORPP4C9VH478FyqvICzyvGLRCPY_i-ezmL85bHbLIc1v2Cv'
        ],
        amenities: ['Private Infinity Pool', 'Starlink Wifi', 'Private Chef', 'Beach Access'],
        gallery: [
            { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9O9WlFIZHAYhWbaEtDoJfldMt6PtvfaFaiASBt407-CEy4reMgfo-d8KgH9u58FK5DmyxUiP4pJ8FsJ9FiSRbHpPoEqT59mnL9XvEZv3qfVbFVTz1vG7I7C1GDEXC90ORCdTzB2_uy8Mcd14LU6sxNV6X0zAvNKPgrRHhTzV5jXDWQHLbyaMnmrqeIUTfH8aOYJSDC9UG25zyaPEWU5Js1RQWu6p_WHj5Uz_VBZM1qAk3DIYl1cLalhJf18Vc7UBLGO823YqQf-lS', title: 'Beachfront Bliss', sub: 'Included activity' },
            { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAoesWLQ0C9nSvNolj3w1_oaZASkUH7dWc2WB1JAnD95tOcwoTgGuN8FAAWbCmaHfojvAziAXcAYh13wiJ38RLNPI1NQtkdnKbkZsbWSCtJ2C4rf8-VDABj3JA1Uk_1YECkn8nFW05L6uoLoc0sHDetXhfZmXRToPEXlpwgij8JTC290P62r2Iyj9SWhq0STu20hWwexPIGV-3CFafPpjxyYUPA4-pdjORPP4C9VH478FyqvICzyvGLRCPY_i-ezmL85bHbLIc1v2Cv', title: 'Safari Connection', sub: 'Included access' },
            { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRuOgHWJStH-vBL47Cwcml9kPhLUAKj_A9TMgdktpb_Djqj6xOQwJNcvAIaeAQkpWxolcGreV68UNV4IeWbQqM4g_pEem17q1ovariE5MNQZH28If-ZWwfphufFpkQmCN2D-toY5CrpT-crHsDDtSm9VvDD1_b8OYj8bQl_fo3ZD2Vo2URNyCs85KKhtCx_47G45k8y7NOJqpRN_vG7vXUDy2SvzrzWule2bA-GLY5P9ZfBahnLIfxM4KBnte8xHeERX46ldWakoQR', title: 'Tsavo Gateway', sub: 'Nearby adventure' }
        ]
    }
};

const safariData = {
    'red-earth': {
        name: 'The Red Earth Safari',
        location: 'Tsavo East, Kenya',
        price: '1,200',
        description: 'Discover the famous red elephants of Tsavo and experience the ultimate wilderness adventure.',
        mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB89y_Cz3I1eJVDECig4qL7vneXCjc9QxijhSCGqr4nYkbCr49Mt2PLsaH7ukYXnAHYEvGa99MtN8YjZB6yeGyr0KSu0Pu2Uh3tFSj4lBjUDBIOWsEkWZyNBb1QJB2iScomRV-vXdyss8-BQVgvLUBAvBB-8_4L5sWY18fz4hRfyoK5XP3ME2KM2CjK402RdvE5dtsQO5abQfShHgMe9ooYj35V5DtlhjxFDKkImISVSIssyZblbwCM3yQ0NEqQo6qbcT3VjKxTsoT1',
        timeline: [
            { day: '01', title: 'Arrival & Tsavo Entry', desc: 'Transfer from the coast to Tsavo East.' },
            { day: '02', title: 'Big Five Tracking', desc: 'Full day of exploration.' },
            { day: '03', title: 'Sunrise Drive & Departure', desc: 'Final game drive at dawn.' }
        ],
        gallery: [
            { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB89y_Cz3I1eJVDECig4qL7vneXCjc9QxijhSCGqr4nYkbCr49Mt2PLsaH7ukYXnAHYEvGa99MtN8YjZB6yeGyr0KSu0Pu2Uh3tFSj4lBjUDBIOWsEkWZyNBb1QJB2iScomRV-vXdyss8-BQVgvLUBAvBB-8_4L5sWY18fz4hRfyoK5XP3ME2KM2CjK402RdvE5dtsQO5abQfShHgMe9ooYj35V5DtlhjxFDKkImISVSIssyZblbwCM3yQ0NEqQo6qbcT3VjKxTsoT1', title: 'Red Elephants', sub: 'Wild sightings' }
        ]
    },
    'great-migration': {
        name: 'Great Migration',
        location: 'Serengeti NP',
        price: '1,800',
        description: 'Witness the largest mass movement of land mammals on earth.',
        mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuHeMcmgSE9JbXEFWxj5FVxOdsbQcgKH8JADnspxYJZq41ixQWDQNZFGuj72DVPZsRGbXyVkM0uDd3Qp6Qt84N_yjhmhwets-Y1Rhl3Fu2cd-yWYDFR5dAMTEICxKPDystnvmQkDUQ93fBTaxJsvsyLarmp-RUmNZNYZdMf8ioC5PGWBB30xcSzi8jM3IIlFnXwGjZZ-mrH3BXOjJTzyGAx0YLMZM89GdVAVme4WcBKdu9-O6vRcrTHnj5rP1UWhYqe_G3WOk-KqYgE',
        timeline: [
            { day: '01', title: 'Fly-in Safari', desc: 'Arrival at Serengeti airstrip.' },
            { day: '02-04', title: 'Following the Herd', desc: 'Daily drives to witness crossing.' },
            { day: '05', title: 'Farewell Serengeti', desc: 'Morning drive and fly back.' }
        ],
        gallery: [
            { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuHeMcmgSE9JbXEFWxj5FVxOdsbQcgKH8JADnspxYJZq41ixQWDQNZFGuj72DVPZsRGbXyVkM0uDd3Qp6Qt84N_yjhmhwets-Y1Rhl3Fu2cd-yWYDFR5dAMTEICxKPDystnvmQkDUQ93fBTaxJsvsyLarmp-RUmNZNYZdMf8ioC5PGWBB30xcSzi8jM3IIlFnXwGjZZ-mrH3BXOjJTzyGAx0YLMZM89GdVAVme4WcBKdu9-O6vRcrTHnj5rP1UWhYqe_G3WOk-KqYgE', title: 'Mara River Crossing', sub: 'Dramatic Moment' }
        ]
    },
    'kilimanjaro-shadows': {
        name: 'Kilimanjaro Shadows',
        location: 'Amboseli NP',
        price: '950',
        description: 'Elephant encounters under Mt. Kilimanjaro.',
        mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKu1OaknehArEC1zF8vJbUeqGsz1cIAUfvJdZb4JlFPh1z7RuFcKAySMHqioNSnsrzKC_Up_Lj5SKLht6JLWfUoAxPMGKEDIYdC28rF9xQRvpU4QWNL6auBp1XV5w4zGrkI6XR_MEyCXz0TOvGgZBqFGFKdRuP3UbRVh90HUq_Dr4X6hGLGpoS-FqrLHHrwPlZ4Z1Xi7PSi9SCfu2Em30zM2hF6BIMVfsthyZGr07_vo5GI9IMI6RMJytzq_yYQTR5uWOS3S4atBST',
        timeline: [
            { day: '01', title: 'Mountain Views', desc: 'Check-in with clear views of the peak.' },
            { day: '02', title: 'Giant Tuskers', desc: 'Observing world-famous elephant herds.' }
        ]
    },
    'maasai-mara-echo': {
        name: 'Maasai Mara Echo',
        location: 'Maasai Mara',
        price: '1,500',
        description: 'Premium big five tracking and cultural visits.',
        mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuHeMcmgSE9JbXEFWxj5FVxOdsbQcgKH8JADnspxYJZq41ixQWDQNZFGuj72DVPZsRGbXyVkM0uDd3Qp6Qt84N_yjhmhwets-Y1Rhl3Fu2cd-yWYDFR5dAMTEICxKPDystnvmQkDUQ93fBTaxJsvsyLarmp-RUmNZNYZdMf8ioC5PGWBB30xcSzi8jM3IIlFnXwGjZZ-mrH3BXOjJTzyGAx0YLMZM89GdVAVme4WcBKdu9-O6vRcrTHnj5rP1UWhYqe_G3WOk-KqYgE',
        timeline: [
            { day: '01', title: 'Mara Entry', desc: 'Game drive to the camp.' },
            { day: '02-03', title: 'Endless Plains', desc: 'Extensive tracking of the Big Five.' }
        ]
    },
    'samburu-secrets': {
        name: 'Samburu Secrets',
        location: 'Samburu NR',
        price: '1,100',
        description: 'Rare wildlife encounters in Northern Kenya.',
        mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKu1OaknehArEC1zF8vJbUeqGsz1cIAUfvJdZb4JlFPh1z7RuFcKAySMHqioNSnsrzKC_Up_Lj5SKLht6JLWfUoAxPMGKEDIYdC28rF9xQRvpU4QWNL6auBp1XV5w4zGrkI6XR_MEyCXz0TOvGgZBqFGFKdRuP3UbRVh90HUq_Dr4X6hGLGpoS-FqrLHHrwPlZ4Z1Xi7PSi9SCfu2Em30zM2hF6BIMVfsthyZGr07_vo5GI9IMI6RMJytzq_yYQTR5uWOS3S4atBST',
        timeline: [
            { day: '01', title: 'Northern Frontier', desc: 'Journey to the arid north.' },
            { day: '02', title: 'Special Five', desc: 'Spotting the endemic species of Samburu.' }
        ]
    },
    'pink-lake-safari': {
        name: 'Pink Lake Safari',
        location: 'Lake Nakuru NP',
        price: '850',
        description: 'Flamingos and rhino sanctuary.',
        mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB89y_Cz3I1eJVDECig4qL7vneXCjc9QxijhSCGqr4nYkbCr49Mt2PLsaH7ukYXnAHYEvGa99MtN8YjZB6yeGyr0KSu0Pu2Uh3tFSj4lBjUDBIOWsEkWZyNBb1QJB2iScomRV-vXdyss8-BQVgvLUBAvBB-8_4L5sWY18fz4hRfyoK5XP3ME2KM2CjK402RdvE5dtsQO5abQfShHgMe9ooYj35V5DtlhjxFDKkImISVSIssyZblbwCM3yQ0NEqQo6qbcT3VjKxTsoT1',
        timeline: [
            { day: '01', title: 'Rift Valley Descent', desc: 'Scenic drive to Lake Nakuru.' },
            { day: '02', title: 'Lake Exploration', desc: 'Game drives around the lake shore.' }
        ]
    },
    'gorge-exploration': {
        name: 'Gorge Exploration',
        location: 'Hell\'s Gate NP',
        price: '600',
        description: 'Cycling and rock climbing.',
        mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuHeMcmgSE9JbXEFWxj5FVxOdsbQcgKH8JADnspxYJZq41ixQWDQNZFGuj72DVPZsRGbXyVkM0uDd3Qp6Qt84N_yjhmhwets-Y1Rhl3Fu2cd-yWYDFR5dAMTEICxKPDystnvmQkDUQ93fBTaxJsvsyLarmp-RUmNZNYZdMf8ioC5PGWBB30xcSzi8jM3IIlFnXwGjZZ-mrH3BXOjJTzyGAx0YLMZM89GdVAVme4WcBKdu9-O6vRcrTHnj5rP1UWhYqe_G3WOk-KqYgE',
        timeline: [
            { day: '01', title: 'Geothermal Valley', desc: 'Cycling through the gorge.' }
        ]
    },
    'born-free-safari': {
        name: 'Born Free Safari',
        location: 'Meru NP',
        price: '900',
        description: 'Follow the footsteps of George and Joy Adamson.',
        mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRuOgHWJStH-vBL47Cwcml9kPhLUAKj_A9TMgdktpb_Djqj6xOQwJNcvAIaeAQkpWxolcGreV68UNV4IeWbQqM4g_pEem17q1ovariE5MNQZH28If-ZWwfphufFpkQmCN2D-toY5CrpT-crHsDDtSm9VvDD1_b8OYj8bQl_fo3ZD2Vo2URNyCs85KKhtCx_47G45k8y7NOJqpRN_vG7vXUDy2SvzrzWule2bA-GLY5P9ZfBahnLIfxM4KBnte8xHeERX46ldWakoQR',
        timeline: [
            { day: '01', title: 'Wild Meru', desc: 'Check-in at the remote Elsa\'s Kopje.' },
            { day: '02', title: 'Tracking Lions', desc: 'Exploring the diverse habitats of Meru.' }
        ]
    },
    'heritage-tour': {
        name: 'Heritage Tour',
        location: 'Museums & Ruins',
        price: '150',
        description: 'Discover the Swahili history at Gede Ruins and Malindi Museum.',
        mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKu1OaknehArEC1zF8vJbUeqGsz1cIAUfvJdZb4JlFPh1z7RuFcKAySMHqioNSnsrzKC_Up_Lj5SKLht6JLWfUoAxPMGKEDIYdC28rF9xQRvpU4QWNL6auBp1XV5w4zGrkI6XR_MEyCXz0TOvGgZBqFGFKdRuP3UbRVh90HUq_Dr4X6hGLGpoS-FqrLHHrwPlZ4Z1Xi7PSi9SCfu2Em30zM2hF6BIMVfsthyZGr07_vo5GI9IMI6RMJytzq_yYQTR5uWOS3S4atBST',
        timeline: [
            { day: '01', title: 'Ancient Gede', desc: 'Guided walk through the 12th-century ruins.' },
            { day: '02', title: 'Malindi Museum', desc: 'Swahili artifacts and colonial history.' }
        ]
    }
};
