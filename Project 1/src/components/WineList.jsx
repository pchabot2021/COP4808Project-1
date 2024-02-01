// src/components/WineList.jsx
import WineCard from './WineCard.jsx';

const wineData = [
  {
    varietal: 'Chardonnay',
    description: 'A popular white wine that is often oak-aged.',
    imageUrl: '/Chardonnay.jpg',
    infoUrl: 'https://www.foodandwine.com/wine/chardonnay-wine-guide'
  },
  {
    varietal: 'Merlot',
    description: 'Known for its soft, sensual texture and approachable style.',
    imageUrl: '/Merlot.jpg',
    infoUrl: 'https://www.wineenthusiast.com/basics/everything-you-need-to-know-about-merlot/'
  },
  {
    varietal: 'Cabernet Sauvignon',
    description: 'Full-bodied red wine with dark fruit flavors and savory tastes.',
    imageUrl: '/Cab.jpg',
    infoUrl: 'https://winefolly.com/grapes/cabernet-sauvignon/'
  },
  {
    varietal: 'Pinot Noir',
    description: 'It is a red wine grape variety of the species Vitis vinifera.',
    imageUrl: '/Pinot.jpg',
    infoUrl: 'https://www.foodandwine.com/wine/red-wine/pinot-noir/pinot-noir-wine-guide'
  },
  {
    varietal: 'Sauvignon Blanc',
    description: 'A green-skinned grape variety that originates from the Bordeaux region of France.',
    imageUrl: '/Blanc.jpg',
    infoUrl: 'https://www.foodandwine.com/wine/white-wine/sauvignon-blanc-wine-guide'
  },
  {
    varietal: 'Syrah',
    description: 'Also known as Shiraz, is a dark-skinned grape variety grown throughout the world.',
    imageUrl: '/Syrah.jpg',
    infoUrl: 'https://www.foodandwine.com/wine/red-wine/syrah-wine-guide'
  },
  {
    varietal: 'Zinfandel',
    description: 'A variety of red grape planted in over 10 percent of California vineyards.',
    imageUrl: '/Zinfan.jpg',
    infoUrl: 'https://www.foodandwine.com/wine/red-wine/zinfandel-wine-guide'
  },
  {
    varietal: 'Malbec',
    description: 'A purple grape variety used in making red wine.',
    imageUrl: '/Malbec.jpg',
    infoUrl: 'https://usualwines.com/blogs/knowledge-base/malbec-wine'
  },
  {
    varietal: 'Riesling',
    description: 'A white grape variety which originated in the Rhine region.',
    imageUrl: '/Riesling.jpg',
    infoUrl: 'https://www.foodandwine.com/wine/white-wine/riesling-wine-guide'
  },
  {
    varietal: 'Grenache',
    description: 'One of the most widely planted red wine grape varieties in the world.',
    imageUrl: '/Grenache.jpg',
    infoUrl: 'https://www.foodandwine.com/wine/grenache-wine-everything-to-know'
  }
];

const WineList = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {wineData.map((wine, index) => (
        <WineCard key={index} {...wine} />
      ))}
    </div>
  );
};

export default WineList;
