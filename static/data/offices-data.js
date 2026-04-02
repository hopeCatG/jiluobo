// 办公室数据
const officesData = [
    {
        id: 222,
        city: 'Livorno',
        country: 'IT',
        continent: 'EU',
        name: 'U. Del Corona & Scardigli S.r.l',
        phone: '+39 0586 27333',
        phoneHref: 'tel:+39058627333',
        address: 'Scali D\'Azeglio 32<br>57123 Livorno',
        image: 'static/images/dcs-sede-livorno-1.jpg',
        slug: 'livorno',
        layout: 'simple'
    },
    {
        id: 272,
        city: 'Genova',
        country: 'IT',
        continent: 'EU',
        name: 'U. Del Corona & Scardigli S.r.l',
        phone: '+39 010 6591128',
        phoneHref: 'tel:+39 010 6591128',
        address: 'Piazzale Dei Traghetti Iqbal Masih, 25<br>16126 Genoa',
        image: 'static/images/dcs_sede-genova.jpg',
        slug: 'genova',
        layout: 'simple'
    },
    {
        id: 280,
        city: 'Verona',
        country: 'IT',
        continent: 'EU',
        name: 'U. Del Corona & Scardigli S.r.l',
        phone: '+393513002246',
        phoneHref: 'tel:+393513002246',
        address: 'Via Pila 31, 37010 Affi provincia di Verona, Italia<br>Verona',
        image: 'static/images/dcs_sede-lodz.jpg',
        slug: 'verona',
        layout: 'simple'
    },
    {
        id: 223,
        city: 'Milano',
        country: 'IT',
        continent: 'EU',
        name: 'U. Del Corona & Scardigli S.r.l',
        phone: '+39 02 70200904',
        phoneHref: 'tel:+390270200904',
        address: 'Via Cassanese, 224<br>20054 Segrate (MI)',
        image: 'static/images/dcs-sede-milano-2.jpg',
        slug: 'milano',
        layout: 'simple'
    },
    {
        id: 224,
        city: 'Prato',
        country: 'IT',
        continent: 'EU',
        name: 'U. Del Corona & Scardigli S.r.l',
        phone: '+39 0574 919911',
        phoneHref: 'tel:+390574919911',
        address: 'Via di Gonfienti, 5c<br>59100 Prato',
        image: 'static/images/dcs-sede-prato-3.jpg',
        slug: 'prato',
        layout: 'simple'
    },
    {
        id: 225,
        city: 'Sassuolo',
        country: 'IT',
        continent: 'EU',
        name: 'U. Del Corona & Scardigli S.r.l',
        phone: '+39 0536 991111',
        phoneHref: 'tel:+390536991111',
        address: 'Via della Repubblica, 12<br>41049 Sassuolo (MO)',
        image: 'static/images/dcs-sede-sassuolo-4.jpg',
        slug: 'sassuolo',
        layout: 'simple'
    },
    {
        id: 256,
        city: 'Chennai',
        country: 'IN',
        continent: 'AS',
        name: 'Del Corona & Scardigli India PVT. LTD.',
        phone: '+91 44 45561822',
        phoneHref: 'tel:+914445561822',
        address: 'Krishnasamy Street, 600061, Pazhavanthangal, Chennai, Chennai, Tamil Nadu, India',
        image: 'static/images/dcs-sede-chennai-35.jpg',
        slug: 'chennai',
        layout: 'card'
    },
    {
        id: 257,
        city: 'Mundra',
        country: 'IN',
        continent: 'AS',
        name: 'Del Corona & Scardigli India PVT. LTD.',
        phone: '+91 7600804260',
        phoneHref: 'tel:+917600804260',
        address: '34C5+4C8, Vidyanagar, Ward 7<br>Gandhidham, Gujarat 370201',
        image: 'static/images/dcs-sede-mundra-36.jpg',
        slug: 'mundra',
        layout: 'card'
    },
    {
        id: 258,
        city: 'Bangalore',
        country: 'IN',
        continent: 'AS',
        name: 'Del Corona & Scardigli India PVT. LTD.',
        phone: '+91 7259000534',
        phoneHref: 'tel:=+917259000534',
        address: '2398, 14th Cross, 13th Main, E-Block<br>Sahakara Nagar, Bangalore – 560092',
        image: 'static/images/dcs-sede-bangalore-37.jpg',
        slug: 'bangalore',
        layout: 'card'
    },
    {
        id: 259,
        city: 'New Delhi',
        country: 'IN',
        continent: 'AS',
        name: 'Del Corona & Scardigli India PVT. LTD.',
        phone: '+91 11 41001822',
        phoneHref: 'tel:+911141001822',
        address: 'District Centre, Janakpuri<br>New Delhi - 110058',
        image: 'static/images/dcs-sede-newdelhi-38.jpg',
        slug: 'new-delhi',
        layout: 'card'
    },
    {
        id: 265,
        city: 'Sydney',
        country: 'AU',
        continent: 'OC',
        name: 'Del Corona & Scardigli Australia Pty Ltd',
        phone: '+61 3 8609 4003',
        phoneHref: 'tel:+61386094003',
        address: '152 Bunnerong Road<br>Eastgardens 2036',
        image: 'static/images/dcs-sede-sydney-44.jpg',
        slug: 'sydney',
        layout: 'card'
    },
    {
        id: 266,
        city: 'Melbourne',
        country: 'AU',
        continent: 'OC',
        name: 'Del Corona & Scardigli Australia Pty Ltd',
        phone: '+61 3 8609 4000',
        phoneHref: 'tel:+61386094000',
        address: '37 Keilor Park Drive<br>Keilor Park, VIC 3042',
        image: 'static/images/dcs-sede-melbourne-45.jpg',
        slug: 'melbourne',
        layout: 'card'
    },
    {
        id: 34921,
        city: 'Brisbane',
        country: 'AU',
        continent: 'OC',
        name: 'Del Corona & Scardigli Australia Pty Ltd',
        phone: '',
        phoneHref: '',
        address: '28 Ferry Road, West End Queensland 4101, Australia',
        image: 'static/images/screenshot-2025-03-18-084957.png',
        slug: 'del-corona-scardigli-australia-pty-ltd',
        layout: 'card'
    }
];

// 大陆数据
const continentsData = [
    {
        code: 'EU',
        name: '欧洲',
        countries: [
            { code: 'IT', name: '意大利', offices: 14 },
            { code: 'PL', name: '波兰', offices: 1 },
            { code: 'RU', name: '俄罗斯', offices: 1 },
            { code: 'SI', name: '斯洛伐克', offices: 1 },
            { code: 'ES', name: '西班牙', offices: 6 },
            { code: 'GB', name: '英国', offices: 1 }
        ]
    },
    {
        code: 'NA',
        name: '北美洲',
        countries: [
            { code: 'CA', name: '加拿大', offices: 2 },
            { code: 'MX', name: '墨西哥', offices: 6 },
            { code: 'US', name: '美国', offices: 11 }
        ]
    },
    {
        code: 'SA',
        name: '南美洲',
        countries: [
            { code: 'BR', name: '巴西', offices: 6 },
            { code: 'CL', name: '沙利', offices: 1 }
        ]
    },
    {
        code: 'AS',
        name: '亚洲',
        countries: [
            { code: 'CN', name: '中国', offices: 5 },
            { code: 'IN', name: '印度', offices: 4 },
            { code: 'KR', name: '韩国', offices: 1 }
        ]
    },
    {
        code: 'OC',
        name: '大洋洲',
        countries: [
            { code: 'AU', name: '澳大利亚', offices: 3 }
        ]
    }
];
