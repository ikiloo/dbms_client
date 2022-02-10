import Header from './components/Header'
import { getAuthId } from './api/modules/auth'

const photos = () => {
  return (
    <div>
      <Header title="espreso_DBMS"/>
      <h1 onClick={fetchTest}>반갑지라요</h1>
      
    </div>
  );
};
function fetchTest(){
  let request = {
    id: 'espresomedia',
    password: '!thffntus0830'
  }
  getAuthId(request).then((data)=>{
    console.log('data____*****>',data)
  })
}

export default photos;
