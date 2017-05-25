export const pattern = {
  darkPink: '#EA526F',
  lightCarminePink: '#E76B74',
  catawba: '#773344',
  pastelPink: '#E3B5A4',
  alabaster: '#F5E9E2',
  upMaroon: '#800E13',
  topaz: '#97393D',
  oldRose: '#B97B7E',
};

const __color = {
  base: pattern.upMaroon,
  baseTranslucent: 'rgba(128, 14, 19, 0.7)',
  textOverBase: pattern.alabaster,
  backgroundOverBase: pattern.alabaster,
  borderLight: pattern.oldRose,
  borderDark: pattern.upMaroon,
}

export const colors = {
  //background: '#1F0808',
  background: __color.base,
  backgroundTranslucent: __color.baseTranslucent,
  backgroundLight: __color.backgroundOverBase,
  buttonBackground: __color.backgroundOverBase,
  buttonText: __color.base,
  border: __color.base,
  headerText: __color.textOverBase,
  sectionTitle: __color.base,
  sectionHeaderText: __color.base,
  borderDark: __color.borderDark,
  borderLight: __color.borderLight,

  clear: 'rgba(0,0,0,0)',
  facebook: '#3b5998',
  transparent: 'rgba(0,0,0,0)',
  translucent: 'rgba(0,0,0,0.7)',
  silver: '#F7F7F7',
  steel: '#CCCCCC',
  error: 'rgba(200, 0, 0, 0.8)',
  ricePaper: 'rgba(255,255,255, 0.75)',
  frost: '#D8D8D8',
  cloud: 'rgba(200,200,200, 0.35)',
  windowTint: 'rgba(0, 0, 0, 0.4)',
  panther: '#161616',
  charcoal: '#595959',
  coal: '#2d2d2d',
  bloodOrange: '#fb5f26',
  snow: 'white',
  ember: 'rgba(164, 0, 48, 0.5)',
  fire: '#e73536',
  clay: '#FF8A8A',
  drawer: 'rgba(30, 30, 29, 0.95)',
  eggplant: '#251a34',
  banner: '#5F3E63',
}

export default colors
