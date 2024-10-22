// server sayt qilib ishlatish,RenderFData komponentimning otasi.
import { BASE_URL, request } from "@/services/api";
import RenderData from "../RenderData";

const Cards = async () => {
  const res = await request.get(`/improve`);

  return (
    <div className="flex gap-3 gap-y-5 flex-wrap">
      <RenderData/>
    </div>
  );
};

export default Cards;

