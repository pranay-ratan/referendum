import { volunteers, type Volunteer, type InsertVolunteer } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  createVolunteer(volunteer: InsertVolunteer): Promise<Volunteer>;
}

export class DatabaseStorage implements IStorage {
  async createVolunteer(insertVolunteer: InsertVolunteer): Promise<Volunteer> {
    const [volunteer] = await db.insert(volunteers).values(insertVolunteer).returning();
    return volunteer;
  }
}

export const storage = new DatabaseStorage();
