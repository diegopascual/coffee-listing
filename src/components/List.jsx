import { Card } from '.';

export const List = ({ products }) => {
  return (
    <section className="grid justify-center gap-8">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </section>
  );
};
