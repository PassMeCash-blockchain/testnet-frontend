import { Access, Axios, Cookie, Refresh, MODE } from "@/config";

const login = async (req, res) => {
  if (req.method === "POST") {
    const { login, password } = req.body;

    const body = { login, password };

    try {
      const { data, status } = await Axios.post(`login`, body);

      if (status === 200) {
        res.setHeader("Set-Cookie", [
          Cookie.serialize(Access, data.message.access, {
            httpOnly: true,
            secure: MODE !== "local",
            maxAge: 60 * 30,
            domain: "passme.cash",
            sameSite: "strict",
            path: "/",
          }),
          Cookie.serialize(Refresh, data.message.refresh, {
            httpOnly: true,
            secure: MODE !== "local",
            maxAge: 60 * 60 * 24,
            domain: "passme.cash",
            sameSite: "strict",
            path: "/",
          }),
        ]);
          delete data.message.access
          delete data.message.refresh
        return res.status(200).json({ success: data.message });
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

export default login;