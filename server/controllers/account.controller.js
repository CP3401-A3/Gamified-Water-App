import * as service from "../services/account.service.js";
export const logIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await service.logIn(email, password);
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

export const signUp = async (req, res) => {
  try {
    const { email, name, password } = req.body;
    const result = await service.signUp(email, name, password);
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

export const getInfo = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    const result = await service.getInfo(token);
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

export const getUserPlant = async (req, res) => {
  try {
    const { userId } = req;
    const result = await service.getUserPlant(userId);
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send(err.message);
  }
};
