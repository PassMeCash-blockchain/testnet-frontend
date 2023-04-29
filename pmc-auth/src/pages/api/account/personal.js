import { Axios } from "@/config";

export default async (req, res) => {
  if (req.method === "POST") {
    const { first_name, last_nme, dob, email } = req.body;

    const body = { first_name, last_nme, dob, email };

    try {
      const { data, status } = await Axios.post(`personal`, body);

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
