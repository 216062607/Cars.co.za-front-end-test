// posts will be populated at build time by getStaticProps()
import { useRouter } from "next/router";
import Image from "next/image";

function Search({ posts, flag }) {
  return (
    <ul>
      {flag ? (
        <div>
          {posts[0].categories[0].name}

          {posts.map(post => (
            <Image
              src={post.url}
              alt="Picture of the author"
              width={500}
              height={500}
            />
          ))}
        </div>
      ) : (
        <div>
          Name: {posts[0].breeds[0].name}
          <br /> Description:{posts[0].breeds[0].description} <br />
          {posts.map(post => (
            <Image
              src={post.url}
              alt="Picture of the author"
              width={500}
              height={500}
            />
          ))}
        </div>
      )}
    </ul>
  );
}

Search.getInitialProps = async ctx => {
  const category = ctx.query.category;
  const breed = ctx.query.breed;

  console.log("getInitialProps child = ", category);

  var myHeaders = new Headers();
  myHeaders.append("x-api-key", 'e131c0ef-9dd7-4ce2-a22e-1780eebbafe7');

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };

  var url;
  var flag;
  if (category) {
    url =
      "https://api.thecatapi.com/v1/images/search?category_ids=" +
      category +
      "&limit=10&page=1";
    flag = true;
  } else {
    url =
      "https://api.thecatapi.com/v1/images/search?breed_ids=" +
      breed +
      "&limit=10&page=1";
    flag = false;
  }

  const res = await fetch(url, requestOptions);

  const posts = await res.json();
  console.log("posts = ", posts);

  return {
    posts,
    flag
  };
};

// export async function getInitialProps(context) {
//   const { category } = context.query;
//   console.log("getInitialProps = ", context.query);
//   // // Call an external API endpoint to get posts.
//   // // You can use any data fetching library
//   // var myHeaders = new Headers();
//   // myHeaders.append("x-api-key", "e131c0ef-9dd7-4ce2-a22e-1780eebbafe7");

//   // var requestOptions = {
//   //   method: "GET",
//   //   headers: myHeaders,
//   //   redirect: "follow"
//   // };

//   // const res = await fetch(
//   //   "https://api.thecatapi.com/v1/images/search?category_ids=" + category,
//   //   requestOptions
//   // );

//   // const posts = await res.json();
//   return {
//     props: {
//       category
//     }
//   };
// }

export default Search;
