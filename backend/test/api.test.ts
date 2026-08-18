import request from "supertest";
import { describe, expect, it } from "vitest";

import app from "../src/app";

describe("Patientor API", () => {
  it("GET /api/ping returns pong", async () => {
    const response = await request(app).get("/api/ping");

    expect(response.status).toBe(200);
    expect(response.text).toBe("pong");
  });
});