// 大洲数据
const continentsData = [
    {
        code: 'AS', name: '亚洲', countriesData: [
            { code: 'CN', name: '中国', nameEn: 'China', flag: 'cn.svg', offices: 1 },
            { code: 'IN', name: '印度', nameEn: 'India', flag: 'in.svg', offices: 1 },
            { code: 'KR', name: '韩国', nameEn: 'South Korea', flag: 'kr.svg', offices: 1 }
        ]
    },
    {
        code: 'EU', name: '欧洲', countriesData: [
            { code: 'IT', name: '意大利', nameEn: 'Italy', flag: 'it.svg', offices: 1 },
            { code: 'PL', name: '波兰', nameEn: 'Poland', flag: 'pl.svg', offices: 1 },
            { code: 'RU', name: '俄罗斯', nameEn: 'Russia', flag: 'ru.svg', offices: 1 },
            { code: 'SI', name: '斯洛文尼亚', nameEn: 'Slovenia', flag: 'si.svg', offices: 1 },
            { code: 'ES', name: '西班牙', nameEn: 'Spain', flag: 'es.svg', offices: 1 },
            { code: 'GB', name: '英国', nameEn: 'United Kingdom', flag: 'gb.svg', offices: 1 }
        ]
    },
    {
        code: 'NA', name: '北美洲', countriesData: [
            { code: 'CA', name: '加拿大', nameEn: 'Canada', flag: 'ca.svg', offices: 1 },
            { code: 'MX', name: '墨西哥', nameEn: 'Mexico', flag: 'mx.svg', offices: 1 },
            { code: 'US', name: '美国', nameEn: 'United States', flag: 'us.svg', offices: 1 }
        ]
    },
    {
        code: 'SA', name: '南美洲', countriesData: [
            { code: 'BR', name: '巴西', nameEn: 'Brazil', flag: 'br.svg', offices: 1 },
            { code: 'CL', name: '智利', nameEn: 'Chile', flag: 'cl.svg', offices: 1 }
        ]
    },

    {
        code: 'OC', name: '大洋洲', countriesData: [
            { code: 'AU', name: '澳大利亚', nameEn: 'Australia', flag: 'au.svg', offices: 1 }
        ]
    }
];

// 办公室数据
const offices = [
    {
        id: 260,
        name: "上海西雅国际食品和饮料展览会",
        city: "上海",
        address: "269 Haining Road<br>Shanghai 200080, China Direct line: 86 - 21 - 65212616",
        phone: "+86 21 6522 2266",
        phoneLink: "+862165222266",
        image: "static/images/dcs-sede-shanghai-39.jpg",
        slug: "shanghai",
        country: "CN",
        continent: "AS",
        latLng: { type: "Point", coordinates: [121.48030856831, 31.247523564039] },
        lng: "105.0000000000",
        lat: "35.0000000000"
    },
    {
        id: 222,
        name: "Shanghaiaaa啊啊出来吧",
        city: "Livorno",
        address: "Scali D'Azeglio 32<br>57123 Livorno",
        phone: "+39 0586 27333",
        phoneLink: "+39058627333",
        image: "static/images/dcs-sede-livorno-1.jpg",
        slug: "livorno",
        country: "IT",
        continent: "EU",
        latLng: { type: "Point", coordinates: [10.308116097541, 43.547929167624] },
        lng: "12.8333300000",
        lat: "42.8333300000"
    },
    {
        id: 274,
        name: "DCS Tramaco Sp.z.o.o.",
        city: "Łódź",
        address: "Grabińska 32<br>92-780 Łódź",
        phone: "+48 79 0292434",
        phoneLink: "+48790292434",
        image: "static/images/dcs_sede-lodz.jpg",
        slug: "lodz",
        country: "PL",
        continent: "EU",
        latLng: { type: "Point", coordinates: [19.591219422342, 51.810934667328] },
        lng: "20.0000000000",
        lat: "52.0000000000"
    },
    {
        id: 255,
        name: "Del Corona & Scardigli Russia",
        city: "Moscow",
        address: "Уланский переулок 22/1 офис 534 Ulanskiy pereulok 22/1<br>101000 - Moscow",
        phone: "+7 499 350 5562",
        phoneLink: "+74993505562",
        image: "static/images/dcs-sede-moscow-34.jpg",
        slug: "moscow",
        country: "RU",
        continent: "EU",
        latLng: { type: "Point", coordinates: [37.640728569197, 55.769232796668] },
        lng: "100.0000000000",
        lat: "60.0000000000"
    },
    {
        id: 231,
        name: "TRAMACO Logistika d.o.o.",
        city: "Koper",
        address: "Vojkovo nabrežje 30/A<br>SI-6000 Koper",
        phone: "+386 5611 7615",
        phoneLink: "+38656117615",
        image: "static/images/dcs-sede-koper-10.jpg",
        slug: "koper",
        country: "SI",
        continent: "EU",
        latLng: { type: "Point", coordinates: [13.73733199577, 45.547385670955] },
        lng: "15.0000000000",
        lat: "46.0833300000"
    },
    {
        id: 268,
        name: "Del Corona & Scardigli Spain SLU",
        city: "Barcelona",
        address: "Carrer d'Almogavers 119-123<br>08018 Barcelona",
        phone: "+34 932 697 000",
        phoneLink: "+34932697000",
        image: "static/images/barcellona.jpg",
        slug: "barcellona",
        country: "ES",
        continent: "EU",
        latLng: { type: "Point", coordinates: [2.1898382686289, 41.397334178592] },
        lng: "-4.0000000000",
        lat: "40.0000000000"
    },
    {
        id: 234,
        name: "Del Corona & Scardigli Canada Inc.",
        city: "Toronto",
        address: "8200 Jane Street<br>Ontario - L4K 5A7",
        phone: "+1 855 421 3105",
        phoneLink: "+1 855 421 3105",
        image: "static/images/dcs-sede-toronto-13.jpg",
        slug: "toronto",
        country: "CA",
        continent: "NA",
        latLng: { type: "Point", coordinates: [-79.527872173615, 43.806817664413] },
        lng: "-113.6425800000",
        lat: "60.1086700000"
    },
    {
        id: 246,
        name: "Del Corona & Scardigli Mexico S.A. de C.V.",
        city: "Mexico City",
        address: "Patricio Sanz 1609, Col del Valle Sur<br>Benito Juárez 03104 Ciudad de México",
        phone: "+52 55 55598402",
        phoneLink: "+525555598402",
        image: "static/images/dcs-sede-mexicocity-25.jpg",
        slug: "mexico-city",
        country: "MX",
        continent: "NA",
        latLng: { type: "Point", coordinates: [-99.175210003122, 19.372218239004] },
        lng: "-102.0000000000",
        lat: "23.0000000000"
    },
    {
        id: 236,
        name: "Del Corona & Scardigli™ USA Inc.",
        city: "New York",
        address: "15 W 36th Street<br>New York, NY 10018",
        phone: "+1 646 661 4804",
        phoneLink: "+1 646 661 4804",
        image: "static/images/dcs-sede-newyork-15.jpg",
        slug: "new-york",
        country: "US",
        continent: "NA",
        latLng: { type: "Point", coordinates: [-73.984625202559, 40.750321860272] },
        lng: "-98.5000000000",
        lat: "39.7600000000"
    },
    {
        id: 250,
        name: "Del Corona & Scardigli logistica LTDA",
        city: "San Paolo",
        address: "Rua Fradique Coutinho 212, San Paolo - San Paolo, 05416-000, Brasile<br>Salas 43 e 44 Pinheiros, 05416-000",
        phone: "+55 11 3254 6292",
        phoneLink: "+551132546292",
        image: "static/images/dcs-sede-sanpaolo-29.jpg",
        slug: "san-paolo",
        country: "BR",
        continent: "SA",
        latLng: { type: "Point", coordinates: [-46.685269, -23.564507] },
        lng: "-55.0000000000",
        lat: "-10.0000000000"
    },
    {
        id: 249,
        name: "Del Corona & Scardigli Chile LTDA.",
        city: "Santiago",
        address: "Roger de Flor 2871<br>Las Condes, Santiago",
        phone: "+56952125913",
        phoneLink: "+56952125913",
        image: "static/images/dcs-sede-santiago-28.jpg",
        slug: "santiago",
        country: "CL",
        continent: "SA",
        latLng: { type: "Point", coordinates: [-70.600060302792, -33.416827738928] },
        lng: "-71.0000000000",
        lat: "-30.0000000000"
    },

    {
        id: 256,
        name: "Del Corona & Scardigli India PVT. LTD.",
        city: "Chennai",
        address: "Krishnasamy Street, 600061, Pazhavanthangal, Chennai, Chennai, Tamil Nadu, India<br>",
        phone: "+91 44 45561822",
        phoneLink: "+914445561822",
        image: "static/images/dcs-sede-chennai-35.jpg",
        slug: "chennai",
        country: "IN",
        continent: "AS",
        latLng: { type: "Point", coordinates: [80.185544, 12.987401] },
        lng: "79.0000000000",
        lat: "22.0000000000"
    },
    {
        id: 265,
        name: "Del Corona & Scardigli Korea",
        city: "Seoul",
        address: "157 양평로 Yeongdeungpo-ro<br>Yeongdeungpo-gu Seoul",
        phone: "+82 2 6338 0155",
        phoneLink: "+82263380155",
        image: "static/images/dcs-sede-seoul-44.jpg",
        slug: "seoul",
        country: "KR",
        continent: "AS",
        latLng: { type: "Point", coordinates: [126.890302, 37.539304] },
        lng: "127.7500000000",
        lat: "36.5000000000"
    },
    {
        id: 279,
        name: "Del Corona & Scardigli Australia Pty Ltd",
        city: "Sydney",
        address: "152 Bunnerong Road<br>Eastgardens 2036",
        phone: "+61 3 8609 4003",
        phoneLink: "+61386094003",
        image: "static/images/dcs_sede-sydney.jpg",
        slug: "sydney",
        country: "AU",
        continent: "OC",
        latLng: { type: "Point", coordinates: [151.224011, -33.944595] },
        lng: "135.0000000000",
        lat: "-25.0000000000"
    }
];

// 首先显示的位置
var centerOffice = offices[0];

