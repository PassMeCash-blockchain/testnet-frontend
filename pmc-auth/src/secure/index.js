import { SECRET_KEY } from "@/config";
import { AES, mode, enc } from "crypto-js";

export const encrypt = (m, t = "str") => {
    if (t == "str") {
    let encrypted = AES.encrypt(m, SECRET_KEY, {
      mode: mode.ECB,
    });
    return encrypted;
  } else {
    let encrypted = AES.encrypt(JSON.stringify(m), SECRET_KEY, {
      mode: mode.ECB,
    });
    return encrypted;
  }
};

export const decrypt = (m, t = "str") => {
  const decrypted = AES.decrypt(m, SECRET_KEY, { mode: mode.ECB });
  if (t == "str") {
    return decrypted.toString(enc.Utf8);
  } else {
    return JSON.parse(decrypted.toString(enc.Utf8));
  }
};
