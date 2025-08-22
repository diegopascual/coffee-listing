import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Button, List } from './components';

function App() {
  const [tab, setTab] = useState(1);
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
    <main className="relative bg-black-soft px-5 py-20 font-sans text-gray-muted">
      <section className="space-y-5 rounded-xl bg-charcoal p-10">
        <div className="space-y-2">
          <h2 className="text-center text-3xl font-bold text-cream">
            Our Collection
          </h2>
          <p className="text-center text-sm font-medium text-gray-muted">
            Introducing our Coffee Collection, a selection of unique coffees
            from different roast types and origins, expertly roasted in small
            batches and shipped fresh weekly.
          </p>
        </div>
        <nav className="flex items-center justify-center gap-3">
          <Button isActive={tab === 1} onClick={() => setTab(1)}>
            All Products
          </Button>
          <Button isActive={tab === 2} onClick={() => setTab(2)}>
            Available Now
          </Button>
        </nav>
        {isLoading ? (
          <p className="text-center">Loading</p>
        ) : (
          <List
            products={
              tab === 1 ? data : data.filter((product) => product.available)
            }
          />
        )}
      </section>
    </main>
  );
}

export default App;
