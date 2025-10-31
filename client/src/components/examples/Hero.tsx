import Hero from '../Hero';

export default function HeroExample() {
  return (
    <Hero 
      onRequestDemo={() => console.log('Request demo clicked')}
      onSeeLiveDemo={() => console.log('See live demo clicked')}
    />
  );
}
