import Image from "next/image";

export const metadata = {
  title: "Products",
};

export async function getData() {
  const res = await fetch("https://dummyjson.com/products?limit=12");
  return res.json();
}

export default async function Products() {
  const data = await getData();

  return (
    <>
      <h1>Products Page</h1>
      <div>
        {data.products.map((item) => (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <Image
              src={item.thumbnail}
              width={300}
              height={0}
              alt={item.title}
            />
          </div>
        ))}
      </div>
    </>
  );
}
