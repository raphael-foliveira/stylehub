import Services1 from "../../../static/img/preview/services1.webp";
import Services2 from "../../../static/img/preview/services2.webp";
import Services3 from "../../../static/img/preview/services3.webp";

export default function Services() {
  const servicesInfo = [
    {
      key: 1,
      image: Services1,
      description: "Corte V.O com degradê: R$25,00",
    },
    {
      key: 2,
      image: Services2,
      description: "Barba com desenho: R$20,00",
    },
    {
      key: 3,
      image: Services3,
      description: "Design de sobrancelhas: R$30,00",
    },
  ];

  return (
    <div className="mb-10">
      <h2 className="text-center font-bold text-3xl my-10">Cortes & Serviços</h2>
      <div className="flex flex-wrap mb-10">
        {servicesInfo.map((service) => {
          return (
            <div className="w-full lg:w-1/3 p-4 h-96 text-center mb-20" key={service.key}>
              <img src={service.image.src} alt="" className="object-cover h-full w-auto m-auto" />
              <h3 className="text-3xl">{service.description}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
