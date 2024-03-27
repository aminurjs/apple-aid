import { dataFetching } from "@/lib/utils";

const PostDetails = async ({ params }) => {
  const data = await dataFetching(
    `http://localhost:5000/api/post/${params.id}`
  );
  const { image, title, content } = data;
  return (
    <div className="max-w-screen-md mx-auto pt-5 pb-16 px-5">
      <img className="rounded mb-6 aspect-video" src={image} alt="" />
      <h3 className="mb-4 font-semibold text-dark-01  text-2xl pb-2 border-b border-gray-300">
        {title}
      </h3>
      <p className="leading-normal text-dark-02 mb-4">{content}</p>
    </div>
  );
};

export default PostDetails;
