import '../Styles/feed.css';
import './PostIndividual';
import PostIndividual from './PostIndividual';

const fakePost = [
    {
        id_: 12345,
        username: "Mary Traveler",
        userphoto: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.explicit.bing.net%2Fth%3Fid%3DOIP.ZJOQOm4SvCRpk0Z6nyYNAgHaH0%26pid%3DApi&f=1&ipt=c1d0757557bd6cc009cf2fa8dad09994e3183b0780341e42ab991a46f26e739a&ipo=images",
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.pMbRD3YNuuS8Y98caOyCqgHaE7%26pid%3DApi&f=1&ipt=c08ec5abd60bb027601c7843e741d89861bd430651ee2c65b48336dc71718adc&ipo=images",
        comment: "I got to these cool mountains. To get there you have to turn left at THAT tree not THIS tree... got it?"
    },
    {
        id_: 12345,
        username: "Mary Traveler",
        userphoto: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.explicit.bing.net%2Fth%3Fid%3DOIP.ZJOQOm4SvCRpk0Z6nyYNAgHaH0%26pid%3DApi&f=1&ipt=c1d0757557bd6cc009cf2fa8dad09994e3183b0780341e42ab991a46f26e739a&ipo=images",
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.pMbRD3YNuuS8Y98caOyCqgHaE7%26pid%3DApi&f=1&ipt=c08ec5abd60bb027601c7843e741d89861bd430651ee2c65b48336dc71718adc&ipo=images",
        comment: "I got to these cool mountains. To get there you have to turn left at THAT tree not THIS tree... got it?"
    },
    {
        id_: 12345,
        username: "Mary Traveler",
        userphoto: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.explicit.bing.net%2Fth%3Fid%3DOIP.ZJOQOm4SvCRpk0Z6nyYNAgHaH0%26pid%3DApi&f=1&ipt=c1d0757557bd6cc009cf2fa8dad09994e3183b0780341e42ab991a46f26e739a&ipo=images",
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.pMbRD3YNuuS8Y98caOyCqgHaE7%26pid%3DApi&f=1&ipt=c08ec5abd60bb027601c7843e741d89861bd430651ee2c65b48336dc71718adc&ipo=images",
        comment: "I got to these cool mountains. To get there you have to turn left at THAT tree not THIS tree... got it?"
    },
]


function Feed() {
  return (
    <div className='feed-full'>
        {fakePost.map((post) => (
            <PostIndividual key={post.id} id={post.id} username={post.username} userphoto={post.userphoto} img={post.img} comment={post.comment} />
      ))}
    </div>
  )
}

export default Feed;
