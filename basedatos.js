const productos = [
    {
        nombre: "Laptop Dell XPS 13",
        codigo: "p1",
        precio: 1699999,
        categoria: "tecnologia",
        color: "Plata",
        imagen: "https://hungphatlaptop.com/wp-content/uploads/2021/07/DELL-XPS-13-9310-2-in-1-Features-01-1024x966.jpeg",
        resistenciaAguaPolvo: "No",
        garantiaExtendida: "Sí"
    },
    {
        nombre: "Smartphone Samsung Galaxy S21",
        codigo: "p2",
        precio: 1249999,
        categoria: "tecnologia",
        color: "Negro",
        imagen: "https://th.bing.com/th/id/R.e58a5ad81302b9e3f24689186ef3aa91?rik=clbmW0XFPMHQZQ&pid=ImgRaw&r=0",
        resistenciaAguaPolvo: "Sí",
        garantiaExtendida: "Sí"
    },
    {
        nombre: "Tableta gráfica Wacom Intuos",
        codigo: "p3",
        precio: 249999,
        categoria: "tecnologia",
        color: "Negro",
        imagen: "https://http2.mlstatic.com/tableta-grafica-digital-intuos-wacom-D_NQ_NP_897021-MLM20684089475_042016-F.jpg",
        resistenciaAguaPolvo: "No",
        garantiaExtendida: "Sí"
    },
    {
        nombre: "Cámara Sony Alpha A7 III",
        codigo: "p4",
        precio: 2699999,
        categoria: "tecnologia",
        color: "Negro",
        imagen: "https://th.bing.com/th/id/OIP.8d657OMQJXKPu6GFuB-QnQHaHa?rs=1&pid=ImgDetMain",
        resistenciaAguaPolvo: "No",
        garantiaExtendida: "Sí"
    },
    {
        nombre: "Auriculares Sony WH-1000XM4",
        codigo: "p5",
        precio: 999999,
        categoria: "tecnologia",
        color: "Negro",
        imagen: "https://productimages.hepsiburada.net/s/377/550/110000395726391.jpg",
        resistenciaAguaPolvo: "No",
        garantiaExtendida: "Sí"
    },
    {
        nombre: "Monitor LG UltraGear 27GL850-B",
        codigo: "p6",
        precio: 259999,
        categoria: "tecnologia",
        color: "Negro",
        imagen: "https://th.bing.com/th/id/R.e8b5ef7c4e9f39162af14e31dba24086?rik=FaZCZa6tgvGHfg&pid=ImgRaw&r=0",
        resistenciaAguaPolvo: "No",
        garantiaExtendida: "Sí"
    },
    {
        nombre: "Impresora HP LaserJet Pro MFP M227fdw",
        codigo: "p7",
        precio: 429999,
        categoria: "tecnologia",
        color: "Blanco",
        imagen: "https://th.bing.com/th/id/R.09816018c8726d82927d5aea05250c14?rik=a7b7Xp6DwMdwBQ&riu=http%3a%2f%2fstore.hp.com%2fCanadaStore%2fHtml%2fMerch%2fImages%2fc05289305_1750x1285.jpg&ehk=AdvVC7NXB3PQx%2f20T4rphVohIgLPCGwVyd0wIODQ1KY%3d&risl=&pid=ImgRaw&r=0",
        resistenciaAguaPolvo: "No",
        garantiaExtendida: "Sí"
    },
    {
        nombre: "Teclado mecánico Corsair K95 RGB Platinum XT",
        codigo: "p8",
        precio: 329999,
        categoria: "tecnologia",
        color: "Negro",
        imagen: "https://d1eh9yux7w8iql.cloudfront.net/product_images/None_1b8bf977-8b8c-490e-b215-7752eff012b0.jpg",
        resistenciaAguaPolvo: "No",
        garantiaExtendida: "Sí"
    },
    {
        nombre: "Mouse Logitech G502 HERO",
        codigo: "p9",
        precio: 139999,
        categoria: "tecnologia",
        color: "Negro",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_875530-MLV51826756927_102022-O.webp",
        resistenciaAguaPolvo: "No",
        garantiaExtendida: "Sí"
    },
    {
        nombre: "Disco duro externo Seagate Expansion 2TB",
        codigo: "p10",
        precio: 269999,
        categoria: "tecnologia",
        color: "Negro",
        imagen: "https://mla-s1-p.mlstatic.com/950989-MLA40076329712_122019-F.jpg",
        resistenciaAguaPolvo: "No",
        garantiaExtendida: "Sí"
    },
    {
        nombre: "Impresora 3D Creality Ender 3 V2",
        codigo: "p11",
        precio: 349999,
        categoria: "tecnologia",
        color: "Negro",
        imagen: "https://cdn.shopify.com/s/files/1/0029/6838/7619/products/71keLzRdw3L._SL1500_1024x1024.jpg?v=1604568996",
        resistenciaAguaPolvo: "No",
        garantiaExtendida: "Sí"
    },
    {
        nombre: "Monitor curvo Samsung Odyssey G7",
        codigo: "p12",
        precio: 999999,
        categoria: "tecnologia",
        color: "Blanco",
        imagen: "https://th.bing.com/th/id/OIP.oArO9AyRrngaEbZh9IDHYgHaHa?rs=1&pid=ImgDetMain",
        resistenciaAguaPolvo: "No",
        garantiaExtendida: "Sí"
    },
    {
        nombre: "Mousepad Corsair MM300",
        codigo: "p13",
        precio: 59999,
        categoria: "tecnologia",
        color: "Negro",
        imagen: "https://images-na.ssl-images-amazon.com/images/I/91k6iN0lyHL.jpg",
        resistenciaAguaPolvo: "No",
        garantiaExtendida: "Sí"
    },
    {
        nombre: "Cámara de seguridad Arlo Pro 3",
        codigo: "p14",
        precio: 899999,
        categoria: "tecnologia",
        color: "Blanco",
        imagen: "https://th.bing.com/th/id/R.484e89fc397fff25f6ad9eaf2a06d7f3?rik=HQEC%2bW3kk%2bl0qQ&pid=ImgRaw&r=0",
        resistenciaAguaPolvo: "Sí",
        garantiaExtendida: "Sí"
    },
    {
        nombre: "Router WiFi TP-Link Archer AX10",
        codigo: "p15",
        precio: 249999,
        categoria: "tecnologia",
        color: "Negro",
        imagen: "https://elchapuzasinformatico.com/wp-content/uploads/2020/05/TP-Link-Archer-AX10-12-768x525.jpg",
        resistenciaAguaPolvo: "No",
        garantiaExtendida: "Sí"
    },
    {
        nombre: "Altavoces Logitech Z623",
        codigo: "p16",
        precio: 549999,
        categoria: "tecnologia",
        color: "Negro",
        imagen: "https://th.bing.com/th/id/R.23025e4ec2b699d0f4350c5a6cf27f67?rik=4s89YUJAWTvc1w&pid=ImgRaw&r=0",
        resistenciaAguaPolvo: "No",
        garantiaExtendida: "Sí"
    },
    {
        nombre: "Smartwatch Apple Watch Series 6",
        codigo: "p17",
        precio: 1249999,
        categoria: "tecnologia",
        color: "Negro",
        imagen: "https://www.gannett-cdn.com/presto/2020/09/24/USAT/c1ce0496-7d03-4b52-b0d8-93187984022a-apple_watch_6_hero.jpg?crop=4779,2689,x10,y0&width=3200&height=1801&format=pjpg&auto=webp",
        resistenciaAguaPolvo: "Sí",
        garantiaExtendida: "Sí"
    },
    {
        nombre: "Teclado inalámbrico Logitech K780",
        codigo: "p18",
        precio: 149999,
        categoria: "tecnologia",
        color: "Negro",
        imagen: "https://th.bing.com/th/id/R.5d14143916c4ad623bca2a4f065e0210?rik=VYO8DuFKhHzogg&pid=ImgRaw&r=0",
        resistenciaAguaPolvo: "No",
        garantiaExtendida: "Sí"
    },
    {
        nombre: "Webcam Logitech C920",
        codigo: "p19",
        precio: 229999,
        categoria: "tecnologia",
        color: "Negro",
        imagen: "https://www.bhphotovideo.com/images/images2500x2500/Logitech_960_000764_C920_832460.jpg",
        resistenciaAguaPolvo: "No",
        garantiaExtendida: "Sí"
    },
    {
        nombre: "Disco de estado sólido (SSD) Samsung 970 EVO Plus 1TB",
        codigo: "p20",
        precio: 399999,
        categoria: "tecnologia",
        color: "Negro",
        imagen: "https://th.bing.com/th/id/OIP.Y6PedouHu0srIvH6H3NWpAHaGd?rs=1&pid=ImgDetMain",
        resistenciaAguaPolvo: "No",
        garantiaExtendida: "Sí"
    },
    {
        nombre: "Kit de iluminación LED para videollamadas",
        codigo: "p21",
        precio: 79999,
        categoria: "tecnologia",
        color: "Negro",
        imagen: "https://th.bing.com/th/id/OIP.K1Z3ToC1h15jR7MbybhnhQHaHa?rs=1&pid=ImgDetMain",
        resistenciaAguaPolvo: "No",
        garantiaExtendida: "Sí"
    },
    {
        nombre: "Mini PC Intel NUC 10 Performance Kit",
        codigo: "p22",
        precio: 729999,
        categoria: "tecnologia",
        color: "Negro",
        imagen: "https://th.bing.com/th/id/R.3397287f028a98224e356ac8f567a062?rik=gpOWnxwfU3%2bX6Q&pid=ImgRaw&r=0",
        resistenciaAguaPolvo: "No",
        garantiaExtendida: "Sí"
    },
    {
        nombre: "Auriculares Bluetooth JBL Tune 120TWS",
        codigo: "p23",
        precio: 199999,
        categoria: "tecnologia",
        color: "Negro",
        imagen: "https://cyberacceso.com/wp-content/uploads/2021/10/JBL-Live-Free-NC.jpg",
        resistenciaAguaPolvo: "No",
        garantiaExtendida: "Sí"
    },
    {
        nombre: "Cámara web Logitech StreamCam",
        codigo: "p24",
        precio: 299999,
        categoria: "tecnologia",
        color: "Blanco",
        imagen: "https://th.bing.com/th/id/OIP.P_ux8mJm4UdWvKgBOnP1fAHaHa?rs=1&pid=ImgDetMain",
        resistenciaAguaPolvo: "No",
        garantiaExtendida: "Sí"
    },
    {
        nombre: "Insta mini camara ",
        codigo: "p25",
        precio: 179999,
        categoria: "tecnologia",
        color: "Rosa",
        imagen: "https://img.pccomponentes.com/articles/28/281093/fujifilm-instax-mini-11-lila-comprar.jpg",
        resistenciaAguaPolvo: "No",
        garantiaExtendida: "Sí"
    },
    {
        nombre: "Auriculares gamer HyperX Cloud II",
        codigo: "p26",
        precio: 349999,
        categoria: "tecnologia",
        color: "Negro",
        imagen: "https://th.bing.com/th/id/OIP.upctsup85ZvGWTapqa0ubwAAAA?rs=1&pid=ImgDetMain",
        resistenciaAguaPolvo: "No",
        garantiaExtendida: "Sí"
    },
    {
        nombre: "Router WiFi Mesh TP-Link Deco M5",
        codigo: "p27",
        precio: 499999,
        categoria: "tecnologia",
        color: "Blanco",
        imagen: "https://th.bing.com/th/id/OIP.TIvUtrTinJFx-2RgnRr7UgHaHa?rs=1&pid=ImgDetMain",
        resistenciaAguaPolvo: "No",
        garantiaExtendida: "Sí"
    },
    {
        nombre: "Teclado para juegos Razer BlackWidow Elite",
        codigo: "p28",
        precio: 649999,
        categoria: "tecnologia",
        color: "Negro",
        imagen: "https://th.bing.com/th/id/R.1824e222b152f9b878216de0415e98e8?rik=KDCyttbphc1pOg&pid=ImgRaw&r=0",
        resistenciaAguaPolvo: "No",
        garantiaExtendida: "Sí"
    },
    {
        nombre: "Cámara de acción GoPro HERO9 Black",
        codigo: "p29",
        precio: 1049999,
        categoria: "tecnologia",
        color: "Negro",
        imagen: "https://lcdn.altex.ro/resize/media/catalog/product/3/9/2bd48d28d1c32adea0e55139a4e6434a/39982678_SI10064_-90_HERO10_Black_QR_Buckle_master.jpg",
        resistenciaAguaPolvo: "Sí",
        garantiaExtendida: "Sí"
    },
    {
        nombre: "Altavoz inteligente Amazon Echo Dot (4ta generación)",
        codigo: "p30",
        precio: 89999,
        categoria: "tecnologia",
        color: "Gris",
        imagen: "https://realplaza.vtexassets.com/arquivos/ids/28075220/imageUrl_1.jpg?v=637919968900170000",
        resistenciaAguaPolvo: "No",
        garantiaExtendida: "Sí"
    },
    {
        nombre: "Laptop Lenovo ThinkPad X1 Carbon",
        codigo: "p31",
        precio: 90000,
        categoria: "tecnologia",
        color: "Gris",
        imagen: "https://th.bing.com/th/id/OIP.lc9iGlHfBVWNH_n8queAjAHaFM?rs=1&pid=ImgDetMain",
        resistenciaAguaPolvo: "si",
        garantiaExtendida: "Sí"
    },
    {
        nombre: "Smartphone iPhone 13 Pro",
        codigo: "p32",
        precio: 3000000,
        categoria: "tecnologia",
        color: "verde",
        imagen: "https://stylus.ua/thumbs/568x568/c5/d8/2768537.jpeg",
        resistenciaAguaPolvo: "si",
        garantiaExtendida: "no"
    },
    {
        nombre: "Tableta Samsung Galaxy Tab S7",
        codigo: "p33",
        precio: 1500000,
        categoria: "tecnologia",
        color: "Gris",
        imagen: "https://brain-images-ssl.cdn.dixons.com/4/1/10222914/u_10222914.jpg",
        resistenciaAguaPolvo: "No",
        garantiaExtendida: "Sí"
    },
    {
        nombre: "Cámara Canon EOS R5",
        codigo: "p34",
        precio: 5000000,
        categoria: "tecnologia",
        color: "Gris",
        imagen: "https://th.bing.com/th/id/R.14b07c717c9a6ba41272d7ace97335e2?rik=OdCBL%2fM6EMKPDQ&pid=ImgRaw&r=0",
        resistenciaAguaPolvo: "No",
        garantiaExtendida: "Sí"
    },
    {
        nombre: "Portátil HP Spectre x360",
        codigo: "p35",
        precio: 1200000,
        categoria: "tecnologia",
        color: "Gris",
        imagen: "https://th.bing.com/th/id/R.cd0c3e5aaae5417d52afc2196d97c730?rik=e5OtCDIVIPsneg&pid=ImgRaw&r=0",
        resistenciaAguaPolvo: "No",
        garantiaExtendida: "no"
    },
    {
        nombre: "Teléfono Samsung Galaxy Z Fold 3",
        codigo: "p36",
        precio: 990000,
        categoria: "tecnologia",
        color: "negro",
        imagen: "https://i.blogs.es/a4207c/samsung-galaxy-z-fold-3-1/1366_2000.jpg",
        resistenciaAguaPolvo: "si",
        garantiaExtendida: "Sí"
    },
    {
        nombre: "Tableta gráfica Huion Kamvas Pro 24",
        codigo: "p37",
        precio: 890000,
        categoria: "tecnologia",
        color: "Gris",
        imagen: "https://th.bing.com/th/id/R.14e45283f6c93d122f1433451c9be416?rik=noLGf9Mo2Vh52A&pid=ImgRaw&r=0",
        resistenciaAguaPolvo: "No",
        garantiaExtendida: "no"
    },
    {
        nombre: "Auriculares Sony WH-1000XM4",
        codigo: "p38",
        precio: 89999,
        categoria: "tecnologia",
        color: "negro",
        imagen: "https://th.bing.com/th/id/OIP.VohYgXu-QliyUKTz7WXMzAHaFk?rs=1&pid=ImgDetMain",
        resistenciaAguaPolvo: "No",
        garantiaExtendida: "No"
    },
    {
        nombre: "Monitor LG UltraWide 34WN80C-B",
        codigo: "p39",
        precio: 600000,
        categoria: "tecnologia",
        color: "negro",
        imagen: "https://th.bing.com/th/id/OIP.JA1w_U8MPLUzDXkR8Kmv0gAAAA?rs=1&pid=ImgDetMain",
        resistenciaAguaPolvo: "No",
        garantiaExtendida: "Sí"
    },
    {
        nombre: "Impresora HP OfficeJet Pro 9015",
        codigo: "p40",
        precio: 400000,
        categoria: "tecnologia",
        color: "blanco",
        imagen: "https://th.bing.com/th/id/OIP.v283KttM6z4TVeQ8K2vx8AHaHa?rs=1&pid=ImgDetMain",
        resistenciaAguaPolvo: "No",
        garantiaExtendida: "Sí"
    },
    {
        nombre: "Proyector BenQ TK850i",
        codigo: "p41",
        precio: 389000,
        categoria: "tecnologia",
        color: "blanco",
        imagen: "https://th.bing.com/th/id/OIP.K5OJ9xOpBRHEkpTK-AQoggHaHa?rs=1&pid=ImgDetMain",
        resistenciaAguaPolvo: "No",
        garantiaExtendida: "No"
    },
    {
        nombre: "Monitor curvo MSI Optix MAG341CQ",
        codigo: "p42",
        precio: 878900,
        categoria: "tecnologia",
        color: "Negro",
        imagen: "https://th.bing.com/th/id/OIP.GD5hSUCsEHJbgxT__J-XFAHaHa?w=600&h=600&rs=1&pid=ImgDetMain",
        resistenciaAguaPolvo: "No",
        garantiaExtendida: "Sí"
    },
    {
        nombre: "Consola de juegos Nintendo Switch OLED",
        codigo: "p43",
        precio: 1000000,
        categoria: "tecnologia",
        color: "blanco-negro-rojo",
        imagen: "https://cdn.media.amplience.net/i/xcite/640060-04?img404=default&w=2048&qlt=75&fmt=auto",
        resistenciaAguaPolvo: "No",
        garantiaExtendida: "no"
    },
    {
        nombre: "Aspiradora robot Roborock S7",
        codigo: "p44",
        precio: 965000,
        categoria: "tecnologia",
        color: "negro",
        imagen: "https://th.bing.com/th/id/OIP.8Y_8u6MHB1aA9eHBwBuesAHaGH?rs=1&pid=ImgDetMain",
        resistenciaAguaPolvo: "si",
        garantiaExtendida: "no"
    },
    {
        nombre: "Termostato inteligente Ecobee SmartThermostat",
        codigo: "p45",
        precio: 119000,
        categoria: "tecnologia",
        color: "Gris",
        imagen: "https://th.bing.com/th/id/OIP.RERBNIoTIGrefbdOnQ-PVAHaFh?rs=1&pid=ImgDetMain",
        resistenciaAguaPolvo: "si",
        garantiaExtendida: "Sí"
    },
    {
        nombre: "Refrigerador inteligente LG InstaView ThinQ",
        codigo: "p46",
        precio: 6790000,
        categoria: "tecnologia",
        color: "Gris",
        imagen: "https://th.bing.com/th/id/R.f5d8d94cc49b77da52815b8d85a03ab8?rik=6A%2f2rx7NW7go5w&pid=ImgRaw&r=0",
        resistenciaAguaPolvo: "Si",
        garantiaExtendida: "Sí"
    },
    {
        nombre: "Monitor Dell UltraSharp U2720Q",
        codigo: "p47",
        precio: 899000,
        categoria: "tecnologia",
        color: "Gris",
        imagen: "https://th.bing.com/th/id/OIP.FWgaFMWE3XAOceDkc1inrwHaHa?rs=1&pid=ImgDetMain",
        resistenciaAguaPolvo: "No",
        garantiaExtendida: "Sí"
    },
    {
        nombre: "Consola de juegos Xbox Series X",
        codigo: "p48",
        precio: 800000,
        categoria: "tecnologia",
        color: "negro",
        imagen: "https://th.bing.com/th/id/R.5d6ee7b3aa572249265f2a7106cf2455?rik=TSZFXENuYDyaLQ&pid=ImgRaw&r=0",
        resistenciaAguaPolvo: "No",
        garantiaExtendida: "no"
    },
    {
        nombre: "Altavoces JBL Charge 5",
        codigo: "p49",
        precio: 202000,
        categoria: "tecnologia",
        color: "rojo",
        imagen: "https://th.bing.com/th/id/R.f8a57fff14a7ebd594e5008fc5910bf0?rik=IDhlqa%2bwC7CC%2fQ&pid=ImgRaw&r=0",
        resistenciaAguaPolvo: "Si",
        garantiaExtendida: "Sí"
    },
    {
        nombre: "Smartwatch Fitbit Versa 3",
        codigo: "p50",
        precio: 840900,
        categoria: "tecnologia",
        color: "azul",
        imagen: "https://th.bing.com/th/id/OIP.hO3M_lb6JnlfCzEfQad01wAAAA?w=474&h=500&rs=1&pid=ImgDetMain",
        resistenciaAguaPolvo: "No",
        garantiaExtendida: "Sí"
    },
];

