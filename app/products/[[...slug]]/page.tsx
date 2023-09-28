import React from "react";

interface ProductProps {
  params: { slug: string[] };
  searchParams: { sortOrder: string };
}

const ProductPage = ({
  params: { slug },
  searchParams: { sortOrder },
}: ProductProps) => {
  return (
    <div>
      ProductPage {slug} : {sortOrder}
    </div>
  );
};

export default ProductPage;
