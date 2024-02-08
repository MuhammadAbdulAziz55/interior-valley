

export default function SearchResult() {
  return (
    <div
    className={
      // className +
      // " " +
      "absolute left-1/2 top-full z-50 mt-1 max-h-[80vh] w-[95%]  -translate-x-1/2  overflow-auto rounded bg-white text-black"
    }
  >
    {/* {isLoading && <p className="p-6 text-center">Loading...</p>} */}
    {/* <ul className="w-full">
      {data &&
        data.products.length > 0 &&
        data.products.map((product: Product) => {
          return (
            <li
              key={product._id}
              className="px-4 h-24 search-results-item hover:bg-slate-100"
            >
              <button
                className="w-full h-full text-left"
                onClick={handleClick.bind(null, product)}
              >
                <div className="flex gap-3 justify-between items-center h-full">
                  <div className="w-3/4">
                    <p className="overflow-hidden text-base capitalize whitespace-nowrap text-ellipsis">
                      {product.name}
                    </p>
                    <p>
                      <span> &#2547; </span>
                      <span> {product.price} tk </span>
                    </p>
                  </div>
                  <div className="relative w-1/4 h-full bg-white">
                    <Image
                      src={product?.images ? product.images[0] : "#"}
                      fill
                      alt={product.name ? product.name : "image"}
                      className="object-contain"
                    />
                  </div>
                </div>
              </button>
            </li>
          );
        })}
    </ul> */}
  </div>
  )
}
