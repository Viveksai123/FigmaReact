import React from "react";

const Segments = () => {
  const segments = [
    {
      title: "Residential",
      image:
        "https://s3-alpha-sig.figma.com/img/8d7f/0f21/fc175588cb210a59c9fc97d9ac64e126?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Fp5D7OJMv0q~ZFce44tvV-opEh4jszpDBftlv2E6dby2e5htbtd91-K6d3vEcA0zaipzQbnjoX8f~GKzQBOdKZaLXqOIz6YB5d3K8f-xscBc5KT5GjVwA08WyafDWW~6Exheyz0L5j0tqI6zmYRhvcyQZATvl96BNlJNp8tN242nIT5BR53LGDhGplEPXRJTrbI~MquT-8TPpxB~wP6GXm1YPXrpihhhuAhUBgbIdrjAE~txszjhDtX1HQZ4KkqCg9M7L9hiy2fJ0fRQfk7rah8hD1uFrJWsEMqvntspX6CCAW-Sb7V2nCvHGd2Oh14TQ781v4qmPaKbDN6EVqyoNQ__",
    },
    {
      title: "Institutional",
      image:
        "https://s3-alpha-sig.figma.com/img/c64b/c42c/63341ea16e5872842115871305fb111f?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VFbYJhh7sGP-BG~6E2R1ZvnvIqRB7IjWwx6xvgk6mllQh9klmfIAUAJZeaQZ~SYwDss9pbrfejgPG1Nrn58KJ05OCGUV3rjSnFFQdiN-dDuC2dGSw3PPVdgm4ghK52N-sjpw250TpRMSWDGm880cw4l-GAwOOSijpwMiesf497lgbYUbmHuzAoHEakl~lZZCoCopnMpJbp667UQ2IgLToMHge1AHtaPhSqCUyGOknVwD1AVn~qx5C8p9NxxmhFiTEgCXwIj9YcbtALuSwWKuVse~Wo0jHWu6mdVeucaSJZO3CHHTvXTaNpvo8zQ1Jlht84NLWqgpAyeGoO7jVFrYRA__",
    },
    {
      title: "Commercial",
      image:
        "https://s3-alpha-sig.figma.com/img/ceb9/5648/6bede647d8108a92d1fca96a97437d4e?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R9-qfXop7z4iDMl5AllF5LB0Ozruk8gOGbZy6jCKSm8u55imUmG~or4klup6R9surufhvfVl-unr-FD~qzIn3YW43w0CWek4ja1N3mezREFgRKd3dIMTsxX3AkbHBMMAdP6kgvqkq-KwfqQVdR0YtkJoZ02XI3tlg4mXnjfZxXiHgaRy6HJJoiMdnhvLUxjt9hbsFQxH1pFeKFx4jLbgLxM1pCpJ89y6TIux8c0EsJpNY~r2F1eKqODOONZab2N0SgZXu~dslYAUtEqg1amD-IS3fC-V~owOtCVCBaMocKHMlv5ETj6VrpU~HtsvE2Ci-Lb82TTEOujuYRY5qXjFuA__",
    },
  ];

  return (
    <div className="py-10 px-4 w-[95vw]">
      {/* Heading */}
      <div className="bg-[#D3D3D3] p-4 flex items-center rounded-xl justify-start gap-3">
  {/* Icon */}
  <div className="w-6 h-6 bg-gray-800 text-white flex items-center justify-center rounded-full">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-4 h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 10.5L7.5 3.75m9 6.75L7.5 20.25m9-9H3.75"
      />
    </svg>
  </div>
  
  {/* Title */}
  <h2 className="text-2xl font-bold text-gray-800 text-center">
    Segments
  </h2>
</div>


      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-8xl mx-auto mt-6">
        {segments.map((segment, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden shadow-lg hover:scale-105 transform transition duration-300 ease-in-out"
          >
            {/* Background Image */}
            <div
              className="h-80 w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${segment.image})` }}
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center">
              <h3 className="text-white font-bold text-xl mb-[10vw]">
                {segment.title}
              </h3>
              <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-700 transition duration-300">
                View More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Segments;
