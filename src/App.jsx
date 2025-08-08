import { useQuery } from '@tanstack/react-query';
import { getVoteText } from '@/utils/helpers';
import Rated from '@/assets/Star_fill.svg';
import NoRated from '@/assets/Star.svg';

function App() {
  const { data, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const response = await fetch(
        'https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json',
      );

      return await response.json();
    },
  });

  return (
    <main>
      <h2>Our Collection</h2>
      <p>
        Introducing our Coffee Collection, a selection of unique coffees from
        different roast types and origins, expertly roasted in small batches and
        shipped fresh weekly.
      </p>
      <nav>
        <button type="button">All Products</button>
        <button type="button">Available Now</button>
        <section>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            data.map((product) => (
              <article key={product.id}>
                <div>
                  {product.popular && <span>Popular</span>}
                  <img src={product.image} alt={product.name} />
                </div>
                <div>
                  <p>{product.name}</p>
                  <p>{product.price}</p>
                </div>
                <div>
                  {product.rating ? (
                    <div>
                      <img src={Rated} alt="" aria-hidden="true" />
                      <span>{product.rating}</span>
                      <span>({getVoteText(product.votes)})</span>
                    </div>
                  ) : (
                    <div>
                      <img src={NoRated} alt="" aria-hidden="true" />
                      <span>No rating</span>
                    </div>
                  )}
                  {!product.available && <p>Sold out</p>}
                </div>
              </article>
            ))
          )}
        </section>
      </nav>
    </main>
  );
}

export default App;
