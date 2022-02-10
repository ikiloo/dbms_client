
export default function Home(posts) {
  return (
    <div>
      <h1>안녕하시렵니까?</h1>
    </div>
  )
}

// export const getServerSideProps = async()=>{
//   const res = await fetch('http://192.168.0.210:5678/webapi/auth.cgi?api=SYNO.API.Auth&version=3&method=login&account=espresomedia&passwd=!thffntus0830&session=FileStation&format=cookie')
//   const posts = await res.json();
//   console.log("first___",posts)
//   return {
//     props: {
//       posts
//     }
//   }
// }