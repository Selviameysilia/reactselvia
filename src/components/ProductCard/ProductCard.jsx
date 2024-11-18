import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import PropTypes from "prop-types";
import formatToIDRCurrency from "../../utils/formatToIDRCurrency";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/products/${product.slug}` ?? ''}
      className="flex flex-col max-w-[370px] flex-wrap p-[16px] bg-[#081116] hover:ring-opacity-40 active:ring-5 active:ring-[#6247eb] hover:ring-4 active:ring-2 active:ring-opacity-90"
      style={{
        backgroundImage:
          "url('https://png.pngtree.com/background/20210715/original/pngtree-pink-background-pink-texture-plush-picture-image_1275137.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <img
        src={product?.imageUrl ?? ''}
        alt={product?.name ?? 'No Title'}
        className="block max-h-[300px] mb-4 object-cover"
      />
      <div className="flex flex-col gap-2">
        <h4
          className="font-bold text-[20px]"
          style={{ color: "#d63384" }}
        >
          {product?.name ?? 'No Title'}
        </h4>
        <span
          className="block font-bold text-[14px]"
          style={{ color: "#d63384" }}
        >
          {product?.category ?? "Uncategorized"}
        </span>
        <span
          className="block font-bold text-[20px]"
          style={{ color: "#d63384" }}
        >
          {product?.price > 0 ? formatToIDRCurrency(product.price) : 'Not For Sale'}
        </span>
        <div>
          {product.stock <= 0 ? (
            <p
              className="text-xl font-bold text-center text-red-600"
            >
              Out of Stock
            </p>
          ) : product.stock <= 25 && product.stock !== 0 ? (
            <>
              <p
                className="text-xl font-bold text-center text-yellow-600"
              >
                Almost Sold Out
              </p>
              <Button
                type="button"
                className="inline-flex items-center justify-center gap-2 p-4 bg-purple-700 text-center hover:bg-[#5969cf] text-white active:bg-[#4956ab]"
              >
                <FontAwesomeIcon icon={faCartShopping} className="mb-0" />
                <span>Add to cart</span>
              </Button>
            </>
          ) : (
            <>
              <Button
                type="button"
                className="inline-flex items-center justify-center gap-2 p-4 bg-purple-700 text-center hover:bg-[#5969cf] text-white active:bg-[#4956ab] mt-[28px]"
              >
                <FontAwesomeIcon icon={faCartShopping} className="mb-0" />
                <span>Add to cart</span>
              </Button>
            </>
          )}
        </div>
      </div>
    </Link>
  );
}

ProductCard.prototypes = {
  product: PropTypes.object.isRequired,
};
