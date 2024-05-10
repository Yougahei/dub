import { openApiErrorResponses } from "@/lib/openapi/responses";
import z from "@/lib/zod";
import {
  analyticsResponseSchema,
  getAnalyticsQuerySchema,
} from "@/lib/zod/schemas";
import { ZodOpenApiOperationObject } from "zod-openapi";
import { workspaceParamsSchema } from "../request";

export const getOSAnalytics: ZodOpenApiOperationObject = {
  operationId: "getOSAnalytics",
  "x-speakeasy-name-override": "os",
  summary: "Retrieve OS analytics",
  description:
    "Retrieve the top OS by number of clicks for a link, a domain, or the authenticated workspace.",
  requestParams: {
    query: workspaceParamsSchema.merge(getAnalyticsQuerySchema),
  },
  responses: {
    "200": {
      description: "The top OS by number of clicks",
      content: {
        "application/json": {
          schema: z.array(analyticsResponseSchema["os"]),
        },
      },
    },
    ...openApiErrorResponses,
  },
  tags: ["Analytics"],
  security: [{ token: [] }],
};
