import { Product, Category } from './types';

export const CATEGORIES: Category[] = [
  {
    name: 'Lighting & Controls',
    subs: ['Interior Lighting', 'Exterior Lighting', 'Controls', 'Residential Mirrors', 'Hospitality Mirrors'],
  },
  {
    name: 'Power & Energy',
    subs: ['LiFePO4 Batteries', 'Portable Power Batteries', 'Home Backup Batteries', 'Commercial Batteries', 'EV Chargers'],
  },
  {
    name: 'Security & Sign Trailers',
    subs: ['Security & Sign Trailers'],
  },
  {
    name: 'Medical Equipment',
    subs: ['Monitoring & Diagnostics', 'Respiratory & Oxygen', 'Emergency & Critical Care', 'Surgical & Anesthesia', 'Maternal & Infant Care', 'Furniture & Patient Comfort'],
  },
];

export const BRANDS = [
  'Big Chief Solar & Battery',
  'Aqua Mirrors',
  'Estelles Lighting',
  'SmartDC Lighting',
  'Impulse Lighting',
  'Z1Power',
  'EV Bolt',
  'Tri-Tech International',
  'POE Lighting USA',
];

export const PRODUCTS: Product[] = [
  // Lighting & Controls - POE Lighting USA
  { id: 'p0', name: 'Architectural Downlights', brand: 'POE Lighting USA', category: 'Lighting & Controls', sub: 'Interior Lighting', image: 'poe-interior-architectural-downlights.png', externalURL: 'https://poelightingusa.com/product-category/architectural-downlights/' },
  { id: 'p1', name: 'Architectural Linear Lights', brand: 'POE Lighting USA', category: 'Lighting & Controls', sub: 'Interior Lighting', image: 'poe-interior-architectural-linear-lights.jpg', externalURL: 'https://poelightingusa.com/product-category/architectural-linear-lights/' },
  { id: 'p2', name: 'Ceiling Lights', brand: 'POE Lighting USA', category: 'Lighting & Controls', sub: 'Interior Lighting', image: 'poe-interior-ceiling-lights.jpg', externalURL: 'https://poelightingusa.com/product-category/ceiling-lights/' },
  { id: 'p3', name: 'Decorative Lighting', brand: 'POE Lighting USA', category: 'Lighting & Controls', sub: 'Interior Lighting', image: 'poe-interior-decorative-lighting.jpg', externalURL: 'https://poelightingusa.com/product-category/decorative-lighting/' },
  { id: 'p4', name: 'Geometric Pendants', brand: 'POE Lighting USA', category: 'Lighting & Controls', sub: 'Interior Lighting', image: 'poe-interior-geometric-pendants.jpg', externalURL: 'https://poelightingusa.com/product-category/geometric-pendants/' },
  { id: 'p5', name: 'Lamps – Floor & Table', brand: 'POE Lighting USA', category: 'Lighting & Controls', sub: 'Interior Lighting', image: 'poe-interior-lamps–floor-table.png', externalURL: 'https://poelightingusa.com/product-category/lamps-collection/' },
  { id: 'p6', name: 'Outdoor Luminaires', brand: 'POE Lighting USA', category: 'Lighting & Controls', sub: 'Exterior Lighting', image: 'poe-exterior-outdoor-luminaires.png', externalURL: 'https://poelightingusa.com/product-category/outdoor-luminaires/' },
  { id: 'p7', name: 'Track Lights', brand: 'POE Lighting USA', category: 'Lighting & Controls', sub: 'Interior Lighting', image: 'poe-interior-track-lights.png', externalURL: 'https://poelightingusa.com/product-category/track-lights/' },
  { id: 'p8', name: 'Wall Sconces', brand: 'POE Lighting USA', category: 'Lighting & Controls', sub: 'Interior Lighting', image: 'poe-interior-wall-sconces.png', externalURL: 'https://poelightingusa.com/product-category/wall-sconces/' },
  { id: 'p9', name: 'Wall Washer Lights', brand: 'POE Lighting USA', category: 'Lighting & Controls', sub: 'Interior Lighting', image: 'poe-interior-wall-washer-lights.png', externalURL: 'https://poelightingusa.com/product-category/wall-washer-lights/' },
  { id: 'p10', name: 'Industrial Lights', brand: 'POE Lighting USA', category: 'Lighting & Controls', sub: 'Interior Lighting', image: 'poe-interior-industrial-lights.png', externalURL: 'https://poelightingusa.com/product-category/industrial-lights/' },

  // Lighting & Controls - Aqua Mirrors
  { id: 'p12', name: 'Deluxe', brand: 'Aqua Mirrors', category: 'Lighting & Controls', sub: 'Hospitality Mirrors', image: 'aqua-mirrors-hospitality-mirrors-deluxe.jpg', externalURL: 'https://aquamirrors.com/product/deluxe/' },
  { id: 'p13', name: 'Deluxe ADA Collection', brand: 'Aqua Mirrors', category: 'Lighting & Controls', sub: 'Hospitality Mirrors', image: 'aqua-mirrors-hospitality-mirrors-deluxe-ada-collection.jpg', externalURL: 'https://aquamirrors.com/product/deluxe-ada-collection/' },
  { id: 'p14', name: 'Orbit Collection', brand: 'Aqua Mirrors', category: 'Lighting & Controls', sub: 'Hospitality Mirrors', image: 'aqua-mirrors-hospitality-mirrors-orbit-collection.jpg', externalURL: 'https://aquamirrors.com/product/orbit-collection/' },
  { id: 'p15', name: 'Vibrant Collection', brand: 'Aqua Mirrors', category: 'Lighting & Controls', sub: 'Hospitality Mirrors', image: 'aqua-mirrors-hospitality-mirrors-vibrant-collection.jpg', externalURL: 'https://aquamirrors.com/product/vibrant-collection/' },
  { id: 'p16', name: 'Vibrant ADA Collection', brand: 'Aqua Mirrors', category: 'Lighting & Controls', sub: 'Hospitality Mirrors', image: 'aqua-mirrors-hospitality-mirrors-vibrant-ada-collection.jpg', externalURL: 'https://aquamirrors.com/product/vibrant-ada-collection/' },
  { id: 'p17', name: 'Serena Collection', brand: 'Aqua Mirrors', category: 'Lighting & Controls', sub: 'Hospitality Mirrors', image: 'aqua-mirrors-hospitality-mirrors-serena-collection.jpg', externalURL: 'https://aquamirrors.com/product/serena-collection/' },
  { id: 'p18', name: 'Alice', brand: 'Aqua Mirrors', category: 'Lighting & Controls', sub: 'Residential Mirrors', image: 'aqua-mirrors-residential-mirrors-alice.jpg', externalURL: 'https://aquamirrors.com/product/alice/' },
  { id: 'p19', name: 'Alice Grande', brand: 'Aqua Mirrors', category: 'Lighting & Controls', sub: 'Residential Mirrors', image: 'aqua-mirrors-residential-mirrors-alice-grande.jpg', externalURL: 'https://aquamirrors.com/product/alice-grande/' },
  { id: 'p20', name: 'Audrey', brand: 'Aqua Mirrors', category: 'Lighting & Controls', sub: 'Residential Mirrors', image: 'aqua-mirrors-residential-mirrors-audrey.jpg', externalURL: 'https://aquamirrors.com/product/audrey/' },
  { id: 'p21', name: 'Aura', brand: 'Aqua Mirrors', category: 'Lighting & Controls', sub: 'Residential Mirrors', image: 'aqua-mirrors-residential-mirrors-aura.jpg', externalURL: 'https://aquamirrors.com/product/aura/' },
  { id: 'p22', name: 'Bella', brand: 'Aqua Mirrors', category: 'Lighting & Controls', sub: 'Residential Mirrors', image: 'aqua-mirrors-residential-mirrors-bella.jpg', externalURL: 'https://aquamirrors.com/product/bella/' },
  { id: 'p23', name: 'Brooklyn', brand: 'Aqua Mirrors', category: 'Lighting & Controls', sub: 'Residential Mirrors', image: 'aqua-mirrors-residential-mirrors-brooklyn.jpg', externalURL: 'https://aquamirrors.com/product/brooklyn/' },
  { id: 'p24', name: 'Carat', brand: 'Aqua Mirrors', category: 'Lighting & Controls', sub: 'Residential Mirrors', image: 'aqua-mirrors-residential-mirrors-carat.jpg', externalURL: 'https://aquamirrors.com/product/carat/' },
  { id: 'p25', name: 'Claire', brand: 'Aqua Mirrors', category: 'Lighting & Controls', sub: 'Residential Mirrors', image: 'aqua-mirrors-residential-mirrors-claire.jpg', externalURL: 'https://aquamirrors.com/product/claire/' },
  { id: 'p26', name: 'Clara', brand: 'Aqua Mirrors', category: 'Lighting & Controls', sub: 'Residential Mirrors', image: 'aqua-mirrors-residential-mirrors-clara.jpg', externalURL: 'https://aquamirrors.com/product/clara/' },
  { id: 'p27', name: 'Dazzle', brand: 'Aqua Mirrors', category: 'Lighting & Controls', sub: 'Residential Mirrors', image: 'aqua-mirrors-residential-mirrors-dazzle.jpg', externalURL: 'https://aquamirrors.com/product/dazzlesand-crystal-sparkling-round-frameless-front-lit-led-mirror/' },
  { id: 'p28', name: 'Janet', brand: 'Aqua Mirrors', category: 'Lighting & Controls', sub: 'Residential Mirrors', image: 'aqua-mirrors-residential-mirrors-janet.jpg', externalURL: 'https://aquamirrors.com/product/janet/' },
  { id: 'p29', name: 'Marlen', brand: 'Aqua Mirrors', category: 'Lighting & Controls', sub: 'Residential Mirrors', image: 'aqua-mirrors-residential-mirrors-marlen.jpg', externalURL: 'https://aquamirrors.com/product/marlen/' },
  { id: 'p30', name: 'Reem', brand: 'Aqua Mirrors', category: 'Lighting & Controls', sub: 'Residential Mirrors', image: 'aqua-mirrors-residential-mirrors-reem.jpg', externalURL: 'https://aquamirrors.com/product/reem/' },
  { id: 'p31', name: 'Sandy', brand: 'Aqua Mirrors', category: 'Lighting & Controls', sub: 'Residential Mirrors', image: 'aqua-mirrors-residential-mirrors-sandy.jpg', externalURL: 'https://aquamirrors.com/product/sandy/' },
  { id: 'p32', name: 'Saturn', brand: 'Aqua Mirrors', category: 'Lighting & Controls', sub: 'Residential Mirrors', image: 'aqua-mirrors-residential-mirrors-saturn.jpg', externalURL: 'https://aquamirrors.com/product/saturn/' },
  { id: 'p33', name: 'Scarlett', brand: 'Aqua Mirrors', category: 'Lighting & Controls', sub: 'Residential Mirrors', image: 'aqua-mirrors-residential-mirrors-scarlett.jpg', externalURL: 'https://aquamirrors.com/product/scarlett/' },
  { id: 'p34', name: 'Sierra', brand: 'Aqua Mirrors', category: 'Lighting & Controls', sub: 'Residential Mirrors', image: 'aqua-mirrors-residential-mirrors-sierra.jpg', externalURL: 'https://aquamirrors.com/product/sierra/' },
  { id: 'p35', name: 'Vivian', brand: 'Aqua Mirrors', category: 'Lighting & Controls', sub: 'Residential Mirrors', image: 'aqua-mirrors-residential-mirrors-vivian.jpg', externalURL: 'https://aquamirrors.com/product/vivianr/' },

  // Lighting & Controls - Estelles Lighting (Controls)
  { id: 'p36', name: 'Smart DC', brand: 'Estelles Lighting', category: 'Lighting & Controls', sub: 'Controls', image: '', externalURL: 'https://estelleslighting.com/product-category/control/smart-dc/' },
  { id: 'p37', name: 'Cooper', brand: 'Estelles Lighting', category: 'Lighting & Controls', sub: 'Controls', image: 'estelles-lighting-controls-cooper.jpg', externalURL: 'https://estelleslighting.com/product-category/control/cooper/' },
  { id: 'p38', name: 'Custom controls Solutions', brand: 'Estelles Lighting', category: 'Lighting & Controls', sub: 'Controls', image: 'estelles-lighting-controls-custom-controls-solutions.jpg', externalURL: 'https://estelleslighting.com/product-category/control/custom-controls-solutions-control/' },
  { id: 'p39', name: 'Enerlites', brand: 'Estelles Lighting', category: 'Lighting & Controls', sub: 'Controls', image: 'estelles-lighting-controls-enerlites.jpg', externalURL: 'https://estelleslighting.com/product-category/control/enerlites/' },
  { id: 'p40', name: 'Lutron', brand: 'Estelles Lighting', category: 'Lighting & Controls', sub: 'Controls', image: 'estelles-lighting-controls-lutron.jpg', externalURL: 'https://estelleslighting.com/product-category/control/lutron/' },

  // Lighting & Controls - Estelles Lighting (Exterior)
  { id: 'p41', name: 'Architectural Area Lighting', brand: 'Estelles Lighting', category: 'Lighting & Controls', sub: 'Exterior Lighting', image: 'estelles-lighting-exterior-lighting-architectural-area-lighting.jpg', externalURL: 'https://estelleslighting.com/product-category/exterior/architectural-area-lighting/' },
  { id: 'p42', name: 'Bollards', brand: 'Estelles Lighting', category: 'Lighting & Controls', sub: 'Exterior Lighting', image: 'estelles-lighting-exterior-lighting-bollards.jpg', externalURL: 'https://estelleslighting.com/product-category/exterior/bollards/' },
  { id: 'p43', name: 'Canopy & Garage Lights', brand: 'Estelles Lighting', category: 'Lighting & Controls', sub: 'Exterior Lighting', image: 'estelles-lighting-exterior-lighting-canopy-garage-lights.jpg', externalURL: 'https://estelleslighting.com/product-category/exterior/canopy-garage-lights/' },
  { id: 'p44', name: 'Cove lighting', brand: 'Estelles Lighting', category: 'Lighting & Controls', sub: 'Exterior Lighting', image: 'estelles-lighting-exterior-lighting-cove-lighting.jpg', externalURL: 'https://estelleslighting.com/product-category/exterior/cove-lighting/' },
  { id: 'p45', name: 'Emergency /Exit Lights', brand: 'Estelles Lighting', category: 'Lighting & Controls', sub: 'Exterior Lighting', image: 'estelles-lighting-exterior-lighting-emergency-exit-lights.jpg', externalURL: 'https://estelleslighting.com/product-category/exterior/emergency-exit-lights/' },
  { id: 'p46', name: 'Flood Lights', brand: 'Estelles Lighting', category: 'Lighting & Controls', sub: 'Exterior Lighting', image: 'estelles-lighting-exterior-lighting-flood-lights.jpg', externalURL: 'https://estelleslighting.com/product-category/exterior/flood-lights/' },
  { id: 'p47', name: 'In-Ground', brand: 'Estelles Lighting', category: 'Lighting & Controls', sub: 'Exterior Lighting', image: 'estelles-lighting-exterior-lighting-in-ground.jpg', externalURL: 'https://estelleslighting.com/product-category/exterior/in-ground/' },
  { id: 'p48', name: 'Landscape Lighting', brand: 'Estelles Lighting', category: 'Lighting & Controls', sub: 'Exterior Lighting', image: 'estelles-lighting-exterior-lighting-landscape-lighting.jpg', externalURL: 'https://estelleslighting.com/product-category/exterior/landscape-lighting/' },
  { id: 'p49', name: 'LED Strip', brand: 'Estelles Lighting', category: 'Lighting & Controls', sub: 'Exterior Lighting', image: 'estelles-lighting-exterior-lighting-led-strip.jpg', externalURL: 'https://estelleslighting.com/product-category/exterior/led-strip/' },
  { id: 'p50', name: 'Outdoor Wall Cylinders', brand: 'Estelles Lighting', category: 'Lighting & Controls', sub: 'Exterior Lighting', image: 'estelles-lighting-exterior-lighting-outdoor-wall-cylinders.jpg', externalURL: 'https://estelleslighting.com/product-category/exterior/outdoor-wall-cylinders/' },
  { id: 'p51', name: 'Outdoor Wall Sconces', brand: 'Estelles Lighting', category: 'Lighting & Controls', sub: 'Exterior Lighting', image: 'estelles-lighting-exterior-lighting-outdoor-wall-sconces.jpg', externalURL: 'https://estelleslighting.com/product-category/exterior/outdoor-wall-sconces/' },
  { id: 'p52', name: 'Parking / Area Lighting', brand: 'Estelles Lighting', category: 'Lighting & Controls', sub: 'Exterior Lighting', image: 'estelles-lighting-exterior-lighting-parking-area-lighting.jpg', externalURL: 'https://estelleslighting.com/product-category/exterior/parking-area-lighting/' },
  { id: 'p53', name: 'Poles & Accessories', brand: 'Estelles Lighting', category: 'Lighting & Controls', sub: 'Exterior Lighting', image: 'estelles-lighting-exterior-lighting-poles-accessories.jpg', externalURL: 'https://estelleslighting.com/product-category/exterior/poles-accessories/' },
  { id: 'p54', name: 'Roadway Lighting', brand: 'Estelles Lighting', category: 'Lighting & Controls', sub: 'Exterior Lighting', image: 'estelles-lighting-exterior-lighting-roadway-lighting.jpg', externalURL: 'https://estelleslighting.com/product-category/exterior/roadway-lighting/' },
  { id: 'p55', name: 'Sports Stadium Light', brand: 'Estelles Lighting', category: 'Lighting & Controls', sub: 'Exterior Lighting', image: 'estelles-lighting-exterior-lighting-sports-stadium-light.jpg', externalURL: 'https://estelleslighting.com/product-category/exterior/sports-stadium-light/' },
  { id: 'p56', name: 'Step Lights', brand: 'Estelles Lighting', category: 'Lighting & Controls', sub: 'Exterior Lighting', image: 'estelles-lighting-exterior-lighting-step-lights.jpg', externalURL: 'https://estelleslighting.com/product-category/exterior/step-lights/' },
  { id: 'p57', name: 'Vapor Tight', brand: 'Estelles Lighting', category: 'Lighting & Controls', sub: 'Exterior Lighting', image: 'estelles-lighting-exterior-lighting-vapor-tight.jpg', externalURL: 'https://estelleslighting.com/product-category/exterior/vapor-tight/' },
  { id: 'p58', name: 'Wall Packs', brand: 'Estelles Lighting', category: 'Lighting & Controls', sub: 'Exterior Lighting', image: 'estelles-lighting-exterior-lighting-wall-packs.jpg', externalURL: 'https://estelleslighting.com/product-category/exterior/wall-packs/' },
  { id: 'p59', name: 'Wall Washers', brand: 'Estelles Lighting', category: 'Lighting & Controls', sub: 'Exterior Lighting', image: 'estelles-lighting-exterior-lighting-wall-washers.jpg', externalURL: 'https://estelleslighting.com/product-category/exterior/wall-washers/' },

  // Lighting & Controls - Estelles Lighting (Interior)
  { id: 'p60', name: 'Down Lights', brand: 'Estelles Lighting', category: 'Lighting & Controls', sub: 'Interior Lighting', image: 'estelles-lighting-interior-lighting-down-lights.jpg', externalURL: 'https://estelleslighting.com/product-category/interior/down-lights/' },
  { id: 'p61', name: 'Floor Lamps', brand: 'Estelles Lighting', category: 'Lighting & Controls', sub: 'Interior Lighting', image: 'estelles-lighting-interior-lighting-floor-lamps.jpg', externalURL: 'https://estelleslighting.com/product-category/interior/floor-lamps/' },
  { id: 'p62', name: 'Flushmount Lights', brand: 'Estelles Lighting', category: 'Lighting & Controls', sub: 'Interior Lighting', image: 'estelles-lighting-interior-lighting-flushmount-lights.jpg', externalURL: 'https://estelleslighting.com/product-category/interior/flushmount-lights/' },
  { id: 'p63', name: 'Headboard Sconces', brand: 'Estelles Lighting', category: 'Lighting & Controls', sub: 'Interior Lighting', image: 'estelles-lighting-interior-lighting-headboard-sconces.jpg', externalURL: 'https://estelleslighting.com/product-category/interior/headboard-sconces/' },
  { id: 'p64', name: 'LED Lights', brand: 'Estelles Lighting', category: 'Lighting & Controls', sub: 'Interior Lighting', image: 'estelles-lighting-interior-lighting-led-lights.jpg', externalURL: 'https://estelleslighting.com/product-category/interior/led-lights/' },
  { id: 'p65', name: 'Linear Architectural', brand: 'Estelles Lighting', category: 'Lighting & Controls', sub: 'Interior Lighting', image: 'estelles-lighting-interior-lighting-linear-architectural.jpg', externalURL: 'https://estelleslighting.com/product-category/interior/linear-architectural/' },
  { id: 'p66', name: 'Lobby Pendants', brand: 'Estelles Lighting', category: 'Lighting & Controls', sub: 'Interior Lighting', image: 'estelles-lighting-interior-lighting-lobby-pendants.jpg', externalURL: 'https://estelleslighting.com/product-category/interior/lobby-pendants/' },
  { id: 'p67', name: 'Night stand lamps', brand: 'Estelles Lighting', category: 'Lighting & Controls', sub: 'Interior Lighting', image: 'estelles-lighting-interior-lighting-night-stand-lamps.jpg', externalURL: 'https://estelleslighting.com/product-category/interior/table-lamps-night-stand-lamps/' },
  { id: 'p68', name: 'Pendant Lights', brand: 'Estelles Lighting', category: 'Lighting & Controls', sub: 'Interior Lighting', image: 'estelles-lighting-interior-lighting-pendant-lights.jpg', externalURL: 'https://estelleslighting.com/product-category/interior/pendant-lights/' },
  { id: 'p69', name: 'Replacement Lamp Shades', brand: 'Estelles Lighting', category: 'Lighting & Controls', sub: 'Interior Lighting', image: 'estelles-lighting-interior-lighting-replacement-lamp-shades.jpg', externalURL: 'https://estelleslighting.com/product-category/interior/replacement-lamp-shades/' },
  { id: 'p70', name: 'Track Lights', brand: 'Estelles Lighting', category: 'Lighting & Controls', sub: 'Interior Lighting', image: 'estelles-lighting-interior-lighting-track-lights.jpg', externalURL: 'https://estelleslighting.com/product-category/interior/track-lights/' },
  { id: 'p71', name: 'Vanity Lights', brand: 'Estelles Lighting', category: 'Lighting & Controls', sub: 'Interior Lighting', image: 'estelles-lighting-interior-lighting-vanity-lights.jpg', externalURL: 'https://estelleslighting.com/product-category/interior/vanity-lights/' },
  { id: 'p72', name: 'Wall Lamps', brand: 'Estelles Lighting', category: 'Lighting & Controls', sub: 'Interior Lighting', image: 'estelles-lighting-interior-lighting-wall-lamps.jpg', externalURL: 'https://estelleslighting.com/product-category/interior/wall-lamps/' },
  { id: 'p73', name: 'Wall Sconce', brand: 'Estelles Lighting', category: 'Lighting & Controls', sub: 'Interior Lighting', image: 'estelles-lighting-interior-lighting-wall-sconce.jpg', externalURL: 'https://estelleslighting.com/product-category/interior/wall-sconce/' },
  { id: 'p74', name: 'Hospitality & Commercial', brand: 'Estelles Lighting', category: 'Lighting & Controls', sub: 'Hospitality Mirrors', image: 'estelles-lighting-hospitality-mirrors-hospitality-commercial.jpg', externalURL: 'https://estelleslighting.com/product-category/mirrors/hospitality-commercial/' },
  { id: 'p75', name: 'Residential & Multi-Family', brand: 'Estelles Lighting', category: 'Lighting & Controls', sub: 'Residential Mirrors', image: 'estelles-lighting-residential-mirrors-residential-multi-family.jpg', externalURL: 'https://estelleslighting.com/product-category/mirrors/residential-mirrors/' },

  // Lighting & Controls - SmartDC Lighting
  { id: 'p76', name: 'QuadDCDrive®', brand: 'SmartDC Lighting', category: 'Lighting & Controls', sub: 'Controls', image: 'smartdc-lighting-quaddcdrive.jpg', externalURL: 'https://smartdclighting.com/product/quaddcdrive/' },
  { id: 'p77', name: 'System Controller', brand: 'SmartDC Lighting', category: 'Lighting & Controls', sub: 'Controls', image: 'smartdc-lighting-system-controller.jpg', externalURL: 'https://smartdclighting.com/product/system-controller/' },
  { id: 'p78', name: 'Wall Stations', brand: 'SmartDC Lighting', category: 'Lighting & Controls', sub: 'Controls', image: 'smartdc-lighting-wall-stations.jpg', externalURL: 'https://smartdclighting.com/product/wall-stations/' },
  { id: 'p79', name: 'SDCnet Interfaces', brand: 'SmartDC Lighting', category: 'Lighting & Controls', sub: 'Controls', image: 'smartdc-lighting-sdcnet-interfaces.jpg', externalURL: 'https://smartdclighting.com/product/sdcnet-interfaces/' },
  { id: 'p80', name: 'Accessories', brand: 'SmartDC Lighting', category: 'Lighting & Controls', sub: 'Controls', image: 'smartdc-lighting-accessories.jpg', externalURL: 'https://smartdclighting.com/product/accessories/' },
  { id: 'p81', name: 'Lighting', brand: 'SmartDC Lighting', category: 'Lighting & Controls', sub: 'Controls', image: 'smartdc-lighting-lighting.jpg', externalURL: 'https://smartdclighting.com/product/lighting/' },

  // Lighting & Controls - Impulse Lighting (Interior)
  { id: 'p82', name: 'Recessed Down Lighting', brand: 'Impulse Lighting', category: 'Lighting & Controls', sub: 'Interior Lighting', image: 'impulse-lighting-interior-lighting-recessed-down-lighting.jpg', externalURL: 'https://impulselighting.com/product-category/interior/recessed-down-lighting/' },
  { id: 'p83', name: 'Architectural Downlights', brand: 'Impulse Lighting', category: 'Lighting & Controls', sub: 'Interior Lighting', image: 'impulse-lighting-interior-lighting-architectural-downlights.jpg', externalURL: 'https://impulselighting.com/product-category/interior/architectural-downlights/' },
  { id: 'p84', name: 'Architectural Lighting System', brand: 'Impulse Lighting', category: 'Lighting & Controls', sub: 'Interior Lighting', image: 'impulse-lighting-interior-lighting-architectural-lighting-system.jpg', externalURL: 'https://impulselighting.com/product-category/interior/architectural-lighting-system/' },
  { id: 'p85', name: 'Cove lighting', brand: 'Impulse Lighting', category: 'Lighting & Controls', sub: 'Interior Lighting', image: 'impulse-lighting-interior-lighting-cove-lighting.jpg', externalURL: 'https://impulselighting.com/product-category/interior/cove-lighting-interior/' },
  { id: 'p86', name: 'LED Track Lights', brand: 'Impulse Lighting', category: 'Lighting & Controls', sub: 'Interior Lighting', image: 'impulse-lighting-interior-lighting-led-track-lights.jpg', externalURL: 'https://impulselighting.com/product-category/interior/led-track-lights/' },
  { id: 'p87', name: 'Linear Fixtures / Continuous Run Linear Fixture', brand: 'Impulse Lighting', category: 'Lighting & Controls', sub: 'Interior Lighting', image: 'impulse-lighting-interior-lighting-linear-fixtures.jpg', externalURL: 'https://impulselighting.com/product-category/interior/linear-fixtures-continuous-run-linear-fixture/' },
  { id: 'p88', name: 'Trunking Linear Fixtures', brand: 'Impulse Lighting', category: 'Lighting & Controls', sub: 'Interior Lighting', image: 'impulse-lighting-interior-lighting-trunking-linear-fixtures.jpg', externalURL: 'https://impulselighting.com/product-category/trunking-linear-fixtures-in-indoor-lighting/' },
  { id: 'p89', name: 'Suspended Light Fixtures', brand: 'Impulse Lighting', category: 'Lighting & Controls', sub: 'Interior Lighting', image: 'impulse-lighting-interior-lighting-suspended-light-fixtures.jpg', externalURL: 'https://impulselighting.com/product-category/interior/suspended-light-fixtures/' },
  { id: 'p90', name: 'Surface Mount', brand: 'Impulse Lighting', category: 'Lighting & Controls', sub: 'Interior Lighting', image: 'impulse-lighting-interior-lighting-surface-mount.jpg', externalURL: 'https://impulselighting.com/product-category/interior/surface-mount/' },
  { id: 'p91', name: 'Surface Mount Disk lights', brand: 'Impulse Lighting', category: 'Lighting & Controls', sub: 'Interior Lighting', image: 'impulse-lighting-interior-lighting-surface-mount-disk-lights.jpg', externalURL: 'https://impulselighting.com/product-category/interior/surface-mount-disk-lights/' },
  { id: 'p92', name: 'Emergency Backup Kits', brand: 'Impulse Lighting', category: 'Lighting & Controls', sub: 'Interior Lighting', image: 'impulse-lighting-interior-lighting-emergency-backup-kits.jpg', externalURL: 'https://impulselighting.com/product-category/interior/emergency-backup-kits/' },
  { id: 'p93', name: 'High Bay Lights', brand: 'Impulse Lighting', category: 'Lighting & Controls', sub: 'Interior Lighting', image: 'impulse-lighting-interior-lighting-high-bay-lights.jpg', externalURL: 'https://impulselighting.com/product-category/interior/high-bay-lights/' },
  { id: 'p94', name: 'LED Panels', brand: 'Impulse Lighting', category: 'Lighting & Controls', sub: 'Interior Lighting', image: 'impulse-lighting-interior-lighting-led-panels.jpg', externalURL: 'https://impulselighting.com/product-category/interior/led-panels/' },
  { id: 'p95', name: 'Troffers', brand: 'Impulse Lighting', category: 'Lighting & Controls', sub: 'Interior Lighting', image: 'impulse-lighting-interior-lighting-troffers.jpg', externalURL: 'https://impulselighting.com/product-category/interior/troffers/' },
  { id: 'p96', name: 'Emergency/Exit Lights', brand: 'Impulse Lighting', category: 'Lighting & Controls', sub: 'Interior Lighting', image: 'impulse-lighting-interior-lighting-emergency.jpg', externalURL: 'https://impulselighting.com/product-category/interior/emergency-exit-lights-interior/' },
  { id: 'p97', name: 'Emergency Lighting Inverters', brand: 'Impulse Lighting', category: 'Lighting & Controls', sub: 'Interior Lighting', image: 'impulse-lighting-interior-lighting-emergency-lighting-inverters.jpg', externalURL: 'https://impulselighting.com/product-category/interior/emergency-lighting-inverters/' },
  { id: 'p98', name: 'Multiple Downlights', brand: 'Impulse Lighting', category: 'Lighting & Controls', sub: 'Interior Lighting', image: 'impulse-lighting-interior-lighting-multiple-downlights.jpg', externalURL: 'https://impulselighting.com/product-category/interior/multiple-downlights/' },
  { id: 'p99', name: 'LED Strip', brand: 'Impulse Lighting', category: 'Lighting & Controls', sub: 'Interior Lighting', image: 'impulse-lighting-interior-lighting-led-strip.jpg', externalURL: 'https://impulselighting.com/product-category/interior/led-strip-interior/' },
  { id: 'p100', name: 'Undercabinet', brand: 'Impulse Lighting', category: 'Lighting & Controls', sub: 'Interior Lighting', image: 'impulse-lighting-interior-lighting-undercabinet.jpg', externalURL: 'https://impulselighting.com/product-category/interior/undercabinet/' },
  { id: 'p101', name: 'Healthcare lighting', brand: 'Impulse Lighting', category: 'Lighting & Controls', sub: 'Interior Lighting', image: 'impulse-lighting-interior-lighting-healthcare-lighting.jpg', externalURL: 'https://impulselighting.com/product-category/interior/healthcare-lighting/' },
  { id: 'p102', name: 'Surface mount cylinder', brand: 'Impulse Lighting', category: 'Lighting & Controls', sub: 'Interior Lighting', image: 'impulse-lighting-interior-lighting-surface-mount-cylinder.jpg', externalURL: 'https://impulselighting.com/product-category/interior/surface-mount-cylinder/' },

  // Lighting & Controls - Impulse Lighting (Exterior)
  { id: 'p103', name: 'Architectural Area Lighting', brand: 'Impulse Lighting', category: 'Lighting & Controls', sub: 'Exterior Lighting', image: 'impulse-lighting-exterior-lighting-architectural-area-lighting.jpg', externalURL: 'https://impulselighting.com/product-category/exterior/architectural-area-lighting/' },
  { id: 'p104', name: 'Bollards', brand: 'Impulse Lighting', category: 'Lighting & Controls', sub: 'Exterior Lighting', image: 'impulse-lighting-exterior-lighting-bollards.jpg', externalURL: 'https://impulselighting.com/product-category/exterior/bollards/' },
  { id: 'p105', name: 'Canopy & Garage Lights', brand: 'Impulse Lighting', category: 'Lighting & Controls', sub: 'Exterior Lighting', image: 'impulse-lighting-exterior-lighting-canopy-garage-lights.jpg', externalURL: 'https://impulselighting.com/product-category/exterior/canopy-garage-lights/' },
  { id: 'p106', name: 'Cove lighting', brand: 'Impulse Lighting', category: 'Lighting & Controls', sub: 'Exterior Lighting', image: 'impulse-lighting-exterior-lighting-cove-lighting.jpg', externalURL: 'https://impulselighting.com/product-category/exterior/cove-lighting/' },
  { id: 'p107', name: 'Explosion proof', brand: 'Impulse Lighting', category: 'Lighting & Controls', sub: 'Exterior Lighting', image: 'impulse-lighting-exterior-lighting-explosion-proof.jpg', externalURL: 'https://impulselighting.com/product-category/exterior/explosion-proof/' },
  { id: 'p108', name: 'Emergency /Exit Lights', brand: 'Impulse Lighting', category: 'Lighting & Controls', sub: 'Exterior Lighting', image: 'impulse-lighting-exterior-lighting-exit-lights.jpg', externalURL: 'https://impulselighting.com/product-category/exterior/emergency-exit-lights/' },
  { id: 'p109', name: 'Flood Lights', brand: 'Impulse Lighting', category: 'Lighting & Controls', sub: 'Exterior Lighting', image: 'impulse-lighting-exterior-lighting-flood-lights.jpg', externalURL: 'https://impulselighting.com/product-category/exterior/flood-lights/' },
  { id: 'p110', name: 'In-Ground', brand: 'Impulse Lighting', category: 'Lighting & Controls', sub: 'Exterior Lighting', image: 'impulse-lighting-exterior-lighting-in-ground.jpg', externalURL: 'https://impulselighting.com/product-category/exterior/in-ground/' },
  { id: 'p111', name: 'Landscape Lighting', brand: 'Impulse Lighting', category: 'Lighting & Controls', sub: 'Exterior Lighting', image: 'impulse-lighting-exterior-lighting-landscape-lighting.jpg', externalURL: 'https://impulselighting.com/product-category/exterior/landscape-lighting/' },
  { id: 'p112', name: 'LED Strip', brand: 'Impulse Lighting', category: 'Lighting & Controls', sub: 'Exterior Lighting', image: 'impulse-lighting-exterior-lighting-led-strip.jpg', externalURL: 'https://impulselighting.com/product-category/exterior/led-strip/' },
  { id: 'p113', name: 'LED Flex Neon', brand: 'Impulse Lighting', category: 'Lighting & Controls', sub: 'Exterior Lighting', image: 'impulse-lighting-exterior-lighting-led-flex-neon.jpg', externalURL: 'https://impulselighting.com/product-category/exterior/flex-neon/' },
  { id: 'p114', name: 'Parking / Area Lighting', brand: 'Impulse Lighting', category: 'Lighting & Controls', sub: 'Exterior Lighting', image: 'impulse-lighting-exterior-lighting-parking-area-lighting.jpg', externalURL: 'https://impulselighting.com/product-category/exterior/parking-area-lighting/' },
  { id: 'p115', name: 'Poles & Accessories', brand: 'Impulse Lighting', category: 'Lighting & Controls', sub: 'Exterior Lighting', image: 'impulse-lighting-exterior-lighting-poles-accessories.jpg', externalURL: 'https://impulselighting.com/product-category/exterior/poles-accessories/' },
  { id: 'p116', name: 'Roadway Lighting', brand: 'Impulse Lighting', category: 'Lighting & Controls', sub: 'Exterior Lighting', image: 'impulse-lighting-exterior-lighting-roadway-lighting.jpg', externalURL: 'https://impulselighting.com/product-category/exterior/roadway-lighting/' },
  { id: 'p117', name: 'Sports Stadium Light', brand: 'Impulse Lighting', category: 'Lighting & Controls', sub: 'Exterior Lighting', image: 'impulse-lighting-exterior-lighting-sports-stadium-light.jpg', externalURL: 'https://impulselighting.com/product-category/exterior/sports-stadium-light/' },
  { id: 'p118', name: 'Step Lights', brand: 'Impulse Lighting', category: 'Lighting & Controls', sub: 'Exterior Lighting', image: 'impulse-lighting-exterior-lighting-step-lights.jpg', externalURL: 'https://impulselighting.com/product-category/exterior/step-lights-exterior/' },
  { id: 'p119', name: 'Vapor Tight', brand: 'Impulse Lighting', category: 'Lighting & Controls', sub: 'Exterior Lighting', image: 'impulse-lighting-exterior-lighting-vapor-tight.jpg', externalURL: 'https://impulselighting.com/product-category/exterior/vapor-tight/' },
  { id: 'p120', name: 'Wall Cylinder', brand: 'Impulse Lighting', category: 'Lighting & Controls', sub: 'Exterior Lighting', image: 'impulse-lighting-exterior-lighting-wall-cylinder.jpg', externalURL: 'https://impulselighting.com/product-category/exterior/step-lights/' },
  { id: 'p121', name: 'Surface Mount Cylinder / Square', brand: 'Impulse Lighting', category: 'Lighting & Controls', sub: 'Exterior Lighting', image: 'impulse-lighting-exterior-lighting-surface-mount-cylinder-square.jpg', externalURL: 'https://impulselighting.com/product-category/exterior/surface-mount-cylinder-2/' },
  { id: 'p122', name: 'Wall Packs', brand: 'Impulse Lighting', category: 'Lighting & Controls', sub: 'Exterior Lighting', image: 'impulse-lighting-exterior-lighting-wall-packs.jpg', externalURL: 'https://impulselighting.com/product-category/exterior/wall-packs/' },
  { id: 'p123', name: 'Wall Sconces', brand: 'Impulse Lighting', category: 'Lighting & Controls', sub: 'Exterior Lighting', image: 'impulse-lighting-exterior-lighting-wall-sconces.jpg', externalURL: 'https://impulselighting.com/product-category/exterior/wall-sconces/' },
  { id: 'p124', name: 'Wall Washers', brand: 'Impulse Lighting', category: 'Lighting & Controls', sub: 'Exterior Lighting', image: 'impulse-lighting-exterior-lighting-wall-washers.jpg', externalURL: 'https://impulselighting.com/product-category/exterior/wall-washers/' },
  { id: 'p125', name: 'Accent lighting', brand: 'Impulse Lighting', category: 'Lighting & Controls', sub: 'Exterior Lighting', image: 'impulse-lighting-exterior-lighting-accent-lighting.jpg', externalURL: 'https://impulselighting.com/product-category/exterior/accent-lighting/' },

  // Power & Energy - Z1Power
  { id: 'p126', name: 'LiFePO4 Batteries', brand: 'Z1Power', category: 'Power & Energy', sub: 'LiFePO4 Batteries', image: 'z1power-lifepo4-batteries.jpg', externalURL: 'https://www.z1power.com/collections/lifepo4-batteries' },
  { id: 'p127', name: 'Portable Power Batteries', brand: 'Z1Power', category: 'Power & Energy', sub: 'Portable Power Batteries', image: 'z1power-portable-power-batteries.jpg', externalURL: 'https://www.z1power.com/collections/portable-power-batteries' },
  { id: 'p128', name: 'Home Backup Batteries', brand: 'Z1Power', category: 'Power & Energy', sub: 'Home Backup Batteries', image: 'z1power-home-backup-batteries.jpg', externalURL: 'https://www.z1power.com/collections/home-backup-batteries' },
  { id: 'p129', name: 'Commercial Batteries', brand: 'Z1Power', category: 'Power & Energy', sub: 'Commercial Batteries', image: 'z1power-commercial-batteries.jpg', externalURL: 'https://www.z1power.com/collections/commercial-batteries' },

  // Power & Energy - EV Bolt
  { id: 'p130', name: 'AC Level II EV Chargers', brand: 'EV Bolt', category: 'Power & Energy', sub: 'EV Chargers', image: 'ev-bolt-ev-chargers-ac-level-ii-ev-chargers.png', externalURL: 'https://evbolt.com/accharger/' },
  { id: 'p131', name: 'DC Level III EV Chargers', brand: 'EV Bolt', category: 'Power & Energy', sub: 'EV Chargers', image: 'ev-bolt-ev-chargers-dc-level-iii-ev-chargers.jpg', externalURL: 'https://evbolt.com/#dccharger' },
  { id: 'p132', name: 'EV Accessories', brand: 'EV Bolt', category: 'Power & Energy', sub: 'EV Chargers', image: 'ev-bolt-ev-chargers-ev-accessories.png', externalURL: 'https://evbolt.com/accessories/' },

  // Security & Sign Trailers
  { id: 'p133', name: 'Security & Sign Trailers', brand: 'Z1Power', category: 'Security & Sign Trailers', sub: 'Security & Sign Trailers', image: 'z1power-security-sign-trailers.jpg', externalURL: 'https://www.z1power.com/collections/security-sign-trailers' },

  // Medical Equipment - Tri-Tech International (Monitoring & Diagnostics)
  { id: 'p134', name: 'Patient Monitors', brand: 'Tri-Tech International', category: 'Medical Equipment', sub: 'Monitoring & Diagnostics', image: 'tri-tech-international-monitoring-diagnostics-patient-monitors.jpg', externalURL: 'https://tritechintl.com/product-category/patient-monitors/' },
  { id: 'p135', name: 'ECG Machines', brand: 'Tri-Tech International', category: 'Medical Equipment', sub: 'Monitoring & Diagnostics', image: 'tri-tech-international-monitoring-diagnostics-ecg-machines.jpg', externalURL: 'https://tritechintl.com/product-category/ecg-machines/' },
  { id: 'p137', name: 'Blood Pressure Devices', brand: 'Tri-Tech International', category: 'Medical Equipment', sub: 'Monitoring & Diagnostics', image: 'tri-tech-international-monitoring-diagnostics-blood-pressure-devices.jpg', externalURL: 'https://tritechintl.com/product-category/blood-pressure-devices/' },
  { id: 'p138', name: 'Pulse Oximeters', brand: 'Tri-Tech International', category: 'Medical Equipment', sub: 'Monitoring & Diagnostics', image: 'tri-tech-international-monitoring-diagnostics-pulse-oximeters.jpg', externalURL: 'https://tritechintl.com/product-category/pulse-oximeters/' },
  { id: 'p139', name: 'Stethoscopes', brand: 'Tri-Tech International', category: 'Medical Equipment', sub: 'Monitoring & Diagnostics', image: 'tri-tech-international-monitoring-diagnostics-stethoscopes.jpg', externalURL: 'https://tritechintl.com/product-category/stethoscopes/' },

  // Medical Equipment - Tri-Tech International (Respiratory & Oxygen)
  { id: 'p141', name: 'Ventilators', brand: 'Tri-Tech International', category: 'Medical Equipment', sub: 'Respiratory & Oxygen', image: 'tri-tech-international-respiratory-oxygen-suction-machines.jpg', externalURL: 'https://tritechintl.com/product-category/ventilators/' },
  { id: 'p142', name: 'CPAP BiPAP', brand: 'Tri-Tech International', category: 'Medical Equipment', sub: 'Respiratory & Oxygen', image: 'tri-tech-international-respiratory-oxygen-cpap-bipap.jpg', externalURL: 'https://tritechintl.com/product-category/cpap-bipap/' },
  { id: 'p143', name: 'Oxygen Concentrators', brand: 'Tri-Tech International', category: 'Medical Equipment', sub: 'Respiratory & Oxygen', image: 'tri-tech-international-respiratory-oxygen-oxygen-concentrators.jpg', externalURL: 'https://tritechintl.com/product-category/oxygen-concentrators/' },
  { id: 'p144', name: 'Nebulizers', brand: 'Tri-Tech International', category: 'Medical Equipment', sub: 'Respiratory & Oxygen', image: 'tri-tech-international-respiratory-oxygen-nebulizers.jpg', externalURL: 'https://tritechintl.com/product-category/nebulizers/' },
  { id: 'p145', name: 'Suction Machines', brand: 'Tri-Tech International', category: 'Medical Equipment', sub: 'Respiratory & Oxygen', image: 'tri-tech-international-respiratory-oxygen-ventilators.jpg', externalURL: 'https://tritechintl.com/product-category/suction-machines/' },

  // Medical Equipment - Tri-Tech International (Emergency & Critical Care)
  { id: 'p146', name: 'Defibrillators', brand: 'Tri-Tech International', category: 'Medical Equipment', sub: 'Emergency & Critical Care', image: 'tri-tech-international-emergency-critical-care-defibrillators.jpg', externalURL: 'https://tritechintl.com/product-category/defibrillators/' },
  { id: 'p149', name: 'Electric Tourniquet', brand: 'Tri-Tech International', category: 'Medical Equipment', sub: 'Emergency & Critical Care', image: 'tri-tech-international-emergency-critical-care-electric-tourniquet.jpg', externalURL: 'https://tritechintl.com/product-category/electric-tourniqute/' },
  { id: 'p150', name: 'ETT Machine', brand: 'Tri-Tech International', category: 'Medical Equipment', sub: 'Emergency & Critical Care', externalURL: 'https://tritechintl.com/product-category/ett-machine/' },
  { id: 'p151', name: 'Infusion / Syringe Pumps', brand: 'Tri-Tech International', category: 'Medical Equipment', sub: 'Emergency & Critical Care', image: 'tri-tech-international-emergency-critical-care-infusion-syringe-pumps.jpg', externalURL: 'https://tritechintl.com/product-category/infusion-syringe-pumps/' },

  // Medical Equipment - Tri-Tech International (Surgical & Anesthesia)
  { id: 'p154', name: 'ENT', brand: 'Tri-Tech International', category: 'Medical Equipment', sub: 'Surgical & Anesthesia', image: 'tri-tech-international-surgical-anesthesia-ent.jpg', externalURL: 'https://tritechintl.com/product-category/ent/' },

  // Medical Equipment - Tri-Tech International (Maternal & Infant Care)
  { id: 'p155', name: 'Infant Incubators / Warmers', brand: 'Tri-Tech International', category: 'Medical Equipment', sub: 'Maternal & Infant Care', image: 'tri-tech-international-maternal-infant care-infant-incubators-warmers.jpg', externalURL: 'https://tritechintl.com/product-category/infant-incubators-warmers/' },
  { id: 'p156', name: 'Fetal Monitors & Dopplers', brand: 'Tri-Tech International', category: 'Medical Equipment', sub: 'Maternal & Infant Care', image: 'tri-tech-international-maternal-infant care-fetal-monitors-dopplers.jpg', externalURL: 'https://tritechintl.com/product-category/fetal-monitors-dopplers/' },

  // Medical Equipment - Tri-Tech International (Furniture & Patient Comfort)
  { id: 'p157', name: 'Hospital Furniture', brand: 'Tri-Tech International', category: 'Medical Equipment', sub: 'Furniture & Patient Comfort', image: 'tri-tech-international-furniture-patient-comfort-air-mattress.jpg', externalURL: 'https://tritechintl.com/product-category/hospital-furniture/' },
  { id: 'p158', name: 'Air Mattress', brand: 'Tri-Tech International', category: 'Medical Equipment', sub: 'Furniture & Patient Comfort', image: 'tri-tech-international-furniture-patient-comfort-hospital-furniture.jpg', externalURL: 'https://tritechintl.com/product-category/air-mattress/' },

  // Big Chief Solar & Battery
  { id: 'p160', name: 'Solar & Battery Solutions', brand: 'Big Chief Solar & Battery', category: 'Power & Energy', sub: 'Commercial Batteries', image: 'big-chief-solar-battery.jpg', externalURL: 'https://www.facebook.com/BigChiefSolar/' },
];

export function filterProducts(
  products: Product[],
  searchQuery: string,
  selectedSubs: string[],
  selectedBrands: string[],
  category?: string
) {
  return products.filter((product) => {
    if (category && product.category !== category) return false;

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const searchText = `${product.name} ${product.brand} ${product.sub} ${product.category}`.toLowerCase();
      if (!searchText.includes(query)) return false;
    }

    if (selectedSubs.length > 0 && !selectedSubs.includes(product.sub)) return false;
    if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) return false;

    return true;
  });
}

export function groupProductsBySub(products: Product[], category: string) {
  const cat = CATEGORIES.find((c) => c.name === category);
  if (!cat) return [];

  return cat.subs
    .map((sub) => ({
      sub,
      items: products.filter((p) => p.sub === sub),
      count: products.filter((p) => p.sub === sub).length,
    }))
    .filter((g) => g.items.length > 0);
}

export function getCategoryDescription(category: string): string {
  const descriptions: Record<string, string> = {
    'Lighting & Controls': 'Complete lighting solutions and control systems from leading brands – interior, exterior, decorative, and mirrors.',
    'Power & Energy': 'Batteries, backup systems, and EV charging infrastructure from Z1Power and EV Bolt – staged in Costa Mesa and quoted as a single order.',
    'Security & Sign Trailers': 'Mobile surveillance, message boards and security trailers – available for immediate deployment.',
    'Medical Equipment': 'Hospital-grade monitoring, diagnostic, respiratory, and surgical equipment from Tri-Tech International – certified and stocked.',
  };
  return descriptions[category] || '';
}
