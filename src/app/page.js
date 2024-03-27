import Banner from "@/components/banner/Banner";
import FeaturedPosts from "@/components/posts/FeaturedPosts";
import Services from "@/components/services/Services";

export default function Home() {
  return (
    <>
      <Banner />
      <Services />
      <FeaturedPosts />
    </>
  );
}
