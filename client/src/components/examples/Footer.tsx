import Footer from '../Footer';

export default function FooterExample() {
  const handleLinkClick = (type: 'scroll' | 'modal', target: string) => {
    console.log(`Footer link clicked - Type: ${type}, Target: ${target}`);
    if (type === 'scroll') {
      alert(`Would scroll to: ${target}`);
    } else {
      alert(`Would open modal for: ${target}`);
    }
  };

  return <Footer onLinkClick={handleLinkClick} />;
}
