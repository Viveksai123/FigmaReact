import React, { useState } from "react";

const ProductCategories = () => {
  // Data for the product categories
 
const categories = [
    { name: "Living Room", image: "https://s3-alpha-sig.figma.com/img/aa1f/8a3d/faaa11bfc3a4ccd718ea84d5cd6901b7?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dwYIKiKMz-lqhLGiVoq0A7PeipAVL~rJZTt8H0XvxIbhCKUZSu71NvGMJ3ertSbNcHFbhqGYn7P8SaoqulQ44iYP9HPQgJS8UEtgZwISkIaVi0iXNTymhsAaxSUPSYiKqxJMiHYn~4LQRnCyzmqPxxJSNg8IyU5mP0~i7GEmxzNmf-Rg8fHZdBC6o~nWqvOJ0F2IOcLNLvfpsVvZqF7xevN2oHgHwFaouRB19blKRigaGIv0vnlFoYuaf3hfxbGWwRswmfA7t~sFN80OeT6ssqRd8YVMnY1EJsUowVl6r8D8JdY25opXhEgavYS4OCcUg9I6w0Jxm-Z44Fi-1JZ3mg__" },
    { name: "Dining", image: "https://s3-alpha-sig.figma.com/img/12d2/86ea/2d12885878ba88297fdcf20289e5a504?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Hfnbhyv5joa2oFJldumvp4LzR1NhjTJHu8wYQ2htJ4NoeoJqUHAm0To1QZyENincchq2DCWJNa22w5T-sELBwvYUgyVpaf9HExxWWCWCcoclybKgG1lKefGpZe7t1MVCHB1l6Th5wpS8wjoYHaY~SLyE9-wyIsK6DbapR8DVvVf8IqJTRoTqwk7CK43jI4DDveFNLYKHbegAspKJVB8Dsvw3ybK8WQAk~QMR-NQw2xHy4HujFmYdqWlmO0NQ6o~VKNBQc667al0w~zcGb4vEIl8SDlihEnDbjZ-Nfe9A0Vd8fCLo1Zahg77NrFq0k2GCIR3d980mvexKtMCkDRsUnA__" },
    { name: "Bedroom", image: "https://s3-alpha-sig.figma.com/img/5c86/592a/4a3c8e77162f27fec0db0c7219076675?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nvPyt4h3cr92TIiaKNSQ9VZLEGo31jpuBofyaTNfRfw5nod7M-4jdQnQcCCLxLDSBlmlpbUYeVQ60N4pTp-izXHNFpQXYtqERxD~2r4DMpujSogThiXj0bVUSFaxiPw0cDLRHb9NUTDPkXxXTvczwXy79GLgGz01uegBNEFlbLoHveK~zIEyDpWdUVR9i3Rn31zjHmuXT-Pba7id2IrMgdWF~34nDVpbykEALCLtfMGA4UWj8EHJcfoc-j4ILP8Of2jV1KDa8uRN-aOvzA8t20XGAHpWJNhZU4m09NtkaXq9MlzRj5Lkm~ZJW21OIvp96VxUY76TlD2XRxo930KFwg__" },
    { name: "Office", image: "https://s3-alpha-sig.figma.com/img/082c/1d34/a43c37ca8ef2f5c5ca7d99d9cdfd3e2b?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VrfFpnv8eQJb4QIY28NMjtKvznBYkSBWm2vi4KCfzSHA97AKsVidAv7AjiVshmnrDXhxzKeLbrMpxgacAhTcuvTZPXlk8mpgrCacFlcrkva48AZ7X8YBx5sn1HcBili-1czVuM4mBucCTTiJgzrcXCaBwU96tmjANGiFAD1ZVp6Hwv9f9-ZUDiPfb6l7R7eI8DZhMsdb~fy3xaHgF6EX8ZmLId8tD9FSH3GjHHT3cY5dXVXtJb8PxtaM8QWvIk2rK7I4vbXQq7sP7dUNlXCZO4xhhuVla92a5Gw7JsVtb1GngXYDnsfnY8D9mRQbpGGAoesJhN7zW~5uk9TatIHxXA__" },
    { name: "Storage", image: "https://s3-alpha-sig.figma.com/img/19c4/8116/73b5e7682d48f29e1e0bfa2aba30eb89?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GKBFSwz~LiSpI~0VBG5D2idn07-TXoSAm5qq0qf861JyS8wucpyqa5zdRChYtgoT~0J98sfU7NAaJUvVT~Ry4-YP7EOJPFLwmgGVI551e~V-nz6amAutpyPDT6iPOSkbnarqNYWRPD-OgaXGQjid-0r~r2DDGuSYzMZBVRvZ1CYXLspr0r7nA-V2oOWkH1c1qK~G~5igCFG4ryEFe8jJWUFRWhEMQv5rJWrFL8IpBl67639tl1kLJaf-lNW~1I5P5HKhOEK2A4UxqPwJF-35y5wUuXevy6TEw~i~Hor9uXR7QK5JRYWm8Q-VesIh0PlojrNm4pZo~VQ42oWxRusBIw__" },
    { name: "Study Room", image: "https://s3-alpha-sig.figma.com/img/b7cc/c388/d23bb45adf1dee5fa669566bc571b751?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CjDpOKQeLmFbOZEuJ5w~IPdN-1luVE~EMKBSy04qspEKCmYlPbS7uEk0rvZDCDxdOUZEglaoG-RPZgqwnnSNTRFjD-Vl7knQ2msuxRf-eikNAtnJX0vpCp~CrVy13RGWEXn~EwZC4pYrqrV~gwNWGIqc~DCetm83np6oluV35jbLjR6m9DCT0kBk-wsD98kzICP7RhKix4cDN87Zt4JFKcTojQ8ZbG~A-Eg2ebvOmnCDOZ~jx8GtR-Zd~8tHNpUkV0HDE7GVY81Xcxs2Q-g6U2ggXOckRnbOjA-llnSbAhD2VFLqaMGLniWTsPZeakY-XrEksVh7fT1k14y0pmitjw__" },
    { name: "Storage", image: "https://s3-alpha-sig.figma.com/img/19c4/8116/73b5e7682d48f29e1e0bfa2aba30eb89?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GKBFSwz~LiSpI~0VBG5D2idn07-TXoSAm5qq0qf861JyS8wucpyqa5zdRChYtgoT~0J98sfU7NAaJUvVT~Ry4-YP7EOJPFLwmgGVI551e~V-nz6amAutpyPDT6iPOSkbnarqNYWRPD-OgaXGQjid-0r~r2DDGuSYzMZBVRvZ1CYXLspr0r7nA-V2oOWkH1c1qK~G~5igCFG4ryEFe8jJWUFRWhEMQv5rJWrFL8IpBl67639tl1kLJaf-lNW~1I5P5HKhOEK2A4UxqPwJF-35y5wUuXevy6TEw~i~Hor9uXR7QK5JRYWm8Q-VesIh0PlojrNm4pZo~VQ42oWxRusBIw__" },
    { name: "Study Room", image: "https://s3-alpha-sig.figma.com/img/b7cc/c388/d23bb45adf1dee5fa669566bc571b751?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CjDpOKQeLmFbOZEuJ5w~IPdN-1luVE~EMKBSy04qspEKCmYlPbS7uEk0rvZDCDxdOUZEglaoG-RPZgqwnnSNTRFjD-Vl7knQ2msuxRf-eikNAtnJX0vpCp~CrVy13RGWEXn~EwZC4pYrqrV~gwNWGIqc~DCetm83np6oluV35jbLjR6m9DCT0kBk-wsD98kzICP7RhKix4cDN87Zt4JFKcTojQ8ZbG~A-Eg2ebvOmnCDOZ~jx8GtR-Zd~8tHNpUkV0HDE7GVY81Xcxs2Q-g6U2ggXOckRnbOjA-llnSbAhD2VFLqaMGLniWTsPZeakY-XrEksVh7fT1k14y0pmitjw__" },
];

  const [startIndex, setStartIndex] = useState(0);
  const itemsToShow = 6;

  const handleNext = () => {
    if (startIndex + itemsToShow < categories.length) {
      setStartIndex(startIndex + itemsToShow);
    }
  };

  const handlePrev = () => {
    if (startIndex - itemsToShow >= 0) {
      setStartIndex(startIndex - itemsToShow);
    }
  };

  return (
    <section className="p-4 bg-[gray-50] flex flex-col items-center mt-6 font-playfair ">
      {/* Main Heading */}
      <h1 className="text-3xl font-bold mb-8 text-center">Product Categories</h1>

      {/* Categories Container */}
      <div className="relative flex items-center w-full">
        {/* Left Arrow */}
        <button
          className="absolute left-0 transform -translate-y-1/2 top-1/2 text-gray-500 hover:text-black"
          onClick={handlePrev}
          disabled={startIndex === 0}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full px-12">
          {categories.slice(startIndex, startIndex + itemsToShow).map((category, index) => (
            <div
              key={index}
              className="relative w-[197px] h-[198px] bg-[#D3D3D3] rounded-lg shadow-lg flex flex-col items-center justify-center hover:bg-[#C7C7C7] hover:shadow-xl hover:scale-105 transition duration-300"
            >
              <h3 className="text-lg font-semibold text-center">{category.name}</h3>
              {/* Category Image */}
              <img
                src={category.image}
                alt={category.name}
                className="w-[103px] h-[103px] object-contain mt-2"
              />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          className="absolute right-0 transform -translate-y-1/2 top-1/2 text-gray-500 hover:text-black"
          onClick={handleNext}
          disabled={startIndex + itemsToShow >= categories .length}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default ProductCategories;

