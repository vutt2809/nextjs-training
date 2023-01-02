// import { comments } from '../../data/comments';

// export default function Comment({ comment }) {
//     return (
//         <div>
//             {comment.id}. {comment.title}
//         </div>
//     );
// }

// export async function getStaticProps(context) {
//     const { paramas } = context;
//     const { commentId } = paramas;

//     const comment = comments.find((comment) => comment.id === parseInt(commentId));

//     return { props: { comment } };
// }

// export async function getStaticPaths() {
//     return {
//         paths: [{ paramas: { commentId: '1' } }, { paramas: { commentId: '2' } }, { paramas: { commentId: '3' } }],
//         fallback: false,
//     };
// }
