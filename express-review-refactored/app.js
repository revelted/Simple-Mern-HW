/**
 * You know what? If we keep on putting all of our logic
 * in one file that's going to end very poorly for us.
 * Remember what we said about "separation of concerns?"
 * So, we should separate some concerns:
 *  - Let's refactor out our server related stuff -
 *    leaving only the app.listener. This seems trivial
 *    but will come in huge when we build endpoint tests.
 *  - We could probably refactor out our routes.
 *  - Our routes are not only handling routes but also
 *    the business logic behind it. Let's change that.
 *    We'll call that business logic a "controller."
 */

const app = require("./server");

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
