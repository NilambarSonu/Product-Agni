# Agni Soil Scanner - Design Guidelines

## Design Vision
Ultra-clean, futuristic, tactile tech aesthetic with hyper-realistic 3D elements. Emphasize realism through material shaders, subtle particle/data flow animations, and polished micro-interactions. Tone: confident, scientific, farmer-friendly — "lab-grade but for the field".

## Color Palette (Futuristic & High-Contrast)
- **Primary Background (Graphite):** #0B0F1A (almost-black navy)
- **Primary Accent (Electric Cyan/Teal):** #00F0FF
- **Secondary Accent (Neon Magenta):** #FF2D9C
- **Gradient Highlight:** linear-gradient(90deg, #00F0FF 0%, #6DE8FF 45%, #FF2D9C 100%)
- **Metallic Mid Tone (Steel):** #2B3240
- **Soft Surface (Glass/Plate):** rgba(255,255,255,0.03) for cards
- **CTA (Energetic):** #00E6A8 (hover: #00FFC2)
- **Text Primary:** #E6F0FF (off-white for readability)
- **Text Muted:** #9AA7B2

## Typography
- **Headlines:** Inter or Manrope, weight 700–900, large letter spacing for hero
- **Body:** Inter / Source Sans Pro, line-height 1.6
- Use variable fonts where available

## Layout & Sections (Single Page)
1. **Hero** - Center 3D model, headline, two CTAs, benefit bullets
2. **Problem** - Three card highlights with hover animations
3. **Solution (Agni)** - Stacked cards describing sensor suite + calibration + Megha integration
4. **How It Works** - Animated 4-step horizontal timeline (Deploy → Capture → Analyze → Act)
5. **Live Demo** - Interactive 3D + dashboard + heatmap with sample data
6. **Specs & Accuracy** - Table with sensor specs and accuracy metrics
7. **Use Cases & ROI** - Short bullets, CTA to download datasheet
8. **Integrations** - Icons for ISOBUS, API, mobile app, CSV export
9. **CTA Strip** - Full-width gradient with form (email + farm area + request type)
10. **Footer** - Legal, privacy, contact

## Hero Section (Exact Copy)
- **Headline:** "Agni — Laboratory-Grade Soil Intelligence, Field-Ready"
- **Subhead:** "One probe. Meter-by-meter soil data. AI recommendations you can act on."
- **Primary CTA:** "Request Demo"
- **Secondary CTA:** "See Live Demo"
- **Microcopy:** "Meter-by-meter soil intelligence. Field-ready, lab-accurate insights — built by Mitti-AI."

## Key Design Elements

### 3D Device Model
- Draggable rotation with slow auto-rotate
- PBR metallic shader with soft rim lights (cyan + magenta)
- Hover tooltips on sensor areas (pH probe, NIR sensor, EC sensor)
- Particle trails from probe → cloud → dashboard using glow sprites

### Interactive Components
- **Heatmap Demo:** Timeline slider animating soil moisture changes with 12-20 sample data points
- **Charts:** Animated line/area charts with hover inspector cards showing actionable tips ("Zone A: apply 12% less N")
- **Buttons:** Glassy neumorphic style with cyan glow on hover, pressed state with spring physics
- **Cards:** Soft glass cards with blurred background (backdrop-filter) and faint neon edges

### Animations & Micro-Interactions
- Scroll-triggered reveals and parallax for soil layers (surface, subsoil, bedrock at different speeds)
- Device → Data Flow: particles moving from probe into cloud/dashboard
- Icon morphs with 40-120ms delays and spring physics
- Respect prefers-reduced-motion: disable auto-rotate/large motions

## Content Micro-Copy
- **Problem:** "Most decisions on farms happen blind — Agni makes the soil speak."
- **Features:** "Real-time moisture (%) · pH & nutrients · Geolocated variability maps · VM recommendations"
- **Trust:** "Developed for Indian soils — field-calibrated, rugged, and ready."

## Accessibility Requirements
- All interactive elements keyboard accessible with ARIA labels
- WCAG AA contrast compliance
- 3D model fallback to static hero image on low-power devices
- Lazy load GLB/maps with proper loading states

## Images
- **Hero 3D Model:** agni-device.glb - rotatable soil scanner device with metallic finish
- **Sensor Visualizations:** Lottie animations for data-flow.json, sensor-pulse.json, map-blob.json
- **Fallback Image:** Static hero image of Agni device for low-power devices

## Visual Treatment
- Tactile tech feel with realistic material shaders
- Soft particle systems for data flow visualization
- Glass morphism with cyan/magenta edge lighting
- Seamless first impression: hero + 3D + animated data flow visible above fold on desktop