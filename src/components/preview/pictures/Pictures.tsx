import Pv1 from "../../../static/img/preview/pv1.webp";
import Pv2 from "../../../static/img/preview/pv2.webp";
import Pv3 from "../../../static/img/preview/pv3.webp";
import Pv4 from "../../../static/img/preview/pv4.webp";
import Pv5 from "../../../static/img/preview/pv5.webp";
import Pv6 from "../../../static/img/preview/pv6.webp";
import styles from "./Pictures.module.css";

export default function Pictures() {
  const previewPictures = [Pv1, Pv2, Pv3, Pv4, Pv5, Pv6];

  return (
    <>
      <h2 className="text-center font-bold text-3xl">Fotos</h2>
      <div className="flex flex-wrap">
        {previewPictures.map((pic) => {
          return (
            <div className="w-1/3 p-6 h-96 my-8">
              <img src={pic.src} alt="" className={styles.previewImg} />
            </div>
          );
        })}
      </div>
    </>
  );
}
