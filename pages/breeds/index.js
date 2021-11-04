import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

function Breeds({ posts }) {
  return (
    <ul>
      {posts.map(post => (
        <li>
          <Link
            href={{
              pathname: "/search",
              query: { breed: post.id }
            }}
          >
            {post.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
export async function getStaticProps() {
  var myHeaders = new Headers();
  myHeaders.append("x-api-key", 'e131c0ef-9dd7-4ce2-a22e-1780eebbafe7');
  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };
  const res = await fetch(
    "https://api.thecatapi.com/v1/breeds",
    requestOptions
  );
  const posts = await res.json();
  console.log(posts);
  return {
    props: {
      posts
    }
  };
}

export default Breeds;
