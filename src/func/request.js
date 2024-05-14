import { baseUrl } from "../config/const";
import { postsAtom, store } from "../state/atom";

export function getPosts() {
    store.set(postsAtom, async() => {
        /* TODO:
            GET 요청으로 post 목록 불러오기.
            URL: ${baseURL}/posts
        */
       // fetch 라는 함수로 서버에 요청을 보냅니다.
       const res=await fetch(`${baseUrl}/posts`);// fetch의 기본 메소드는 get메소드
       const resault=await res.json();
       resault.sort((a,b)=>b.id-a.id);  //id의 내림차순으로 정렬(최신순으러 정렬)
       return resault;
    });
}