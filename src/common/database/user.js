import db from "~/db";
import { runQuery } from "./";

export const getUserByEmail = async ({ email }) => {
  return await runQuery({
    label: "GET_USER_BY_EMAIL",
    queryFn: async () => {
      const query = await db("users").where("email", email);

      if (!query || query.error) {
        return null;
      }

      if (query[0]) {
        return query[0];
      }

      return null;
    },
    errorFn: async (err) => {
      return {
        error: "GET_USER_BY_EMAIL",
        source: err,
      };
    },
  });
};

export const createUser = async ({
  email,
  password,
  salt,
  data = { name: null, verified: null },
}) => {
  return await runQuery({
    label: "CREATE_USER",
    queryFn: async () => {
      const query = await db("users").insert([
        { email, password, salt, name: data.name, verified: data.verified },
      ]);

      // Returns ID of created user
      const index = query ? query.pop() : null;
      return index;
    },
    errorFn: async (err) => {
      return {
        error: "CREATE_USER",
        source: err,
      };
    },
  });
};
