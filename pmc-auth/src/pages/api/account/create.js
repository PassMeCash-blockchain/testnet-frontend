import { Axios } from "@/config";
import { decrypt, encrypt } from "@/secure";

const create = async (req, res) => {
  if (req.method === "POST") {
    const { phone_number, password } = req.body;

    const body = { phone_number, password };

    try {
      const { data, status } = await Axios.post(`create`, body);

      if (status === 201) {
        return res.status(201).json({ success: data.message });
      } else {
        return res.status(status).json({
          error: data,
        });
      }
    } catch (err) {
      return res.status(500).json({
        error: err.response.data,
      });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
};

export default create;