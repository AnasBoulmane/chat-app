import request from "supertest";
import { server } from "index";

describe("", () => {
  afterAll(() => server.close());

  test("serve static content", async () => {
    await request(server).get("/").expect("Content-Type", "text/html; charset=UTF-8").expect(200);
  });

  test("/api/v1/", async () => {
    const response = await request(server)
      .get("/api/v1")
      .expect("Content-Type", "text/plain; charset=utf-8")
      .expect(200);
    expect(response.text).toBe("Hello World");
  });
});
