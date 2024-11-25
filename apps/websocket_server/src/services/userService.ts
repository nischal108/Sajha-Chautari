import api from "./api";

export const userService = {
  async getUserDetails(userId: string): Promise<any> {
    try {
      const response = await api.get("user/profiles");
      return response.data.data;
    } catch (error) {
      console.error("Error fetching user details:", error);
      throw error;
    }
  },

  updateUserPosition(userId: string, newPosition: { x: number; y: number }) {
  },
};
