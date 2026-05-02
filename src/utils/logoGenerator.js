const logoOptions = [
  { text: 'A', color: '#FF6B6B', name: 'Alpha' },
  { text: 'B', color: '#4ECDC4', name: 'Beta' },
  { text: 'C', color: '#45B7D1', name: 'Gamma' },
  { text: 'D', color: '#96CEB4', name: 'Delta' },
  { text: 'E', color: '#FFEAA7', name: 'Epsilon' },
  { text: 'F', color: '#DDA0DD', name: 'Zeta' },
  { text: 'G', color: '#98D8C8', name: 'Eta' },
  { text: 'H', color: '#F7DC6F', name: 'Theta' },
  { text: 'I', color: '#BB8FCE', name: 'Iota' },
  { text: 'J', color: '#85C1E9', name: 'Kappa' },
  { text: '★', color: '#FF8A80', name: 'Star' },
  { text: '♦', color: '#80CBC4', name: 'Diamond' },
  { text: '●', color: '#A5D6A7', name: 'Circle' },
  { text: '▲', color: '#FFCC02', name: 'Triangle' },
  { text: '■', color: '#CE93D8', name: 'Square' }
];

export const getRandomLogo = () => {
  const randomIndex = Math.floor(Math.random() * logoOptions.length);
  return logoOptions[randomIndex];
};

export const getAllLogos = () => {
  return [...logoOptions];
};