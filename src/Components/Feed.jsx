import '../Styles/feed.css';
import './PostCard';
import PostCard from './PostCard';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// const { MONGODB_URL } = process.env;


//This fill be removed once connected to backend.
// const fakePost = [
//     {
//         id_: 12345,
//         username: "Mary Traveler",
//         userphoto: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.vJmT1rT_xAYi3Op1rPbG3QHaHa%26pid%3DApi&f=1&ipt=7dedbc9bdc723139df1896fc2972f825f00d26a3ae534f080af58e0f26c2b664&ipo=images",
//         img: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages5.fanpop.com%2Fimage%2Fphotos%2F31700000%2FLondon-England-great-britain-31748894-1366-768.jpg&f=1&nofb=1&ipt=13881f606db1b148cec9bb6937d8755786b24a6c0b51c3b692dd159653c42d6f&ipo=images",
//         location: "London, England",
//         comment: "You gotta ride the tube while you're here and don't forget to mind the gap!",
//         likes: 0,
//     },
//     {
//         id_: 12346,
//         username: "nomadMan56",
//         userphoto: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.SKIXkrN7DvgdNR0umbbvKwAAAA%26pid%3DApi&f=1&ipt=9fe056b619f8c4d3cce875388bb0bd20cb342535ffc8d8f41a5ae6e057b0d59a&ipo=images",
//         img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.U3v3qs2_XiAVi0fLcjlLkQHaEK%26pid%3DApi&f=1&ipt=86a81e159c8f6279cc6c6a8aa2452df79904579ee05dfb41bb8b0059cad376ad&ipo=images",
//         location: "Rocky Mtn. National Park, CO, USA",
//         comment: "I got to these cool mountains. To get there you have to turn left at THAT tree not THIS tree... got it?",
//         likes: 5,
//     },
//     {
//         id_: 12347,
//         username: "BigSurfBro57",
//         userphoto: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.explicit.bing.net%2Fth%3Fid%3DOIP.fNb2nxeCXSMPf49UVHBq0wHaJQ%26pid%3DApi&f=1&ipt=11f762a8953f644f34a08b0059875797f9b9bce1250751fc474e4ad764533792&ipo=images",
//         img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.fineartamerica.com%2Fimages%2Fartworkimages%2Fmediumlarge%2F1%2Fkitty-hawk-outer-banks-north-carolina-brendan-reals.jpg&f=1&nofb=1&ipt=209ebbf99aa3de65b9d79480daf489c22e4f3f59877baeaa88e391558a0b37ed&ipo=images",
//         location: "Kitty Hawk, North Carolina, USA",
//         comment: "The gnarliest waves are between the small town of Kitty Hawk and the town of Duck, there is a beach access right there. A hidden gem - not over run by folks.",
//         likes: 4000,
//     },
//     {
//         id_: 12348,
//         username: "SnowLover7",
//         userphoto: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.7GFAfq65o4lMWps5wLRIgAHaE7%26pid%3DApi&f=1&ipt=875a19d7940e6106c302a229cc2fde12bbb7d75fc9f5bc5642990f9eb9b6b916&ipo=images",
//         img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.NFZYtC9I_mnCk8SYkw5PeQHaHV%26pid%3DApi&f=1&ipt=6e3d40c212334259c28eacee01dd53ae78f7e348d21aeba1bcd3ab9fa11df7e9&ipo=images",
//         location: "Zermatt, Switzerland",
//         comment: "The ski-lifts here were top notch. They lifted me up to the top of the mountain way waster than other ski-lifts. Wow! The Ski-lift were almost more exciting that the actualy skiing. WWwwwow! ",
//         likes: 540,
//     },
// ]


function Feed() {

//---Everything here is for getting real posts when ready

    const [post, setPost] = useState({});

    const getPosts = async () => {
      try {
        //Get data from BE
        const response = await fetch('https://shoe-string.herokuapp.com/posts');
        const allPosts = await response.json();
        setPost(allPosts);
      }catch (err){
        console.log(err);
      }
    }

    useEffect(() => {
        getPosts()
    }, []);

//-----------------------------------------------------------
  return ( 
  <>

  {/* Will change the below to correct variable names, etc. */}
    <div className='feed-full'>
        {post?.map((post) => {
            return (
            <PostCard key={post.id} id={post.id} title={post.title} username={post.username} userphoto={post.userphoto} img={post.img} location={post.location} body={post.body} comments={post.comments} likes={post.likes} tags={post.tags} />
            )
        })}
    </div>
 </>
    
  )
}

export default Feed;
