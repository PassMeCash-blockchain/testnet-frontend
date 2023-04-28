import { SECRET_KEY } from "@/config";
import { AES, mode, enc } from "crypto-js";

export const encrypt = (m) => {
  let encrypted = AES.encrypt(m, SECRET_KEY, {
    mode: mode.ECB,
  });
  return encrypted;
};

export const decrypt = (m) => {
  const decrypted = AES.decrypt(m, SECRET_KEY, { mode: mode.ECB });
  return decrypted.toString(enc.Utf8);
};
