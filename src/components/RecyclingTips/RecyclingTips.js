import './RecyclingTips.css';

const RecyclingTips = () => (
  <section className="recycling-tips-container">
    <h1 className="what-to-recycle">What To Recycle</h1>
    <p className="recycle-facts">
      There are few materials that cannot be recycled. The most common
      recyclables include paper, batteries, plastics, and glass.
    </p>
    <div className="what-to-recycle-styling">
      <div className="recycle-item-styling">
        <p className="recycle-item">Paper</p>
        <p className="recycle-facts">
          The paper should never be wet, sticky or mixed with other types of
          materials. Examples would be sticky notes, bubble wrap mailers, or
          envelopes with a clear plastic window. Used coffee cups are also a
          no-no. Newspapers, mail and magazines, office paper, and notebook
          paper get the recycle bin green light.
        </p>
        <p className="recycle-item">Cardboard</p>
        <p className="recycle-facts">
          Clean moving, shipping and food boxes (cereal, crackers, cookies,
          etc.), as well as juice and milk containers, are recyclable as long as
          they’re rinsed out. The non-greasy side of a pizza box is okay too.
          Just tear off the dirty side, throw it away and put the clean side in
          the recycle bin.{' '}
        </p>
        <p className="recycle-item">Plastic</p>
        <p className="recycle-facts">
          Always empty, clean and dry! No food residue of any kind will do. With
          plastic try the “poke test.” If you can press your finger through the
          plastic it shouldn’t go in the recycling bin. That includes sandwich
          bags, plastic wrap, and plastic grocery bags. Grocery store bags can
          usually be brought back to the store for recycling.
        </p>
      </div>
      <div className="recycle-item-styling">
        <p className="recycle-item">Glass</p>
        <p className="recycle-facts">
          Never put broken glass in the recycling bin. Whether it’s broken
          window glass or a broken beer bottle, just don’t do it. It can clog
          machinery and be dangerous for workers handling the recyclables.
        </p>
        <p className="recycle-item">Metals</p>
        <p className="recycle-facts">
          Soda cans, as well as soup, tuna, and bean cans, are recyclable.
          Again- just make sure they’re empty, clean and dry! Give them a rinse
          and tip them over to drain before tossing in the recycle bin. Clean
          aluminum foil that isn’t contaminated with food is also acceptable.
          Never include aluminum foil with food stuck to it, bottle caps, or
          soda can tabs (on their own) or razor blades.
        </p>
        <p className="recycle-item">Batteries</p>
        <p className="recycle-facts">
          Determine what type of battery you have and use our map to find a
          recycling location near you.
        </p>
        <p className="recycle-item">Electronics</p>
        <p className="recycle-facts">
          E-waste includes consumer electronics including: laptops, mobile
          phones, and TVs. These products can contain toxic substances, so
          disposing of them properly is even more important for the planet. Use
          our map to find a recycling location near you.
        </p>
      </div>
    </div>
    <div className="tips-for-recycling-styling">
      <h1 className="tips-for-recycling">Tips for Recycling</h1>
      <p className="recycle-tip">
        • Make sure it’s clean! One single dirty product can contaminate an
        entire bale. It can ultimately cause recyclable items to get redirected
        into a landfill.
      </p>
      <p className="recycle-tip">
        • Flatten cardboard. This will save space in your bin and make room for
        more recycling.
      </p>
      <p className="recycle-tip">
        • Look for products made out of recycled materials when you shop.
      </p>
      <p className="recycle-tip">
        • Before you recycle, think about reducing your waste and re-using items
        in a new way.
      </p>
      <p className="recycle-tip">
        • Local artists and schools might be able to use your materials for
        their work and classes.
      </p>
      <p className="recycle-tip">
        • Keep Things Loose! Don’t Ever Bag Recyclables.
      </p>
      <p className="recycle-tip">
        • No single-use utensils, paper plates, napkins, or paper towels.
      </p>
      <p className="recycle-tip">
        • No plastic sandwich bags, plastic wrap, or plastic grocery bags.
      </p>
    </div>
    <div></div>
  </section>
);

export default RecyclingTips;
