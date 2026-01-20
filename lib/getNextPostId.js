import Counter from "../app/models/Counter";
export default async function getNextPostId() {
  const counter = await Counter.findOneAndUpdate(
    { _id: "postId" },
    { $inc: { seq: 1 } },
    { new: true, upsert: true }
  );
  return counter.seq;
}