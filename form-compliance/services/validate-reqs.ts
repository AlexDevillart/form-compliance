import { NextApiRequest } from "next";

const validateBody = (req: NextApiRequest) => {
  if (!req.body) {
    return false;
  }

  return true;
};

const validatePost = (req: NextApiRequest) => {
  if (req.method !== "POST") {
    return false;
  }

  return true;
};

export { validateBody, validatePost };
