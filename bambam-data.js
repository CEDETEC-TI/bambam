/* =========================================================
   DATOS COMPARTIDOS — usados por index.html y por impresora.html
   ========================================================= */
const WA = '5493704824319';
const waLink = (text) => `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;

const PRINTERS = [
    {
        id: 'sigma-sl1',
        brand: 'Entrust',
        name: 'Sigma SL1',
        images: ['img/sigma-sl1-1.jpg'],
        sides: ['simple'],
        badge: 'Simple cara',
        desc: 'Impresora de credenciales de un lado, con panel de estado y gestión desde el celular. Ideal para carnets de socios, accesos y credenciales corporativas.',
        specs: [
            { icon: 'fa-gauge-high', label: 'Velocidad', value: '175 tarjetas/hora en color · 660 en monocromo' },
            { icon: 'fa-image', label: 'Resolución', value: '300 x 1200 dpi, sublimación de tinta' },
            { icon: 'fa-plug', label: 'Conexión', value: 'USB, con actualización a Wi-Fi opcional' },
        ],
    },
    {
        id: 'dtc1500',
        brand: 'HID Fargo',
        name: 'DTC1500',
        images: ['img/dtc1500-1.jpg'],
        sides: ['simple', 'doble'],
        badge: 'Simple y doble cara',
        desc: 'Impresora modular de HID Fargo con marca de agua de seguridad integrada, pensada para escuelas, organismos públicos y empresas en crecimiento.',
        specs: [
            { icon: 'fa-gauge-high', label: 'Velocidad', value: '225 tarjetas/hora a una cara · 150 a doble cara' },
            { icon: 'fa-image', label: 'Resolución', value: '300 dpi' },
            { icon: 'fa-layer-group', label: 'Capacidad', value: '100 tarjetas de entrada y 100 de salida' },
            { icon: 'fa-plug', label: 'Conexión', value: 'USB, con Ethernet opcional' },
        ],
    },
    {
        id: 'zc100',
        brand: 'Zebra',
        name: 'ZC100',
        images: ['img/zc100-1.jpg', 'img/zc100-2.jpg', 'img/zc100-3.jpg', 'img/zc100-4.jpg'],
        sides: ['simple'],
        badge: 'Simple cara',
        desc: 'Impresora compacta de un lado, con alimentador que se ajusta solo al grosor de cada tarjeta. Una opción accesible para empezar a emitir credenciales propias.',
        specs: [
            { icon: 'fa-gauge-high', label: 'Velocidad', value: '150 tarjetas/hora en color · 700 en monocromo' },
            { icon: 'fa-image', label: 'Resolución', value: '300 dpi' },
            { icon: 'fa-layer-group', label: 'Capacidad', value: '100 tarjetas de entrada y 100 de salida' },
            { icon: 'fa-plug', label: 'Conexión', value: 'USB 2.0, con Ethernet 10/100 opcional' },
        ],
    },
    {
        id: 'zc300',
        brand: 'Zebra',
        name: 'ZC300',
        images: ['img/zc300-1.jpg', 'img/zc300-2.jpg', 'img/zc300-3.jpg', 'img/zc300-4.jpg', 'img/zc300-5.jpg'],
        sides: ['simple', 'doble'],
        badge: 'Simple y doble cara',
        desc: 'El perfil más delgado de su categoría, disponible a una o dos caras. Lista para usar apenas se conecta, sin configuración compleja.',
        specs: [
            { icon: 'fa-gauge-high', label: 'Velocidad', value: 'Hasta 200 tarjetas/hora en color · 900 en monocromo' },
            { icon: 'fa-image', label: 'Resolución', value: '300 dpi' },
            { icon: 'fa-layer-group', label: 'Capacidad', value: '100 tarjetas de entrada y 100 de salida' },
            { icon: 'fa-plug', label: 'Conexión', value: 'USB 2.0 + Ethernet, con Wi-Fi opcional' },
        ],
    },
    {
        id: 's26',
        brand: 'IDSHOP',
        name: 'DTC S26 SS',
        images: ['img/s26-1.jpg', 'img/s26-2.jpg', 'img/s26-3.jpg', 'img/s26-4.jpg', 'img/s26-5.jpg'],
        sides: ['simple'],
        badge: 'Simple cara',
        desc: 'Impresora de un lado con diseño liviano y el software iCarde incluido, para diseñar y emitir credenciales sin instalar nada más.',
        specs: [
            { icon: 'fa-gauge-high', label: 'Velocidad', value: 'Hasta 180 tarjetas/hora' },
            { icon: 'fa-image', label: 'Resolución', value: '300 dpi' },
            { icon: 'fa-plug', label: 'Conexión', value: 'USB, con Ethernet opcional' },
        ],
    },
];

function getPrinter(id) { return PRINTERS.find(p => p.id === id); }
