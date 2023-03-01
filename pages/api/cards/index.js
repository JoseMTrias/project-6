import dbConnect from "../../../db/connect";
import Card from "../../../db/models/Card";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const cards = await Card.find();
    console.log("inside fetch api/cards", cards);
    return response.status(200).json(cards);
  }
}
