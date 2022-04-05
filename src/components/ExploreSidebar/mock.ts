export default [
  {
    title: 'Price',
    type: 'checkbox',
    name: 'price',
    inputs: [
      { label: 'Under $50', name: 'under-50' },
      { label: 'Under $100', name: 'under-100' },
      { label: 'Under $150', name: 'under-150' },
      { label: 'Under $200', name: 'under-200' },
      { label: 'FREE', name: 'free' },
      { label: 'Discounted', name: 'discounted' }
    ]
  },
  {
    title: 'Sort By',
    type: 'radio',
    name: 'sortBy',
    inputs: [
      { label: 'High to low', name: 'high-to-low' },
      { label: 'Low to high', name: 'low-to-high' }
    ]
  },
  {
    title: 'Platforms',
    type: 'checkbox',
    name: 'platforms',
    inputs: [
      { label: 'Windows', name: 'windows' },
      { label: 'Mac', name: 'mac' },
      { label: 'Linux', name: 'linux' }
    ]
  },
  {
    title: 'Genre',
    type: 'checkbox',
    name: 'genre',
    inputs: [
      { label: 'Action', name: 'action' },
      { label: 'Adventure', name: 'adventure' },
      { label: 'FPS', name: 'fps' },
      { label: 'MMORPG', name: 'mmorpg' },
      { label: 'Indie', name: 'indie' },
      { label: 'Shooters', name: 'shooters' },
      { label: 'Simulation', name: 'simulation' }
    ]
  }
]
