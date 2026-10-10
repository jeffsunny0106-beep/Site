# NKAKIKAA TOURS: static website
Concept: premium adventure look (pine green, ember orange, sand) built around two services: 1) Mountain Hiking & Trekking, 2) Safari / Adventure Tracking.
Structure: index, about, trekking, routes, tracking, preparation, guides, gallery, contact + routes/*.html, css/, js/, images/.
Company info: edit ONLY js/config.js (name, phone, WhatsApp, email, form endpoint).
Images: images/ holds the supplied photos (JPG). Replace files keeping the names.
Tracking: prototype with sample data in js/tracking.js. To go live: GPS device/phone -> API -> database -> REST/WebSocket -> replace getTrekStatus(); swap the route drawing for Leaflet/Mapbox.
Caching: long Cache-Control for css/js/images, short for HTML.
