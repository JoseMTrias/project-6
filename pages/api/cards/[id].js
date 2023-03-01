import dbConnect from "../../../db/connect";
import Card from "../../../db/models/Card";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "PUT") {
    try {
      const cardToUpdate = await Card.findByIdAndUpdate(id, {
        $set: request.body,
      });
      response.status(200).json(cardToUpdate);
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.message });
    }
  }
  if (request.method === "DELETE") {
    try {
      const cardToDelete = await Card.findByIdAndDelete(id);
      return response.status(200).json(cardToDelete);
    } catch {
      console.error(`Error: ${response.status}`);
    }
  }
}
