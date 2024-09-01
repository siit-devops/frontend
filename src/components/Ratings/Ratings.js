// import {
//   GET_HOST_RATINGS,
//   GET_ACCOMMODATION_RATINGS,
// } from "../../helpers/graphql";
// import { ApolloClient, InMemoryCache, useQuery } from "@apollo/client";

// const customClient = new ApolloClient({
//   uri: "http://localhost:8084/graphql",
//   cache: new InMemoryCache(),
// });

// export const Ratings = ({ id, type }) => {
//   const { loading, error, data } = useQuery(
//     type == "HOST_RATINGS" ? GET_HOST_RATINGS : GET_ACCOMMODATION_RATINGS,
//     {
//       client: customClient,
//       variables: { id: id },
//     }
//   );
//   if (loading) return "Loading...";
//   if (error) return `Error! ${error.message}`;

//   return (
//     <>
//       {data[
//         type == "HOST_RATINGS"
//           ? "getAllHostRatings"
//           : "getAllAccommodationRatings"
//       ].map((r) => {
//         let checked = [];
//         for (let index = 0; index < r.ratingValue; index++) {
//           checked.push(<span class="fa fa-star checked"></span>);
//         }
//         for (let index = checked.length; index < 5; index++) {
//           checked.push(<span class="fa fa-star"></span>);
//         }
//         return (
//           <div key={r.id} className="row d-flex justify-content-between">
//             <h4>{r.guest.username}</h4>
//             <p>{r.createdAt}</p>
//             <p>{r.description}</p>
//             <div class="star">{checked}</div>
//           </div>
//         );
//       })}
//     </>
//   );
// };
