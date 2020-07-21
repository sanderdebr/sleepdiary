import * as Session from "~/src/common/session";
import * as Database from "~/src/common/database";

export default async (req, res, app) => {
  const { session } = await Session.getSession(req);

  if (!session || session.error) {
    return app.render(req, res, "/auth/sign-in-error/", { session: null });
  }

  const activities = await Database.getActivities({ id: session.id });

  return app.render(req, res, "/dashboard", { session, activities });
};
