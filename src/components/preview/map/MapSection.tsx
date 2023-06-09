export default function MapSection() {
  return (
    <div className="text-center mb-10">
      <h2 className="text-4xl font-bold mb-6">Barbearia do Léo</h2>
      <p>Av. Vasco da Gama 1667</p>
      <p className="pb-4">Salvador, Bahia</p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5447.196341166529!2d-38.4941739343755!3d-12.997615197743636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbr!4v1686339208065!5m2!1sen!2sbr"
        style={{ border: 0, width: "100%", height: "400px" }}
        loading="lazy"
        className="w-full h-96"
      ></iframe>
    </div>
  );
}
