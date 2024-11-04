import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values"; // Corrected path for 'v's

export default defineSchema({
  message: defineTable({
    sender: v.string(),
    content: v.string(),
  }),
});
