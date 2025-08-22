import { getVoteText } from '@/utils/helpers';
import Rated from '@/assets/Star_fill.svg';
import NoRated from '@/assets/Star.svg';

export const Card = ({ product }) => {
  return (
    <article className="max-w-[260px] space-y-2">
      <div className="relative">
        {product.popular && (
          <span className="absolute top-2 left-2 rounded-full bg-gold px-3 py-1 text-2xs font-bold text-coffee">
            Popular
          </span>
        )}
        <img src={product.image} alt={product.name} className="rounded-xl" />
      </div>
      <div className="flex items-center justify-between font-bold">
        <p className="text-base text-cream">{product.name}</p>
        <p className="rounded bg-mint px-2 py-1 text-xs text-charcoal">
          {product.price}
        </p>
      </div>
      <div className="flex items-center justify-between text-sm font-bold text-gray-muted">
        {product.rating ? (
          <div className="flex items-center gap-1">
            <img src={Rated} alt="" aria-hidden="true" />
            <span className="text-cream">{product.rating}</span>
            <span>({getVoteText(product.votes)})</span>
          </div>
        ) : (
          <div className="flex items-center gap-1">
            <img src={NoRated} alt="" aria-hidden="true" />
            <span>No rating</span>
          </div>
        )}
        {!product.available && <p className="text-coral">Sold out</p>}
      </div>
    </article>
  );
};
