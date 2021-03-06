import NextCors from "nextjs-cors";
import jwt from "jsonwebtoken";
import dbConnect from "../../lib/dbConnect";
import User from "../../models/User";

export default async function handler(req, res) {
  const { method } = req;

  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  await dbConnect();

  const maxAge = 3 * 24 * 60 * 60;
  const createToken = (id) => {
    return jwt.sign({ id }, "user registration api", {
      expiresIn: maxAge,
    });
  };

  switch (method) {
    case "GET":
      try {
        const { email, password } = req.query;

        const user = await User.login(email, password);
        const token = createToken(user._id);
        // res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
        res.status(200).json({ user: { id: user._id, email, token } });
      } catch (err) {
        res.status(400).json({ error: err.message });
      }
      break;
    case "POST":
      try {
        const { email, password } = req.body;

        const user = await User.create({ email, password });
        const token = createToken(user._id);
        // res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
        res.status(201).json({ user: { id: user._id, email, token } });
      } catch (err) {
        res.status(400).json({ error: err.message });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
