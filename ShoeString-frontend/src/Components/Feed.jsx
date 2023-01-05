import '../Styles/feed.css';
import './PostCard';
import PostCard from './PostCard';

const fakePost = [
    {
        id_: 12345,
        username: "Mary Traveler",
        userphoto: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.explicit.bing.net%2Fth%3Fid%3DOIP.ZJOQOm4SvCRpk0Z6nyYNAgHaH0%26pid%3DApi&f=1&ipt=c1d0757557bd6cc009cf2fa8dad09994e3183b0780341e42ab991a46f26e739a&ipo=images",
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.pMbRD3YNuuS8Y98caOyCqgHaE7%26pid%3DApi&f=1&ipt=c08ec5abd60bb027601c7843e741d89861bd430651ee2c65b48336dc71718adc&ipo=images",
        location: "London, England",
        comment: "I got to these cool mountains. To get there you have to turn left at THAT tree not THIS tree... got it?",
        likes: 0,
    },
    {
        id_: 12345,
        username: "Mary Traveler",
        userphoto: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.explicit.bing.net%2Fth%3Fid%3DOIP.ZJOQOm4SvCRpk0Z6nyYNAgHaH0%26pid%3DApi&f=1&ipt=c1d0757557bd6cc009cf2fa8dad09994e3183b0780341e42ab991a46f26e739a&ipo=images",
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.pMbRD3YNuuS8Y98caOyCqgHaE7%26pid%3DApi&f=1&ipt=c08ec5abd60bb027601c7843e741d89861bd430651ee2c65b48336dc71718adc&ipo=images",
        location: "London, England",
        comment: "I got to these cool mountains. To get there you have to turn left at THAT tree not THIS tree... got it?",
        likes: 5,
    },
    {
        id_: 12345,
        username: "Mary Traveler",
        userphoto: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.explicit.bing.net%2Fth%3Fid%3DOIP.ZJOQOm4SvCRpk0Z6nyYNAgHaH0%26pid%3DApi&f=1&ipt=c1d0757557bd6cc009cf2fa8dad09994e3183b0780341e42ab991a46f26e739a&ipo=images",
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.pMbRD3YNuuS8Y98caOyCqgHaE7%26pid%3DApi&f=1&ipt=c08ec5abd60bb027601c7843e741d89861bd430651ee2c65b48336dc71718adc&ipo=images",
        location: "London, England",
        comment: "I got to these cool mountains. To get there you have to turn left at THAT tree not THIS tree... got it?",
        likes: 4000,
    },
]


function Feed() {
  return (
        fakePost.length ?
    <div className='feed-full'>
        {fakePost.map((post) => (
            <PostCard key={post.id} id={post.id} username={post.username} userphoto={post.userphoto} img={post.img} location={post.location} comment={post.comment} likes={post.likes} />
      ))}
    </div>
        : 
        <div className='no-content'>
        <p> That's all the content! </p>
        </div>  
  )
}

export default Feed;
